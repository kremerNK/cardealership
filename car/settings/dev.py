from .base import *
print("dev.py")
# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'm^@pmbe5h!75o(!$lfwbb3y_$oi2bipk_l5)(b!f&f)(oigc9z'

# SECURITY WARNING: define the correct hosts in production!
ALLOWED_HOSTS = ['*'] 
# ALLOWED_HOSTS = ['localhost'] 

# EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'

try:
    from .local import *
    
    
    from .base import *
except ImportError:

    pass
 