from django.db import models

# Create your models here.

class Technician(models.Model):
    name = models.CharField(max_length=300)
    employee_number = models.PositiveBigIntegerField()

class Appointment(models.Model):
    owner = models.CharField(max_length=200)
    vin = models.CharField(max_length=300)
    date_time = models.DateTimeField()
    technician = models.ManyToManyField("Technician", related_name="appointment", on_delete=models.PROTECT)
    reason = models.TextField()
