from django.db import models
from django.utils.encoding import python_2_unicode_compatible
from photologue.models import Photo

class Category(models.Model):
    name = models.CharField(max_length=200)
    photos = models.ManyToManyField(Photo)
    @python_2_unicode_compatible
    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "categories"
