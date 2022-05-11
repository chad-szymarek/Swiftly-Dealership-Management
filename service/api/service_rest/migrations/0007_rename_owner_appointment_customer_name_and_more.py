# Generated by Django 4.0.3 on 2022-05-10 00:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0006_alter_appointment_technician'),
    ]

    operations = [
        migrations.RenameField(
            model_name='appointment',
            old_name='customer_name',
            new_name='customer_name',
        ),
        migrations.RemoveField(
            model_name='appointment',
            name='date_time',
        ),
        migrations.AddField(
            model_name='appointment',
            name='date',
            field=models.DateField(null=True),
        ),
        migrations.AddField(
            model_name='appointment',
            name='time',
            field=models.TimeField(null=True),
        ),
    ]