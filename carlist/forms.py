from django import forms
from django.db import models
from captcha.fields import ReCaptchaField

class ContactForm(forms.Form):
    class contactType(models.TextChoices):
        ##may need to alter these fields back to suv = '3', 'SUV'. 
        sedan = 'Sedan'
        truck = 'Truck'
        suv = 'SUV'
        van = 'Van'
    
    contactOptions = (
        ('phone', 'Phone'), 
        ('email', 'Email'),) 
 
    nameFirst = forms.CharField(label='First Name', max_length = 100) #add max lengths to form itself
    nameLast = forms.CharField(label='Last Name', max_length = 100)
    email = forms.CharField(label='Email', max_length = 100)
    phone = forms.CharField(label='Phone', max_length = 20)
    contactBy = forms.ChoiceField(label='Contact By', choices=contactOptions)
    message = forms.CharField(max_length=4000, widget=forms.Textarea(attrs={'placeholder': 
    'Enter your message here and click submit below. Please verify that your contact \
information is accurate to ensure a response. Fields marked with * are required.', 
    })) 
 
 

class FormWithCaptcha(forms.Form):
    captcha = ReCaptchaField()


    ##remember, theme can be changed. see github


#  captcha = ReCaptchaField(
#      public_key = '6Lehy-MUAAAAAAE5cMzCz8btbiqfrRHnf_ovTSrb',
#      private_keys= '6Lehy-MUAAAAAG_NmXp_E-3esjbasnp3Tq2eU0Bn',
#  )