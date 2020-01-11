from rest_framework import serializers
from seriesApp.models import Series


class SeriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Series
        fields = ('series_title', 'series_creator1', 'series_creator2', 'series_synopsis', 'series_poster',
                  'series_release_date', 'series_budget', 'series_gross', 'series_genre', 'series_rating')
