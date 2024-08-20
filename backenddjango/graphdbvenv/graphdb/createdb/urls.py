from django.urls import path
from . import views

urlpatterns = [
    path('createdb/', views.createdb, name='createdb'),
]