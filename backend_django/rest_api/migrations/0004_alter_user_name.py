# Generated by Django 4.0 on 2021-12-25 22:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rest_api', '0003_alter_group_title_alter_user_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='name',
            field=models.CharField(max_length=150, verbose_name='Name'),
        ),
    ]
