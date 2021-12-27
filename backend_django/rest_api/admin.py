from django.contrib import admin
from .models import User, Group

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'age', 'created_at', 'updated_at', 'group')
    list_filter = ('name', 'created_at')
    search_fields = ('name', 'group', 'age')

    
@admin.register(Group)    
class GroupAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'description')
    list_filter = ('title',)
    search_fields = ('title',)
    