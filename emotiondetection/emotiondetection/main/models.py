from django.db import models
'''
# Create your models here.
class lgoin(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    email_m = models.CharField(max_length=200)
    paswrd1= models.CharField(max_length=200)
    paswrd2= models.CharField(max_length=200)
    def check(self):
        if paswrd1!=paswrd2:
            return "password will be same"

    def __str__(self):
        return self.first_name + ' ' + self.last_name+'  '+self.email_m
'''
class song(models.Model):
    song_name=models.CharField(max_length=200)
    emotion=models.CharField(max_length=100)
    audio_file = models.FileField(default='')
    artist=models.CharField(max_length=100)
    album=models.CharField(max_length=100)
    upload_time = models.DateTimeField(auto_now=True)
    def __str__(self):
        return self.song_name
