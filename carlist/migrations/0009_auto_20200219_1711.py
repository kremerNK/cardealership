# Generated by Django 3.0.3 on 2020-02-19 17:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('carlist', '0008_vehicle_picture'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vehicle',
            name='vehicleName',
            field=models.CharField(default='1', max_length=200, null=True),
        ),
    ]
