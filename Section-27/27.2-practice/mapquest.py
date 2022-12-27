import requests

key = 'fgNyumX45b2JqPGW0jXbwdZ0J8CX6UvI'

response = requests.get('http://www.mapquestapi.com/geocoding/v1/address', params={'key':key,
'location':'4078 Coal St, Glen Allen, Va'})

