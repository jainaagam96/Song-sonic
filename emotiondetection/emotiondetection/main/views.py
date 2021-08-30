from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
import emotion
from .models import song
# Create your views here.
def home(request):
    h=emotion.cool()
    #h='Happy'
    #print('hi')
    emoti=song.emotion
    hi=song.objects.values('song_name', 'audio_file', 'artist', 'album', 'upload_time').filter(emotion=h)
    # all=song.objects.all()
    print(hi)
    print("ppppppppppppppppppppppppppp")
    print(type(h))
    #q=song.name()
    #cv=song.objects.get('audio_file')
    #print(cv)
    #print(q)
    #nam=song.audio_file.name()
    #print(nam)
    #return HttpResponse(h+' song wiil be played')
    return  render(request,'index.html',{'c':h,'so':hi, 'name': hi[0]['audio_file'], 'psong_name':hi[0]['song_name'], 'emotion' : h, 'count':0})
#def login(request):

def song_navigator(request):
    action = request.POST['value']
    playing_count = int(request.POST['count'])
    h = request.POST['h']
    if action == 'next_music_req':
        hi = song.objects.values('song_name', 'audio_file', 'artist', 'album', 'upload_time').filter(emotion=h)
        print(hi)
        playing_count = playing_count % len(hi)
        return JsonResponse({'name': hi[playing_count]['audio_file'], 'psong_name':hi[playing_count]['song_name'], 'emotion':h, 'count':playing_count+1})


