from .base import *
from dotenv import load_dotenv
print('development')

project_folder = os.path.expanduser('/home/kremer')
print(project_folder)
test1 = load_dotenv(os.path.join(project_folder, '.env'))
print(test1)
testkey = os.getenv('test_key')
print(testkey)
# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True
 
# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ['DJANGO_SECRET_KEY']


# SECURITY WARNING: define the correct hosts in production!
ALLOWED_HOSTS = ['192.168.0.4', 'localhost', 'straussweb.pythonanywhere.com']


# EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend' 
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
try:
    from .local import *
except ImportError:
    pass
   