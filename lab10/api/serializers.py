from rest_framework import serializers
from .models import Company, Vacancy

# Using ModelSerializer for Company
class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ['id', 'name', 'description', 'city', 'address']

# Using regular Serializer for Vacancy
class VacancySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=255)
    description = serializers.CharField()
    salary = serializers.FloatField()
    company_id = serializers.IntegerField(write_only=True)
    company = serializers.PrimaryKeyRelatedField(read_only=True)

    def create(self, validated_data):
        company_id = validated_data.pop('company_id')
        company = Company.objects.get(id=company_id)
        return Vacancy.objects.create(company=company, **validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.salary = validated_data.get('salary', instance.salary)
        
        if 'company_id' in validated_data:
            company = Company.objects.get(id=validated_data['company_id'])
            instance.company = company
            
        instance.save()
        return instance