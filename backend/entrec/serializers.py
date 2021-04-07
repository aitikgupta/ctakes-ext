from rest_framework import serializers
from entrec.models import Document, Text, Information

class EntRecSerializer(serializers.Serializer):
    # serializers for Web API

    def create(self, validated_data):
        """
        Create and return a new 'Snippet' instance, given the validated data.
        """
        return Document.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        Update and return an existing 'entrec' instance, given the validated data.