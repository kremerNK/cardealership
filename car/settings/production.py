from .base import *
from dotenv import load_dotenv
import os


# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

# SECURITY WARNING: keep the secret key used in production secret!

SECRET_KEY = os.getenv("SECRET_KEY")



# SECURITY WARNING: define the correct hosts in production!
ALLOWED_HOSTS = ['straussweb.pythonanywhere.com']



# EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
try:
    from .local import *
except ImportError:
    pass
