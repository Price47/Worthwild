from django.shortcuts import render
from django.http import JsonResponse
import json

from settings import GOOGLE_API_KEY, SITE_NAME
from helper import encode_string
from google_map_client import googleMapsClient as GoogleMaps

def get_locations(request):
    print(request)
    data = [
            {'lat':40.7128, 'lng': -72.0060},
            {'lat':41.7128, 'lng': -73.0060},
            {'lat':41.28, 'lng': -73.1260},
            {'lat':43.7128, 'lng': -72.0060},
            {'lat':41.7128, 'lng': -73.0060},
            {'lat':41.28, 'lng': -73.1260},
            {'lat':42.7128, 'lng': -72.0060},
            {'lat':43.7128, 'lng': -73.0060},
            {'lat':40.28, 'lng': -73.1260},
            {'lat':41.7128, 'lng': -72.0060},
            {'lat':42.7128, 'lng': -73.0060},
            {'lat':41.7, 'lng': -73.1260}
        ]

    return JsonResponse(json.dumps(data), safe=False)