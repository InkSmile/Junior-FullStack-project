from django.urls import path
from .views import UserView, GroupView
from rest_framework.routers import DefaultRouter

app_name = 'resp_api'

router = DefaultRouter()
router.register('users', UserView, basename='user')
router.register('groups', GroupView, basename='group')

urlpatterns = router.urls
