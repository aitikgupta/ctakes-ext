from django.contrib import admin
from django.urls import path, re_path
from django.views.generic import TemplateView
from entrec import views

urlpatterns = [
    re_path(r'api/texts', views.text_list),
]