from django.db import models
from django.db.models.deletion import PROTECT

from .custom_models import CustomDateTimeField


class User(models.Model):
    name = models.CharField("Name", max_length=150)
    age = models.SmallIntegerField()
    created_at = CustomDateTimeField("Created date", auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    group = models.ForeignKey('Group', on_delete=PROTECT, null=True, blank=True)
    
    def __str__(self) -> str:
        return f'{self.name} {self.age}'
    

class Group(models.Model):
    title = models.CharField(max_length=150, unique=True)
    description = models.TextField(null=True, blank=True)
    
    def __str__(self) -> str:
        return self.title
