from django.urls import path
from .views import DocumentariesListView, DocumentariesDetailView

urlpatterns = [
    path('', DocumentariesListView.as_view()),
    path('<pk>', DocumentariesDetailView.as_view()),
]