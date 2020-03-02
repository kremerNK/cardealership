# Generated by Django 3.0.3 on 2020-02-26 03:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('carlist', '0021_auto_20200226_0334'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vehicle',
            name='carType',
            field=models.CharField(choices=[('1', 'Sedan'), ('2', 'Truck'), ('3', 'SUV'), ('4', 'Van')], max_length=200, null=True),
        ),
    ]
