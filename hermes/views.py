from django.shortcuts import render
import requests

from settings import GOOGLE_API_KEY

# Create your views here.
def home(request):

    return render(request, 'hermes/home_map.html', context={'api_key':GOOGLE_API_KEY})

def home_map(request):

    return render(request, 'hermes/home_map.html')