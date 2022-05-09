from django.db import models

# Create your models here.

class Technician(models.Model):
    name = models.CharField(max_length=300)
    employee_number = models.PositiveBigIntegerField()

    def __str__(self):
        return self.name

class Appointment(models.Model):
    owner = models.CharField(max_length=200)
    vin = models.CharField(max_length=300)
    date_time = models.DateTimeField()
    technician = models.ForeignKey("Technician", related_name="appointment", on_delete=models.PROTECT)
    reason = models.TextField()

    def __str__(self):
        return self.owner

class AutomobileVO(models.Model):
    vin = models.CharField(max_length=300)
