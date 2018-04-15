import falcon
import json

# python rest api hosting information
ip_add= 'localhost'
port= 9999

class Redirecter(object):

    def process_request(self, req, resp):
        raise falcon.exception.HTTPSeeOther('http://'+ip_add+"/")


class Success(object):

    def generic_error_handler(func):
        def wrapper(*args):
            try:
                func(*args)
            except Exception as e:
                resp.status = falcon.HTTP_500
                resp.body = json.dumps({'status': 0, 'message': 'Server is on a Coffee Break!'})
        return wrapper

    @generic_error_handler
    def on_get(self, req, resp):
        """Handles GET requests"""
        resp.status = falcon.HTTP_200  # This is the default status
        resp.body = ('\nYes I Can Hear You !!! \nbut I only talk with POST\n\n')

    @generic_error_handler
    def on_post(self, req, resp):
        """Handles POST requests"""
        # print(req.method, req.uri, req.content_type)
        # Create a JSON representation of the resource
        # we will recieve the data as json data 
        # the input value will be sent via "input" tag 
        data = json.loads( req.bounded_stream.read().decode('utf-8'))
        
        res_dict = dict()
        res_value = "Send 'input' key or i will echo you" 
        
        if data and ('input' in data):
            # we only care about upto 20 char length
            req_value = data['input'][:20]
            res_value = "\"success['" + req_value + "']\""

        # we always add response
        res_dict['response'] = res_value


        # form the response and see off
        resp.status = falcon.HTTP_200
        resp.body = json.dumps(res_dict)

        
# call falcon.API instances 
api = falcon.API()

# create success
success = Success()

# success will handle all requests to the '/' URL path
# we should add it to specific path for prod
api.add_route('/', success)


if __name__ == "__main__":
    from wsgiref import simple_server
    httpd = simple_server.make_server(ip_add, port, api)
    httpd.serve_forever()