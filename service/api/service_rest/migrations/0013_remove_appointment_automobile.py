# Generated by Django 4.0.3 on 2022-05-10 20:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0012_remove_appointment_sold_vin_appointment_automobile'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='appointment',
            name='automobile',
        ),
    ]
