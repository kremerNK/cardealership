# Generated by Django 3.0.3 on 2020-02-19 16:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('carlist', '0007_auto_20200219_1601'),
    ]

    operations = [
        migrations.AddField(
            model_name='vehicle',
            name='picture',
            field=models.ImageField(default='0', upload_to=''),
        ),
    ]
