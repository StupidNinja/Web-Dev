import { Routes } from '@angular/router';
import { CompaniesComponent } from './components/companies/companies.component';
import { VacanciesComponent } from './components/vacancies/vacancies.component';

export const routes: Routes = [
  { path: '', redirectTo: '/companies', pathMatch: 'full' },
  { path: 'companies', component: CompaniesComponent },
  { path: 'companies/:id/vacancies', component: VacanciesComponent }
];