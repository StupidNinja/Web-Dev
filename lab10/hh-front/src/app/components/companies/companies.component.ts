import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../models/company.interface';

@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companies: Company[] = [];
  loading = false;
  error = '';

  constructor(private companyService: CompanyService, private router: Router) { }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies(): void {
    this.loading = true;
    this.companyService.getCompanies().subscribe({
      next: (data) => {
        this.companies = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load companies';
        console.error('Error fetching companies:', err);
        this.loading = false;
      }
    });
  }

  goToVacancies(companyId: number): void {
    this.router.navigate(['/companies', companyId, 'vacancies']);
  }
}