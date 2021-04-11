from rest_framework import serializers
from entrec.models import Text

class TextSerializer(serializers.ModelSerializer):
    # serializers for Web API
    class Meta: 
        model = Text
        fields = ['text_content']