from django.db import models

class VehicleModelVO(models.Model):
    name = models.CharField(max_length=100)
    import_href = models.CharField(max_length=200, unique=True)
 
    def __str__(self):
        return self.name 


class Salesperson(models.Model):
    name = models.CharField(max_length=200)
    employee_number = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return f'employee: {self.name}'

class Customer(models.Model):
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=300)
    phone_number = models.CharField(max_length=20)

    def __str__(self):
        return self.name


class Sale(models.Model):               
    sales_person = models.ForeignKey(
        Salesperson,
        related_name="salesperson",
        on_delete=models.CASCADE,
    )

    automobile = models.ForeignKey(
        VehicleModelVO,
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