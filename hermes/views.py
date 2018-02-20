from django.shortcuts import render
import requests
import googlemaps

from settings import GOOGLE_API_KEY, SITE_NAME

# Create your views here.
context = {'site_name':SITE_NAME}

def home(request, location):
    gmaps = googlemaps.Client(key=GOOGLE_API_KEY)

    # Geocoding an address
    geocode_result = gmaps.geocode('1600 Amphitheatre Parkway, Mountain View, CA')
    url = 'https://maps.googleapis.com/maps/api/geocode/json?address={}&key={}'.format(location, GOOGLE_API_KEY)
    r = requests.get(url)
    results = r.json()['results'][0]
    location_geometry = (results['geometry']['location'])
    lat, long =location_geometry['lat'], location_geometry['lng']
    map_url = 'https://maps.googleapis.com/maps/api/js?key={}&callback=initMap'.format(GOOGLE_API_KEY)
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