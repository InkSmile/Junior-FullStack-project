from django.db import migrations

def create_data(apps, schema_editor):
    User = apps.get_model('rest_api', 'User')
    User(name="Joe Silver", age=22).save()

class Migration(migrations.Migration):

    dependencies = [
        ('rest_api', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_data),
    ]