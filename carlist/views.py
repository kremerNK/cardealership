from django.shortcuts import render, get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponseRedirect
from django.core.paginator import Paginator
from django.core import mail
from django.core.mail import send_mail
from django.contrib import messages
from django.urls import reverse

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

    if request.method == 'POST':
        username = 'glycine775@gmail.com'
        password = 'knsjvowvflaoskoj'
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.ehlo()
        server.starttls()
        server.ehlo()
        server.login(username, password)
        form = ContactForm(request.POST) 
        if form.is_valid(): 
            messages.success(request, 'Message successfully sent')
            subject = 'New Inquiry' 
            sender = 'nickstrauss@yahoo.com'
            nameFirst = form.cleaned_data['nameFirst']
            nameLast = form.cleaned_data['nameLast']
            contactBy = form.cleaned_data['contactBy']
            
            if contactBy == 'phone':
                contact = form.cleaned_data['phone']
            elif contactBy == 'email':
                contact = form.cleaned_data['email']
            message = f"You have received a new message from {nameFirst} {nameLast}. \
                \n\n {form.cleaned_data['message']}\
                \n\n Phone: {form.cleaned_data['phone']}\
                \n Email: {form.cleaned_data['email']}\
                \n\n{nameFirst} {nameLast} has asked to be contacted by {contactBy}."
            
        
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
    
    
    context = {'vehicle': obj, 'form': form, 'captcha':captcha}
    return render(request, 'vehicle_page.html', context)

def hours(request):
 
    return render(request, 'dealership_hours.html')

def contact(request):
    captcha = FormWithCaptcha()
    form = ContactForm()
    if request.method == 'POST':
        username = 'glycine775@gmail.com'
        password = 'knsjvowvflaoskoj'
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.ehlo()
        server.starttls()
        server.ehlo()
        server.login(username, password)
        form = ContactForm(request.POST) 
        if form.is_valid(): 
            messages.success(request, 'Message successfully sent')
            subject = 'New Inquiry' 
            sender = 'nickstrauss@yahoo.com'
            nameFirst = form.cleaned_data['nameFirst']
            nameLast = form.cleaned_data['nameLast']
            contactBy = form.cleaned_data['contactBy']
            
            if contactBy == 'phone':
                contact = form.cleaned_data['phone']
            elif contactBy == 'email':
                contact = form.cleaned_data['email']
            message = f"You have received a new message from {nameFirst} {nameLast}. \
                \n\n {form.cleaned_data['message']}\
                \n\n Phone: {form.cleaned_data['phone']}\
                \n Email: {form.cleaned_data['email']}\
                \n\n{nameFirst} {nameLast} has asked to be contacted by {contactBy}."
            
       
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
   
            return HttpResponseRedirect(reverse('contact'))

    # context = {'form':form}        
    return render(request, 'contact.html', {'form':form, 'captcha':captcha})

  