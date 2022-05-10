from django.shortcuts import render
from django.http import JsonResponse
import json
from django.views.decorators.http import require_http_methods

from .models import Technician, Appointment
from common.json import ModelEncoder

# Create your views here.

class TechnicianListEncoder(ModelEncoder):
    model = Technician
    properties = ["name", "employee_number"]

class TechnicianDetailEncoder(ModelEncoder):
    model = Technician
    properties = ["name", "employee_number"]

class AppointmentListEncoder(ModelEncoder):
    model = Appointment
    properties = ["owner", "vin"]

class AppointmentDetailEncoder(ModelEncoder):
    model = Appointment
    properties = ["owner", "vin", "technician", "reason"]
    encoders = {
        "technician": TechnicianListEncoder
    }

@require_http_methods(["GET", "POST"])
def api_list_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()

        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianListEncoder
        )
    else:
        content = json.loads(request.body)
        technician = Technician.objects.create(**content)
        return JsonResponse(
            technician,
            encoder=TechnicianListEncoder,
            safe=False,
        )

@require_http_methods(["DELETE", "GET", "PUT"])
def api_detail_technician(request, pk):
    if request.method == "GET":
        try:
            technician = Technician.objects.get(id=pk)
            print(technician)
            return JsonResponse(
                technician,
                encoder=TechnicianDetailEncoder,
                safe=False
            )
        except Technician.DoesNotExist:
            return JsonResponse({"message": "Does not exist."})


def api_list_appointments(request):
    if request.method == "GET":
        appointments = Appointment.objects.all()

        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentListEncoder
        )
    else:
        content = json.loads(request.body)
        appointment = Appointment.objects.create(**content)
        return JsonResponse(
            appointment,
            encoder=AppointmentDetailEncoder,
            safe=False
        )
