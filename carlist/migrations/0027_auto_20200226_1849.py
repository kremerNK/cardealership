# Generated by Django 3.0.3 on 2020-02-26 18:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('carlist', '0026_auto_20200226_1847'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vehicle',
            name='carType',
            field=models.CharField(choices=[('Sedan', 'Sedan'), ('Truck', 'Truck'), ('SUV', 'Suv'), ('Van', 'Van')], max_length=200, null=True),
        ),
    ]
