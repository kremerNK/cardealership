from django import forms
from django.db import models
from captcha.fields import ReCaptchaField
from django.core.validators import validate_email
from django.core.validators import EmailValidator

class ContactForm(forms.Form):
    class Meta:
     
        fields = ['email', 'phone']
        error_messages = {
            'email': 'testing errors',
        }
 
     
    contactOptions = (
        ('email', 'Email'), 
        ('phone', 'Phone'),)  
    
    def email_validator(email):
        pass


    
    nameFirst = forms.CharField(label='First Name', max_length = 100, error_messages={'invalid': 'TEST'}) #add max lengths to form itself
    nameLast = forms.CharField(label='Last Name', max_length = 100)
    email = forms.CharField(label='Email', max_length = 100, widget=forms.TextInput(attrs={'placeholder': 'youraddress@domain.com'}))
    phone = forms.CharField(label='Phone',widget=forms.TextInput(attrs={'placeholder': 'XXX-XXX-XXXX'}))
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