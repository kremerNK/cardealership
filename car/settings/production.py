from .base import *

DEBUG = False
SECRET_KEY = 'm^@pmbe5h!75o(!$lfwbb3y_$oi2bipk_l5)(b!f&f)(oigc9z'
ALLOWED_HOSTS = ['*']
try:
    # from .local import *
    from .base import *

except ImportError:
    print("import error")
    pass







# from .base import *

# DEBUG = False

# try:
#     from .local import *
# except ImportError:
#     pass
