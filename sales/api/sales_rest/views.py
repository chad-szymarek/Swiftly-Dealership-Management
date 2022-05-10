from site import venv
from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from common.json import ModelEncoder
from .models import AutomobileVO, Customer, Salesperson, VehicleVO, Sale

class VehicleVO(ModelEncoder):    
    model = VehicleVO
    properties = ['name']

class AutomobileVO(ModelEncoder):
    model = AutomobileVO
    properties = ['vin']
        
    encoders = {
        "vehicle": VehicleVO(),
    }

class SalesListEncoder(ModelEncoder):
    model = Sale
    properties = [
        'name',
        'address',
        'phone_number',
        'id',
    ]

    def get_extra_data(self, o):
        return {"VehicleModel": o.vehiclemodel.name}

class SalesDetailEncoder(ModelEncoder):
    model = Customer
    properties = [
        'sales_person',
        'sale_price',
        'customer',
        'automobile',
    ]        
    encoders = {
        "vehicle": AutomobileVO(),
    }

class SalesPersonListEnconder(ModelEncoder):
    model = Salesperson
    properties = [
        'name',
        'employee_number',
    ]

class CustomerListEnconder(ModelEncoder):
    model = Customer
    properties = [
        'name',
        'address',
        'phone_number',
        'id',
    ]

    


@require_http_methods(["GET", "POST"])
def list_salesperson(request):    
    if request.method == "GET":
        salesperson = Salesperson.objects.all()
        return JsonResponse(
            {"Salesperson": salesperson},
            encoder=SalesPersonListEnconder,
        )
    else:
        content = json.loads(request.body)
        try:
            salesperson = Salesperson.objects.create(**content)
            return JsonResponse(
                salesperson,
                encoder=SalesPersonListEnconder,
                safe=False
            )
        except:
            return JsonResponse(
                {"message": "Use another employee number."}
            )


@require_http_methods(["GET", "POST"])
def list_customer(request):    
    if request.method == "GET":
        customer = Customer.objects.all()
        return JsonResponse(
            {"customer": customer},
            encoder=CustomerListEnconder,
        )
    else:
        content = json.loads(request.body)
        try:
            customer = Customer.objects.create(**content)
            return JsonResponse(
                Customer,
                encoder=CustomerListEnconder,
                safe=False
            )
        except:
            return JsonResponse(
                {"message": "Use another customer."}
            )




@require_http_methods(["GET", "POST"])
def list_sales(request, automobile_vo_id=None):    
    if request.method == "GET":
        if automobile_vo_id is not None:
            sales = Sale.objects.filter(vehicle=automobile_vo_id)
        else:
            sales = Sale.objects.all()
        return JsonResponse(
            {"sales": sales},
            encoder=SalesListEncoder,
        )
    else:
        content = json.loads(request.body)                       

        sales = Sale.objects.create(**content)
        return JsonResponse(
            sales,
            encoder=SalesDetailEncoder,
            safe=False,
        )


@require_http_methods(["DELETE", "GET", "PUT"])
def show_sale(request, pk):
    if request.method == "GET":
        try:        
            sales = sale.objects.get(id=pk)
            return JsonResponse(
                sales,
                encoder=SalesDetailEncoder,
                safe=False,
            )
        except sale.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid sale"},
                status=400,
            )
    elif request.method == "DELETE":
        count, _ = sale.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})
    else:
        content = json.loads(request.body)
        Sale.objects.filter(id=pk).update(**content)
        sale = Sale.objects.get(id=pk)
        return JsonResponse(
            sale,
            encoder=SalesDetailEncoder,
            safe=False,
        )
