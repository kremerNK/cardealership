# Generated by Django 3.0.3 on 2020-02-22 04:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('carlist', '0018_auto_20200221_0436'),
    ]

    operations = [
        migrations.AddField(
            model_name='vehicle',
            name='price',
            field=models.CharField(default='', max_length=200, null=True),
        ),
    ]
