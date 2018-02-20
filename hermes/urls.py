from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.menu, name='index'),
    url(r'^map/(?P<location>\w+)/', views.home, name='map'),
    url(r'^about', views.about, name='about'),
    url(r'^privacy', views.privacy, name='privacy'),
    url(r'^contact', views.contact, name='contact'),
    url(r'menu', views.menu, name='menu'),
]