from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('api-movies-auth/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
    path('api-movies/', include('moviesApp.api-movies.urls')),
    path('api-series/', include('seriesApp.api-series.urls')),
    path('api-documentaries/', include('documentariesApp.api-documentaries.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
