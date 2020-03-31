from .base import *

DEBUG = False
ALLOWED_HOSTS = ['http://straussweb.pythonanywhere.com/']

try:
    from .local import *
except ImportError:
    pass
 