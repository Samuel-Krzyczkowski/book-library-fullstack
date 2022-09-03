from django.forms import ModelForm
from django import forms
from .models import Book

class UploadForm(ModelForm):
    title = forms.TextInput()
    author = forms.TextInput()
    year = forms.NumberInput()
    cover = forms.ImageField()

    class Meta:
        model = Book
        fields = ['title', 'author', 'year', 'cover']