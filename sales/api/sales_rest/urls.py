from django.urls import path
from .views import (
    list_sales,
    list_salesperson
    )

urlpatterns = [
    path("sales/", list_sales, name="list_sales"),    
    path("salespersons/", list_salesperson, name="list_salespersons"),
    
]
