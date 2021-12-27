from rest_framework import serializers
from .models import Group, User

class UserSerializer(serializers.ModelSerializer):
    group = serializers.StringRelatedField()
    class Meta:
        model = User 
        fields = ('pk', 'name', 'age', 'created_at', 'updated_at', 'group')
        
        

class GroupSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Group
        fields = ('pk', 'title', 'description')