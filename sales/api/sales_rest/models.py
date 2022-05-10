from django.db import models

class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    import_href = models.CharField(max_length=300, unique=True)

    def __str__(self):
        return self.vin 


class Salesperson(models.Model):
    name = models.CharField(max_length=200)
    employee_number = models.PositiveIntegerField(unique=True)

    def __str__(self):
        return self.name

 
class Customer(models.Model):
    name = models.CharField(max_length=150)
    address = models.CharField(max_length=300)
    phone_number = models.CharField(max_length=20, unique=True)
  

    def __str__(self):
        return self.name


class Sale(models.Model):               
    sales_person = models.ForeignKey(
        Salesperson,
        related_name="sale",
        on_delete=models.PROTECT,
    )

    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="sale",
        on_delete=models.PROTECT,
    )

    customer = models.ForeignKey(
        Customer,
        related_name="sale",
        on_delete=models.PROTECT,
    )
    
    sale_price = models.PositiveIntegerField()

    def __str__(self):
        return f'{self.sales_person}, {self.automobile}'