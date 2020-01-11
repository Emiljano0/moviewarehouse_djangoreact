from django.db import models
from datetime import datetime


class Movies(models.Model):
    movie_director = models.CharField(max_length=1000)
    movie_synopsis = models.CharField(max_length=1000)
    movie_title = models.CharField(max_length=100)
    movie_poster = models.FileField()
    movie_thumbnail = models.FileField(default='Planet Earth thumbnail')
    movie_release_date = models.DateField(("Date"), default='0000')
    movie_budget = models.IntegerField()
    movie_gross = models.IntegerField()
    movie_genre = models.CharField(max_length=100)
    movie_quality = models.CharField(max_length=100)
    movie_rating = models.FloatField()
    movie_video = models.FileField()
    movie_subtitles = models.FileField(default='Planet Earth Subtitles')

    def __str__(self):
        return self.movie_title
