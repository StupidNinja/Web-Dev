import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../models/company.interface';
import { Vacancy } from '../../models/vacancy.interface';

@Component({
  selector: 'app-vacancies',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit {
  company: Company | null = null;
  vacancies: Vacancy[] = [];
  loading = false;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private companyService: CompanyService
  ) { }

  ngOnInit(): void {
    this.getCompanyData();
  }

  getCompanyData(): void {
    this.loading = true;
    const companyId = Number(this.route.snapshot.paramMap.get('id'));
    
    if (isNaN(companyId)) {
      this.error = 'Invalid company ID';
      this.loading = false;
      return;
    }

    // Get company details
    this.companyService.getCompany(companyId).subscribe({
      next: (company) => {
        this.company = company;
        
        // Get vacancies for this company
        this.companyService.getCompanyVacancies(companyId).subscribe({
          next: (vacancies) => {
            this.vacancies = vacancies;
            this.loading = false;
          },
          error: (err) => {
            this.error = 'Failed to load vacancies';
            console.error('Error fetching vacancies:', err);
            this.loading = false;
          }
        });
      },
      error: (err) => {
        this.error = 'Failed to load company details';
        console.error('Error fetching company:', err);
        this.loading = false;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/companies']);
  }
}