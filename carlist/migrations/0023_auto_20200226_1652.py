# Generated by Django 3.0.3 on 2020-02-26 16:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('carlist', '0022_auto_20200226_0344'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vehicle',
            name='carType',
            field=models.CharField(choices=[('Sedan', 'Car'), ('2', 'Truck'), ('3', 'SUV'), ('4', 'Van')], max_length=200, null=True),
        ),
    ]
