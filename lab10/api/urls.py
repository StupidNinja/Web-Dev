from django.urls import path
from .views import (
    CompanyListAPIView, 
    CompanyDetailAPIView, 
    CompanyVacanciesAPIView,
    VacancyListAPIView, 
    VacancyDetailAPIView, 
    TopTenVacanciesAPIView
)
from .fbv import (
    company_list, 
    company_detail, 
    company_vacancies,
    vacancy_list,
    vacancy_detail,
    top_ten_vacancies
)

urlpatterns = [
    # Class-based views
    path('companies/', CompanyListAPIView.as_view(), name='company-list'),
    path('companies/<int:id>/', CompanyDetailAPIView.as_view(), name='company-detail'),
    path('companies/<int:id>/vacancies/', CompanyVacanciesAPIView.as_view(), name='company-vacancies'),
    path('vacancies/', VacancyListAPIView.as_view(), name='vacancy-list'),
    path('vacancies/<int:id>/', VacancyDetailAPIView.as_view(), name='vacancy-detail'),
    path('vacancies/top_ten/', TopTenVacanciesAPIView.as_view(), name='top-ten-vacancies'),
    
    # Function-based views
    path('fbv/companies/', company_list, name='fbv-company-list'),
    path('fbv/companies/<int:id>/', company_detail, name='fbv-company-detail'),
    path('fbv/companies/<int:id>/vacancies/', company_vacancies, name='fbv-company-vacancies'),
    path('fbv/vacancies/', vacancy_list, name='fbv-vacancy-list'),
    path('fbv/vacancies/<int:id>/', vacancy_detail, name='fbv-vacancy-detail'),
    path('fbv/vacancies/top_ten/', top_ten_vacancies, name='fbv-top-ten-vacancies'),
]