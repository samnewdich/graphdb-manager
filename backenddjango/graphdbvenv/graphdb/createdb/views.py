from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods

@require_http_methods(['POST'])

def createdb(request):
    if request.method =='POST':
        repoUrl = request.POST.get['repoUrl']
        namespace = request.POST.get['namespace']
        username = request.POST.get['username']
        password = request.POST.get['password']

        #NOW PROCESS THE DATA
        BLAZEGraph_SETTINGS = {
            'repourl':{repoUrl},
            'namespace':{namespace},
            'username':{username},
            'password':{password},
        }
        # #After processing now return
        output = f"repo:{repoUrl}, namespace:{namespace}, username:{username}, password:{password}"
        return JsonResponse({'output': output})
    else:
        return JsonResponse({'output':'empty data'})
    

def create_person(request):
    pass
