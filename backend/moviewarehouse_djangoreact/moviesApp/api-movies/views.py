from rest_framework.generics import ListAPIView, RetrieveAPIView
from moviesApp.models import Movies
from .serializers import MovieSerializer


class MovieListView(ListAPIView):
    queryset = Movies.objects.all()
    serializer_class = MovieSerializer


class MovieDetailView(RetrieveAPIView):
    queryset = Movies.objects.all()
    serializer_class = MovieSerializer
