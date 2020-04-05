from .base import *
from dotenv import load_dotenv
import os

print('production')
# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False
print('test')
# print(os)
# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'm^@pmbe5h!75o(!$lfwbb3y_$oi2bipk_l5)(b!f&f)(oigc9z'
# SECRET_KEY = os.getenv("SECRET_KEY")
# SECRET_KEY = os.environ['DJANGO_SECRET_KEY']


# SECURITY WARNING: define the correct hosts in production!
# ALLOWED_HOSTS = ['192.168.0.4', 'localhost', 'straussweb.pythonanywhere.com']
ALLOWED_HOSTS = ['*']


# EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
try:
    from .local import *
except ImportError:
    pass
