from rest_framework import serializers
<<<<<<< HEAD
from entrec.models import Document
=======
from entrec.models import Text
>>>>>>> 1a5231400c4f94e46b4da242301a88bf6a4a73d2

class TextSerializer(serializers.ModelSerializer):
    # serializers for Web API
<<<<<<< HEAD
    Document.id = serializers.IntegerField(read_only=True)
    Document.document_name = serializers.CharField(allow_blank=False, max_length=50)
    Document.submission_date = serializers.DateField()
    Document.submission_time = serializers.TimeField()


    def create(self, validated_data):
        """
        Create and return a new 'entrec' instance, given the validated data.
        """
        return Document.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        Update and return an existing 'entrec' instance, given the validated data.
        """
        instance.document_name = validated_data.get('document name', instance.document_name)
        instance.document_date = validated_data.get('document date submitted', instance.document_name)
        instance.document_name = validated_data.get('document date submitted', instance.document_name)
        instance.save()
        return instance
=======
    class Meta: 
        model = Text
        fields = ['text_content']
>>>>>>> 1a5231400c4f94e46b4da242301a88bf6a4a73d2
