from django.conf.urls import url, include

from hermes import views
from hermes import api

api = [
    url(r'locations', api.get_locations)
]

urlpatterns = [
    url(r'^$', views.menu, name='index'),
    url(r'^map', views.home, name='map'),
    url(r'^about', views.about, name='about'),
    url(r'^privacy', views.privacy, name='privacy'),
    url(r'^contact', views.contact, name='contact'),
    url(r'menu', views.menu, name='menu'),
    url(r'api', include(api)),
]