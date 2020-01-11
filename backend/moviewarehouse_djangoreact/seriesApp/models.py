from django.db import models
from datetime import datetime


class Series(models.Model):
    series_title = models.CharField(max_length=200, default='kkkk')
    series_creator1 = models.CharField(max_length=100)
    series_creator2 = models.CharField(max_length=100, default='None')
    series_synopsis = models.CharField(max_length=1000)
    series_poster = models.FileField()
    series_release_date = models.DateField(("Date"), default='0000')
    series_budget = models.IntegerField()
    series_gross = models.IntegerField()
    series_genre = models.CharField(max_length=100, default='Action')
    series_rating = models.FloatField()

    def __str__(self):
        return self.series_title
