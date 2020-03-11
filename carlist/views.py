from django.shortcuts import render, get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from .models import Vehicle
from django.core.paginator import Paginator



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
    paginator = Paginator(allVehicles, 5)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)


    context = {'makeList':makeList, 'vehicle':allVehicles, 'page_obj': page_obj}
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

