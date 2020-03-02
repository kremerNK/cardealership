# Generated by Django 3.0.3 on 2020-02-20 03:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('carlist', '0009_auto_20200219_1711'),
    ]

    operations = [
        migrations.RenameField(
            model_name='vehicle',
            old_name='vehicleName',
            new_name='model',
        ),
        migrations.AddField(
            model_name='vehicle',
            name='bodyColor',
            field=models.CharField(default='', max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='vehicle',
            name='make',
            field=models.CharField(choices=[('car', 'car')], default='', max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='vehicle',
            name='type',
            field=models.CharField(default='', max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='vehicle',
            name='year',
            field=models.CharField(default='0', max_length=200, null=True),
        ),
    ]
