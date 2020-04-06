import os

os.environ['DJANGO_SETTINGS_MODULE'] = 'car.settings.dev'
# os.environ['DJANGO_CONFIGURATION'] = 'Production'
os.environ['DJANGO_SECRET_KEY'] = 'm^@pmbe5h!75o(!$lfwbb3y_$oi2bipk_l5)(b!f&f)(oigc9z'

from django.core.wsgi import get_wsgi_application
application = get_wsgi_application() 