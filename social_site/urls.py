from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/posts/', include('postsApi.urls')),
    path('api/user/', include('users.urls')),
    path('api/videos/', include('videoApp.urls')),
    path('auth/', obtain_auth_token),
]


urlpatterns = urlpatterns + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)