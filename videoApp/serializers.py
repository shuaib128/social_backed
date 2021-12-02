from rest_framework import serializers
from .models import Videos
from users.models import Profile, NewUser


# Post Serelizer
class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = (
            'id',
            'user',
            'first_name',
            'last_name',
            'description',
            'work',
            'education',
            'image',
            'joined_date',
            'address',
        )


class UsersSerilizer(serializers.ModelSerializer):
    class Meta:
        model = NewUser
        fields = (
            'id',
            'user_name'
        )


class VideoSerializer(serializers.ModelSerializer):
    auhtor = UsersSerilizer(required=True)
    ProfileItems = ProfileSerializer(required=True)
    class Meta:
        model = Videos
        fields = (
            'id',
            'title',
            'video',
            'thumbnail',
            'auhtor',
            'ProfileItems',
            'auhtor',
            'pub_date',
            'last_edited',
            'whenpublished',
        )