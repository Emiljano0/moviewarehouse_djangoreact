from rest_framework.generics import ListAPIView, RetrieveAPIView
from documentariesApp.models import Documentaries
from .serializers import DocumentariesSeriealizers


class DocumentariesListView(ListAPIView):
    queryset = Documentaries.objects.all()
    serializer_class = DocumentariesSeriealizers


class DocumentariesDetailView(RetrieveAPIView):
    queryset = Documentaries.objects.all()
    serializer_class = DocumentariesSeriealizers
