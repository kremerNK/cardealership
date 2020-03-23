from django.conf import settings
from django.conf.urls import include, url
from django.urls import path
from django.contrib import admin

from wagtail.admin import urls as wagtailadmin_urls
from wagtail.core import urls as wagtail_urls
from wagtail.documents import urls as wagtaildocs_urls

from search import views as search_views
from carlist import views as carlist_views


urlpatterns = [
    url(r'^django-admin/', admin.site.urls),

    url(r'^admin/', include(wagtailadmin_urls)),
    url(r'^documents/', include(wagtaildocs_urls)),

    url(r'^search/$', search_views.search, name='search'),

    path('', carlist_views.home, name='home'),
    path('search-vehicles/', carlist_views.searchVehicle, name='searchVehicle'),
    path('dealership-hours/', carlist_views.hours, name='hours'),
    path('contact/', carlist_views.contact, name='contact'),
    path('search-vehicles/<str:slug>-<int:pk>/', carlist_views.vehiclePage, name='vehiclePage'),
    path('contact-submit', carlist_views.contactSubmit, name='contactSubmit'),
    # path('search-vehicles/test', carlist_views.vehiclePage, name='vehiclePage'),
    # path('search-vehicles/<str:slug>-<int:pk>/', carlist_views.vehicle, name='vehicle'),
]


if settings.DEBUG:
    from django.conf.urls.static import static
    from django.contrib.staticfiles.urls import staticfiles_urlpatterns

    # Serve static and media files from development server
    urlpatterns += staticfiles_urlpatterns()
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns = urlpatterns + [
    # For anything not caught by a more specific rule above, hand over to
    # Wagtail's page serving mechanism. This should be the last pattern in
    # the list:
    url(r"", include(wagtail_urls)),

    # Alternatively, if you want Wagtail pages to be served from a subpath
    # of your site, rather than the site root:
    #    url(r"^pages/", include(wagtail_urls)),
]
