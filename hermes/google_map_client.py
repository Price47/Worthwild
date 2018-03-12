from settings import GOOGLE_API_KEY
from helper import encode_string
import requests

class googleMapsClient():

    geocode_url = 'https://maps.googleapis.com/maps/api/geocode/json'

    def __init__(self, address):
        self.address = address

    def geocode(self):
        """
        Get google maps info from physical address
        :return: Geometry Object
        """
        geocode_url = '{}?address={}&key={}'.format(self.geocode_url, encode_string(self.address), GOOGLE_API_KEY)
        r = requests.get(geocode_url)
        results = r.json()['results'][0]
        location_geometry = results['geometry']['location']
        lat, long = location_geometry['lat'], location_geometry['lng']
        return lat, long



