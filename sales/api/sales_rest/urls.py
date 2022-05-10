from django.urls import path
from .views import (
    list_sales,
    list_salesperson,
    list_customer,
    )

urlpatterns = [
    path("sales/", list_sales, name="list_sales"),    
    path("salespersons/", list_salesperson, name="list_salespersons"),
    path("customers/", list_customer, name="list_customer"),
    
]
