from rest_framework.generics import ListAPIView, RetrieveAPIView
from seriesApp.models import Series
from .serializers import SeriesSerializer


class SeriesListView(ListAPIView):
    queryset = Series.objects.all()
    serializer_class = SeriesSerializer


class SeriesDetailView(RetrieveAPIView):
    queryset = Series.objects.all()
    serializer_class = SeriesSerializer
