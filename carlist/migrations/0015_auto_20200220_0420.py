# Generated by Django 3.0.3 on 2020-02-20 04:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('carlist', '0014_auto_20200220_0412'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vehicle',
            name='picture',
            field=models.ImageField(default='', upload_to=''),
        ),
    ]
