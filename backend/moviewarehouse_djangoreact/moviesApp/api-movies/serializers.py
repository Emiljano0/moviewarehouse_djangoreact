from rest_framework import serializers
from moviesApp.models import Movies


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movies
        fields = ('movie_director', 'movie_synopsis', 'movie_title', 'movie_poster', 'movie_thumbnail',
                  'movie_release_date', 'movie_budget', 'movie_gross', 'movie_genre', 'movie_quality',
                  'movie_rating', 'movie_video', 'movie_subtitles')
