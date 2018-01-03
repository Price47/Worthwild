from __future__ import unicode_literals

from django.db import models

class mapMarker(models.Model):
    rank = models.IntegerField()
    tourist_rank = models.IntegerField()
    basic_rank = models.IntegerField()
    mood_rank = models.IntegerField()
    search_term = models.CharField(max_length=256, default="none")
    name = models.CharField(max_length=256)
    rating = models.FloatField()
    reviews = models.IntegerField()
    top_3 = models.BooleanField(default=False)

    def __str__(self):
        return "[" + str(self.search_rank) + "] " + str(self.name) + "(" + str(self.rating) + ")\n"


class neighborhoodRank(models.Model):
    name = models.CharField(max_length=256)
    description = models.TextField()
    nightlife_rank = models.IntegerField()
    shopping_rank = models.FloatField()
    walkabilty_rank = models.FloatField()
    top_3 = models.BooleanField(default=False)

    def __str__(self):
        return "[" + str(self.search_rank) + "] " + str(self.name) + "(" + str(self.rating) + ")\n"
