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

class AppointmentListEncoder(ModelEncoder):
    model = Appointment
    properties = ["customer_name", "vin"]

class AppointmentDetailEncoder(ModelEncoder):
    model = Appointment
    properties = ["customer_name", "vin", "technician", "reason"]
    encoders = {
        "technician": TechnicianListEncoder()
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
        print(content)
        return JsonResponse(
            technician,
            encoder=TechnicianListEncoder,
            safe=False,
        )

def api_list_appointments(request):
    if request.method == "GET":
        appointments = Appointment.objects.all()

        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentListEncoder
        )
    else:
        content = json.loads(request.body)

        technician = Technician.objects.get(id=content["technician"])
        content["technician"] = technician
        appointment = Appointment.objects.create(**content)

        return JsonResponse(
            appointment,
            encoder=AppointmentDetailEncoder,
            safe=False
        )
