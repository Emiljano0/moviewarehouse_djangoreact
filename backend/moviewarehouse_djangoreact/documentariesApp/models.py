from django.db import models
from datetime import datetime


class Documentaries(models.Model):
    documentary_title = models.CharField(max_length=200, default='kkkk')
    documentary_creator1 = models.CharField(max_length=100)
    documentary_creator2 = models.CharField(max_length=100, default='None')
    documentary_synopsis = models.CharField(max_length=1000)
    documentary_poster = models.FileField()
    documentary_release_date = models.DateField(("Date"), default='0000')
    documentary_budget = models.IntegerField()
    documentary_gross = models.IntegerField()
    documentary_genre = models.CharField(max_length=100, default='Action')
    documentary_rating = models.FloatField()

    def __str__(self):
        return self.documentary_title
