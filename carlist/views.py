from django.shortcuts import render, get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponseRedirect
from django.core.paginator import Paginator
from django.core import mail
from django.core.mail import send_mail
from django.contrib import messages
from django.urls import reverse
from django.core.validators import validate_email

from .models import Vehicle
from .forms import ContactForm, FormWithCaptcha


import json
import smtplib
import urllib
import re
from collections import Counter
 
def home(request):

    def round_down(num, divisor):
        return str(num - (num%divisor))
    randomVehicles = Vehicle.objects.all().order_by('?')[:5] 
    allVehicles = Vehicle.objects.all()

    makeOptions = [x for x in set(Vehicle.objects.values_list('carType', flat=True)) if x != '']
    
    makeList = sorted([x for x in Vehicle.objects.values_list('make', flat=True) if x != ''])
    modelList = sorted([x for x in Vehicle.objects.values_list('model', flat=True) if x != ''])
    bodyList = sorted([x for x in Vehicle.objects.values_list('carType', flat=True) if x != ''])
    priceList = sorted([round_down(int(''.join(re.findall('\d', x))), 5000) for x in Vehicle.objects.values_list('price', flat=True) if x != ''])
    priceListdel = sorted([''.join(re.findall('\d', x)) for x in Vehicle.objects.values_list('price', flat=True) if x != ''])

    makeCounter = dict(Counter(makeList))
    modelCounter = dict(Counter(modelList))
    bodyCounter = dict(Counter(bodyList))

    priceDict = {5000:0, 10000:0, 20000:0, 30000:0, 40000:0}

  
    
   
    priceOfOptionsTag = []
    countOfOptionsTag = []
    valueOfOptionsTag = []

    for key, value in priceDict.items():
        for i in priceList:
            if int(i) < key:
                priceDict[key] += 1
    
    # print(priceList)
    # print(priceDict[5000])
    print(priceDict)
    for key, value in priceDict.items():
        priceOfOptionsTag.append(f"{key:,}")
        valueOfOptionsTag.append(str(key))
        countOfOptionsTag.append(value)
    
    print(countOfOptionsTag)
    print(valueOfOptionsTag)
    print(priceOfOptionsTag)
    testlist = [['1','2','3','4'], ['1','2','3','4'], ['1','2','3','4']]

    testing1 = ['1','2','3','4']
    testing2 = ['4','3','2','1']
    testing3 = ['4','3','2','1']
    zipped = list(zip(valueOfOptionsTag, zip(priceOfOptionsTag, countOfOptionsTag)))
    print(zipped)
    # zipped = zip(valueOfOptionsTag, priceOfOptionsTag, countOfOptionsTag)
    # print(zipped)
    # priceCounter = {str(key):str(value) for key,value in priceDict.items()}
    #pricecounter requires price, count, and value


    context = {'testlist':testlist, 'zipped':zipped, 'totalVehicles':str(len(allVehicles)), 
    'makeCounter':makeCounter, 'modelCounter':modelCounter, 'bodyCounter':bodyCounter, 
    'randomVehicles':randomVehicles, 'vehicles':allVehicles, 'makeOptions':makeOptions}
    return render(request, 'home_page.html', context)
 

def searchVehicle(request):

    def round_down(num, divisor):
        return str(num - (num%divisor))

    makeList = sorted([x for x in Vehicle.objects.values_list('make', flat=True) if x != ''])
    allVehicles = Vehicle.objects.all()
    bodyList = sorted([x for x in Vehicle.objects.values_list('carType', flat=True) if x != ''])
    modelList = sorted([x for x in Vehicle.objects.values_list('model', flat=True) if x != ''])
    yearList = sorted([x for x in Vehicle.objects.values_list('year', flat=True) if x != ''])
    fuelList = sorted([round_down(int(x),10) for x in Vehicle.objects.values_list('mpg', flat=True) if x != ''])

    print(fuelList)
    fuelDict = {0:0, 10:0, 20:0, 30:0, 40:0, 50:0}
    for key, value in fuelDict.items():
        for i in fuelList:
            if int(i) >= key:
                fuelDict[key] += 1


    makeCounter = dict(Counter(makeList))
    bodyCounter = dict(Counter(bodyList))
    modelCounter = dict(Counter(modelList))
    yearCounter = dict(Counter(yearList))
    fuelCounter = {str(key):str(value) for key,value in fuelDict.items()}
    print(fuelCounter)

 

    if request.method=="POST" or request.method=="GET" and request.is_ajax():
        allVehicles = Vehicle.objects.all()
        context = {'vehicles':allVehicles[0]}      
        return render(request, 'searchvehicles.html', context)

    context = {'fuelCounter':fuelCounter, 'yearCounter':yearCounter, 'bodyCounter':bodyCounter, 'makeCounter':makeCounter, 
    'modelCounter':modelCounter, 'makeList':makeList, 'vehicle':allVehicles, 'bodyList':bodyList, 
    'modelList':modelList, 'yearList':yearList}
    return render(request, 'searchvehicles.html', context)

def vehiclePage(request, slug, pk):
    obj = get_object_or_404(Vehicle, pk=int(pk), slug=str(slug))
    vehicle = Vehicle.objects.all()[2]
    form = ContactForm() 
    captcha = FormWithCaptcha() 
    context = {'vehicle': obj, 'form': form, 'captcha':captcha}
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
            try:
                validate_email(form.cleaned_data['email'])
            except:
                messages.error(request, 'Invalid email')    
                return render(request, 'vehicle_page.html', {'vehicle': obj, 'form': form, 'captcha':captcha})
            checkphone = re.search('\d\d\d\W\d\d\d\W\d\d\d\d', form.cleaned_data['phone'])
            if checkphone == None:
                print('phone number invalid')
                messages.error(request, 'Invalid phone number')
                return render(request, 'vehicle_page.html', {'vehicle': obj, 'form': form, 'captcha':captcha})
            subject = 'New Inquiry' 
            sender = form.cleaned_data['email']
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
            send_mail(subject, message, sender, recipients, fail_silently = False)
            messages.success(request, 'Message successfully sent')
            server.quit()
            return HttpResponseRedirect(request.META.get('HTTP_REFERER'))
    return render(request, 'vehicle_page.html', context)

def hours(request):
    return render(request, 'dealership_hours.html')

def contact(request):
    # captcha = FormWithCaptcha()
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
            try:
                validate_email(form.cleaned_data['email'])
            except:
                messages.error(request, 'Invalid email')    
                return render(request, 'contact.html', {'form':form})
            checkphone = re.search('\d\d\d\W\d\d\d\W\d\d\d\d', form.cleaned_data['phone'])
            if checkphone == None:
                print('phone number invalid')
                messages.error(request, 'Invalid phone number')
                return render(request, 'contact.html', {'form':form})
            subject = 'New Inquiry' 
            sender = form.cleaned_data['email']
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
            send_mail(subject, message, sender, recipients, fail_silently = False)
            messages.success(request, 'Message successfully sent')
            server.quit()
        return HttpResponseRedirect(reverse('contact'))   
    form = ContactForm()   
    #add back in 'captcha':captcha to context
    return render(request, 'contact.html', {'form':form})

  