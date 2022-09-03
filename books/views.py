from urllib import response
from books.forms import UploadForm
from .models import Book
from django.shortcuts import render, redirect
from django.http import Http404, HttpResponse
from books.forms import UploadForm
from .serializers import BookSerializer

from rest_framework import status
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.decorators import api_view




def home(request):
    return HttpResponse("Connected")

@api_view(['GET', 'POST'])
def book_list(request):
    if request.method == 'GET':
        books = Book.objects.all()
        serializer = BookSerializer(books, many=True)
        return Response(serializer.data)
    
    if request.method == 'POST':
        serializer = BookSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE'])
def book_detail(request, book_id):
    try:
        book = Book.objects.get(pk=book_id)
    except:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = BookSerializer(book)
        return Response(serializer.data)

    if request.method == 'PUT':
        serializer = BookSerializer(book, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'DELETE':
        book.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
'''
def upload(request):
    if request.POST:
        form = UploadForm(request.POST, request.FILES)
        print(request.FILES)
        if form.is_valid():
            form.save()
        return redirect(home)

    return render(request, 'books/upload.html', {'form': UploadForm})
'''
