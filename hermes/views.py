from django.shortcuts import render
import requests

from settings import GOOGLE_API_KEY, SITE_NAME

# Create your views here.
context = {'site_name':SITE_NAME}

def home(request):

    return render(request, 'hermes/menu.html', context={'api_key':GOOGLE_API_KEY,
                                                            'site_name': SITE_NAME})

def home_map(request):

    return render(request, 'hermes/home_map.html')

def about(request):

    return render(request, 'hermes/about.html')

def privacy(request):

    return render(request, 'hermes/privacy.html', context=context)

def contact(request):

    return render(request, 'hermes/contact.html')

def menu(request):
    return render(request, 'hermes/menu.html')