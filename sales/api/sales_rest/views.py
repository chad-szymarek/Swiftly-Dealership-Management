from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from common.json import ModelEncoder
from .models import VehicleModelVO, Sale, Customer

class VehicleModelVOEncoder(ModelEncoder):
    model = VehicleModelVO
    properties = ['name', 'import_href']

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
    def get_extra_data(self, o):
        return {"VehicleModel": o.sale.automobile.model}






@require_http_methods(["GET", "POST"])
def list_sales(request, vehiclemodel_vo_id=None):    
    if request.method == "GET":
        if vehiclemodel_vo_id is not None:
            sales = Sale.objects.filter(vehicle=vehiclemodel_vo_id)
        else:
            sales = Sale.objects.all()
        return JsonResponse(
            {"sales": sales},
            encoder=SalesListEncoder,
        )
    else:
        content = json.loads(request.body)
       
        try:
            vehicle_href = content["vhicle"]
            vehicle = VehicleModelVO.objects.get(vehicle_number=vehicle_href)
            content["vehicle"] = vehicle
        except VehicleModelVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid Vehicle id"},
                status=400,
            )

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
