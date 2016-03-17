from django.contrib import admin
from .models import Category
from photologue.admin import Gallery


class CategoryAdmin(admin.ModelAdmin):
    inlines = []

admin.site.register(Category, CategoryAdmin)
admin.site.unregister(Gallery)
