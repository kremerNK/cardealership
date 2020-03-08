from django.shortcuts import render, get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from .models import Vehicle

# Create your views here.


def home(request):
    randomVehicles = Vehicle.objects.all().order_by('?')[:5]
    print(randomVehicles)
    print('test')
    context = {'randomVehicles':randomVehicles}
    return render(request, 'home_page.html', context)

@csrf_exempt
def searchVehicle(request):
    makeList = [x for x in set(Vehicle.objects.values_list('make', flat=True)) if x != '']
    allVehicles = Vehicle.objects.all()
    if request.method == 'POST' and request.is_ajax():
        print('ajax hit')

    context = {'makeList':makeList, 'vehicle':allVehicles}

    test = Vehicle.objects.all()[1]
    for i in test._meta.get_fields():
        print(i)

    # print(getattr(vehicle, 'slug'))
    print(getattr(test, 'id')) 
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

