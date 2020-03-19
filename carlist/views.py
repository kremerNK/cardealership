from django.shortcuts import render, get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from .models import Vehicle
from django.core.paginator import Paginator

import json

# Create your views here.

 
def home(request):
    randomVehicles = Vehicle.objects.all().order_by('?')[:5] 
    allVehicles = Vehicle.objects.all()
    makeOptions = [x for x in set(Vehicle.objects.values_list('carType', flat=True)) if x != '']
    print(makeOptions)

    context = {'randomVehicles':randomVehicles, 'vehicles':allVehicles, 'makeOptions':makeOptions}
    return render(request, 'home_page.html', context)

@csrf_exempt
def searchVehicle(request):
    makeList = [x for x in set(Vehicle.objects.values_list('make', flat=True)) if x != '']
    allVehicles = Vehicle.objects.all()
    makeOptions = [x for x in set(Vehicle.objects.values_list('carType', flat=True)) if x != '']
    modelList = [x for x in set(Vehicle.objects.values_list('model', flat=True)) if x != '']
    print(makeOptions)
    print(allVehicles)
    # paginator = Paginator(allVehicles, 4)
    # page_number = request.GET.get('page', )
    # page_obj = paginator.get_page(page_number) 

    
    testvar1 = 1
    if request.method=="POST" or request.method=="GET" and request.is_ajax():
        print('ajax') 
        print(json.loads(request.body))
        allVehicles = Vehicle.objects.all()
        context = {'vehicles':allVehicles[0]}

        testvar1 += 1
        return render(request, 'searchvehicles.html', context)

    print(testvar1)
    context = {'makeList':makeList, 'vehicle':allVehicles, 'makeOptions':makeOptions, 'modelList':modelList}
    # can readd 'page_obj': page_obj, incase JS pagination doesn't work
    return render(request, 'searchvehicles.html', context)

def vehiclePage(request, slug, pk):
    obj = get_object_or_404(Vehicle, pk=int(pk), slug=str(slug))
    # obj = get_object_or_404(Vehicle, pk=int(pk))
    vehicle = Vehicle.objects.all()[2]
    

    context = {'vehicle': obj}
    return render(request, 'vehicle_page.html', context)

def hours(request):
    return render(request, 'dealership_hours.html')

def contact(request):
    return render(request, 'contact.html')

