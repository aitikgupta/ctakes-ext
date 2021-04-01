from django.db import models

class Document(models.Model):
    document_id = models.AutoField(primary_key=True)         # auto incrementing primary key 
    document_name = models.CharField(max_length=50)
    submission_date = models.DateField()
    submission_time = models.TimeField()

class Text(models.Model):
    text_id = models.AutoField(primary_key=True)
    document_id = models.ForeignKey(Document, on_delete=models.CASCADE)
    text_content= models.TextField(max_length=1000)

class Information(models.Model):
    info_id = models.AutoField(primary_key=True)
    text_id = models.ForeignKey(Text, on_delete=models.CASCADE)
    protected_name = models.CharField(max_length=25)

    
