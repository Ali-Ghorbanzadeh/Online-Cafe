# Generated by Django 5.1.1 on 2024-09-26 13:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customerprofile',
            name='phone_number',
            field=models.CharField(max_length=11, null=True, unique=True),
        ),
    ]