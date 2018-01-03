from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.home, name='index'),
    url(r'^home', views.home_map, name='map'),
    url(r'^about', views.about, name='about'),
    url(r'^privacy', views.privacy, name='privacy'),
    url(r'^contact', views.contact, name='contact'),
    url(r'menu', views.menu, name='menu'),
]