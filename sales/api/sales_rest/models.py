from django.db import models

class VehicleVO(models.Model):
    name = models.CharField(max_length=100)

class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    import_href = models.CharField(max_length=300, unique=True)   

    def __str__(self):
        return self.vin 


class Salesperson(models.Model):
    name = models.CharField(max_length=200)
    employee_number = models.PositiveSmallIntegerField(unique=True)

 
class Customer(models.Model):
    name = models.CharField(max_length=150)
    address = models.CharField(max_length=300)
    phone_number = models.CharField(max_length=20)
    salesperson = models.ForeignKey(
        Salesperson,
        related_name="salesperson",
        on_delete=models.PROTECT,
    )

    def __str__(self):
        return self.name


class Sale(models.Model):               
    sales_person = models.ForeignKey(
        Salesperson,
        related_name="sales_person",
        on_delete=models.PROTECT,
    )

    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="automobile",
        on_delete=models.PROTECT,
    )

    customer = models.ForeignKey(
        Customer,
        related_name="customer",
        on_delete=models.PROTECT,
    )
    
    sale_price = models.IntegerField()

    def __str__(self):
        return f'{self.sales_person}, {self.automobile}'