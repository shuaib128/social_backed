# Generated by Django 3.2.9 on 2021-12-02 13:04

from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('users', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Videos',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(default='Video Title', max_length=1000)),
                ('thumbnail', models.ImageField(blank=True, null=True, upload_to='media/VideoThumbnail')),
                ('video', models.FileField(blank=True, null=True, upload_to='videos', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['MOV', 'avi', 'mp4', 'webm', 'mkv'])])),
                ('pub_date', models.DateTimeField(auto_now_add=True)),
                ('last_edited', models.DateTimeField(auto_now=True)),
                ('ProfileItems', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.profile')),
                ('auhtor', models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
