from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from .models import Vehicle

# Create your views here.


def home(request):
    return render(request, 'home_page.html')

@csrf_exempt
def searchVehicle(request):
    makeList = [x for x in set(Vehicle.objects.values_list('make', flat=True)) if x != '']
    allVehicles = Vehicle.objects.all()
    if request.method == 'POST' and request.is_ajax():
        print('ajax hit')

    context = {'makeList':makeList, 'vehicle':allVehicles}
    return render(request, 'searchvehicles.html', context)

def hours(request):
    return render(request, 'dealership_hours.html')

def contact(request):
    return render(request, 'contact.html')

def basetest(request):
    return render(request, 'basetest.html')