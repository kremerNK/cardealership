from wagtail.core.models import Page
from wagtail.core.fields import RichTextField
from wagtail.admin.edit_handlers import FieldPanel
from django.db import models


class Vehicle(Page):
    class vehicleType(models.TextChoices):
        ##may need to alter these fields back to suv = '3', 'SUV'. 
        sedan = 'Sedan'
        truck = 'Truck'
        suv = 'SUV'
        van = 'Van'
   
    model = models.CharField(max_length=200, null=True, default='1')
    year = models.CharField(max_length=200, null=True, default='')
    make = models.CharField(max_length=200, null=True, default='toyota')
    price = models.CharField(max_length=200, null=True, default='$')
    carType = models.CharField(max_length=200, null=True, choices=vehicleType.choices)
    type = models.CharField(max_length=200, null=True, default='')
    bodyColor = models.CharField(max_length=200, null=True, default='')
    mileage = models.CharField(max_length=200, null=True, default=0)
    mpg = models.CharField(max_length=200, default='22')
    engine = models.CharField(max_length=200, default='5.3L V-6')
    transmission = models.CharField(max_length=200, default='4-Speed auto')
    drive_line = models.CharField(max_length=200, default='2WD')
    exterior_color = models.CharField(max_length=200, default='red')
    interior_color = models.CharField(max_length=200, default='black')
    stock_number = models.CharField(max_length=200, default='V220031')
    vin = models.CharField(max_length=200, default='')
    picture = models.ImageField(default='')

    def child_pages(self):
        return ItemPage.objects.live().child_of(self)

    content_panels = Page.content_panels + [
        FieldPanel('year'),
        FieldPanel('model'), 
        FieldPanel('price'),
        FieldPanel('carType'),
        FieldPanel('make'),
        FieldPanel('mileage'),
        FieldPanel('mpg'),
        FieldPanel('engine'),
        FieldPanel('bodyColor'),
        FieldPanel('type'),
        FieldPanel('transmission'),
        FieldPanel('drive_line'),
        FieldPanel('exterior_color'),
        FieldPanel('interior_color'),
        FieldPanel('stock_number'),
        FieldPanel('picture'),
    ]
    