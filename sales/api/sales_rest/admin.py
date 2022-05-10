from django.contrib import admin

from .models import Salesperson, Sale, Customer

@admin.register(Salesperson)
class ShoeAdmin(admin.ModelAdmin):
    pass


@admin.register(Sale)
class ShoeAdmin(admin.ModelAdmin):
    pass

@admin.register(Customer)
class ShoeAdmin(admin.ModelAdmin):
    pass


