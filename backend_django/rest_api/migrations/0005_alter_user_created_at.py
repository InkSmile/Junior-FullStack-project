# Generated by Django 4.0 on 2021-12-26 17:19

from django.db import migrations
import rest_api.custom_models


class Migration(migrations.Migration):

    dependencies = [
        ('rest_api', '0004_alter_user_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='created_at',
            field=rest_api.custom_models.CustomDateTimeField(auto_now_add=True, verbose_name='Created date'),
        ),
    ]
