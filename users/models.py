from django.db import models
from django.contrib.auth.models import User


# User Profile
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=150, blank=True)
    last_name = models.CharField(max_length=150, blank=True)
    description = models.TextField(default="Description")
    work = models.CharField(max_length=150, blank=True)
    education = models.CharField(max_length=150, blank=True)
    image = models.ImageField(null=True, blank=True, upload_to='media/profileImage',)
    joined_date = models.DateTimeField(auto_now_add= True)
    address = models.CharField(max_length=150, blank=True)
    Followes = models.ManyToManyField(User, related_name='flowwers', null=True, blank=True,)

    def __str__(self):
        return f"{self.user} Profile"