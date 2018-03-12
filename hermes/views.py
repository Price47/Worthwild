from django.shortcuts import render
import requests

from settings import GOOGLE_API_KEY, SITE_NAME
from helper import encode_string
from google_map_client import googleMapsClient as GoogleMaps

# Create your views here.
context = {'site_name':SITE_NAME}

def home(request):
    # Geocoding an address
    G = GoogleMaps('New York, NY')
    location_geometry = G.geocode()
    lat, long = location_geometry
    map_url = 'https://maps.googleapis.com/maps/api/js?key={}&&libraries=places&callback=initMap'.format(GOOGLE_API_KEY)
    return render(request, 'hermes/home.html', context={'google_map_url': map_url,
                                                        'site_name': SITE_NAME})

def about(request):

    return render(request, 'hermes/about.html')

def privacy(request):

    return render(request, 'hermes/privacy.html', context=context)

def contact(request):

    return render(request, 'hermes/contact.html')

def menu(request):
    return render(request, 'hermes/menu.html')