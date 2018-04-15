import falcon
import json


class Success(object):
    def on_get(self, req, resp):
        """Handles GET requests"""
        resp.status = falcon.HTTP_200  # This is the default status
        resp.body = ('\nYes I Can Hear You !!! \nbut I only talk with POST\n\n')

    def on_post(self, req, resp):
        """Handles POST requests"""
        # Create a JSON representation of the resource

        # uncomment to check the types
        # print(req.method)
        # print(req.uri)
        # print(req.content_type)

        # we will recieve the data as json data 
        # the input value will be sent via "input" tag 
        # and we will respond back by appending 
        # output tag with translated value to the request json
        data = json.loads( req.bounded_stream.read().decode('utf-8'))
        
        res_dict = dict()
        res_value = "Send 'input' key or i will echo you" 
        
        if data and ('input' in data):
            #we only care about upto 20 char length
            req_value = data['input'][:20]
            res_value = "\"success['" + req_value + "']\""

        # we always add response
        res_dict['response'] = res_value


        # form the response and see off
        resp.status = falcon.HTTP_200
        resp.body = json.dumps(res_dict)

        

# falcon.API instances are callable WSGI apps
api = falcon.API()

# Resources are represented by long-lived class instances
success = Success()

# sucess will handle all requests to the '/' URL path
api.add_route('/', success)