from distutils.command.upload import upload
from importlib.metadata import requires
from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=200)
    year = models.IntegerField()
    cover = models.CharField(max_length=1024)

    def __str__(self):
        return "\" " + self.title + "\""