from django.db.models.signals import post_save
from .models import NewUser, Profile
from django.dispatch import receiver
from PIL import Image as IMG
from django.core.exceptions import ObjectDoesNotExist

@receiver(post_save, sender=NewUser)
def create_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)


@receiver(post_save, sender=NewUser)
def save_profile(sender, instance, **kwargs):
    try:
        instance.profile.save()
    except ObjectDoesNotExist:
        Profile.objects.create(user=instance)