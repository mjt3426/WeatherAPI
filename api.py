# Taking the input from the user and then using the Google Maps API to get the duration, geofence, and
# polyline of the trip.

import requests
import json
import os
from datetime import datetime
from dotenv import load_dotenv

load_dotenv("privateVariables.env")
apiKey = os.getenv('gmaps_apikey')

dest=input("Where to: ")
apiDest=(dest.replace(",","").replace(" ","+").replace(" St","Street").replace(" Dr","Drive").replace(".",""))
print(apiDest)

orig=input("Where from: ")
apiOrig=(orig.replace(",","").replace(" ","+").replace(" St","Street").replace(" Dr","Drive").replace(".",""))
print(apiOrig)

#url = "https://maps.googleapis.com/maps/api/directions/json?origin="+apiOrig+"&destination="+apiDest+"&avoid=tolls&key="+apiKey
url = "https://www.google.com/maps/embed/v1/directions?"+apiKey+"&origin="+apiOrig+"&destination"+apiDest+"&avoid=tolls"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(url)

full_Trip=response.json()

trip_Polyline=(full_Trip['routes'][0]['overview_polyline']['points'])
trip_Duration=(full_Trip['routes'][0]['legs'][0]['duration']['text'])
trip_Geofence=(full_Trip['routes'][0]['bounds'])

print(trip_Duration)
print(trip_Geofence)
print(trip_Polyline)

#?print(response.text)