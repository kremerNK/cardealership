from django.shortcuts import render, get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponseRedirect
from django.core.paginator import Paginator
from django.core import mail
from django.core.mail import send_mail
from django.contrib import messages

from .models import Vehicle
from .forms import ContactForm, FormWithCaptcha

import json
import smtplib
import urllib




# Create your views here.

 
def home(request):
    randomVehicles = Vehicle.objects.all().order_by('?')[:5] 
    allVehicles = Vehicle.objects.all()
    makeOptions = [x for x in set(Vehicle.objects.values_list('carType', flat=True)) if x != '']
    print(makeOptions)

    context = {'randomVehicles':randomVehicles, 'vehicles':allVehicles, 'makeOptions':makeOptions}
    return render(request, 'home_page.html', context)

# @csrf_exempt
def searchVehicle(request):

    makeList = [x for x in set(Vehicle.objects.values_list('make', flat=True)) if x != '']
    allVehicles = Vehicle.objects.all()
    makeOptions = [x for x in set(Vehicle.objects.values_list('carType', flat=True)) if x != '']
    modelList = [x for x in set(Vehicle.objects.values_list('model', flat=True)) if x != '']
    
  
     
    
    if request.method=="POST" or request.method=="GET" and request.is_ajax():
        print('ajax') 
        print(json.loads(request.body))
        allVehicles = Vehicle.objects.all()
        context = {'vehicles':allVehicles[0]}

      
        return render(request, 'searchvehicles.html', context)

    
    context = {'makeList':makeList, 'vehicle':allVehicles, 'makeOptions':makeOptions, 'modelList':modelList}
    
    
 
    return render(request, 'searchvehicles.html', context)

def vehiclePage(request, slug, pk):
    obj = get_object_or_404(Vehicle, pk=int(pk), slug=str(slug))
    # obj = get_object_or_404(Vehicle, pk=int(pk))
    vehicle = Vehicle.objects.all()[2]
    
    form = ContactForm() 
    captcha = FormWithCaptcha()
    
    context = {'vehicle': obj, 'form': form, 'captcha':captcha}
    return render(request, 'vehicle_page.html', context)

def hours(request):
 
    return render(request, 'dealership_hours.html')

def contactSubmit(request):
    print('test')
    username = 'glycine775@gmail.com'
    password = 'knsjvowvflaoskoj'
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.ehlo()
    server.starttls()
    server.ehlo()
    server.login(username, password)


    if request.method == 'POST': 
        form = ContactForm(request.POST)
        if form.is_valid():
            ###captcha###
            recaptcha_response = request.POST.get('g-recaptcha-response')
            url = 'https://www.google.com/recaptcha/api/siteverify'
            values = {
                'secret': '6Lehy-MUAAAAAG_NmXp_E-3esjbasnp3Tq2eU0Bn',
                'response': recaptcha_response
            }
            data = urllib.parse.urlencode(values).encode()
            req =  urllib.request.Request(url, data=data)
            response = urllib.request.urlopen(req)
            result = json.loads(response.read().decode())
            ''' End reCAPTCHA validation '''

            if result['success']:
                print('success')
                messages.success(request, 'Your message was successfully sent!')
            else:
                messages.error(request, 'Invalid reCAPTCHA. Please try again.')


            ##need to add alert on successful submission
            subject = 'New Inquiry' 
            
            message = form.cleaned_data['message']
            sender = form.cleaned_data['email']
       
            recipients = ['glycine775@gmail.com']
    
            send_mail(subject, message, sender, recipients, fail_silently = False)

            subject = 'We received your inquiry'
            message = 'We will reply as soon as we can'
       
            recipients = [sender]

            sender = 'glycine775@gmail.com'
            print(recipients)
            send_mail(subject, message, sender, recipients, fail_silently = False)
            print('everything sent')
            server.quit()
            return HttpResponseRedirect(request.META.get('HTTP_REFERER'))
  
    form = ContactForm()
    
    # server.quit()
    return HttpResponseRedirect('contact')

def contact(request):
    captcha = FormWithCaptcha()
    form = ContactForm()

    # context = {'form':form}        
    return render(request, 'contact.html', {'form':form, 'captcha':captcha})

  