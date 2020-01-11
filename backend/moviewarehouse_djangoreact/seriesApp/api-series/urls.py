from django.urls import path
from .views import SeriesListView, SeriesDetailView

urlpatterns = [
    path('', SeriesListView.as_view()),
    path('<pk>', SeriesDetailView.as_view()),
]