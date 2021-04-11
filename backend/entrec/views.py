from django.shortcuts import render
from rest_framework import viewsets
from entrec.models import Text
from entrec.serializers import TextSerializer
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from rest_framework import status

@api_view(['GET', 'POST'])
def text_list(request):
    if request.method == 'POST':
        text_data = JSONParser().parse(request)
        text_serializer = TextSerializer(data=text_data)
        if text_serializer.is_valid():
            text_serializer.save()
            return JsonResponse(text_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(text_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    if request.method == 'GET':
        text = Text.objects.all()
        text_serializer = TextSerializer(text, many=True)
        return JsonResponse(text_serializer.data, safe=False)
 

