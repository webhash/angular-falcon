import requests

resp = requests.post('http://localhost:8000', json={'input':'data'})

print(resp)