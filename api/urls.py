from django.contrib import admin
from django.urls import path, include

from .views import RoomView, CreateRoomView, GetRoom
urlpatterns = [
 path('',  RoomView.as_view()),
 path('create',  CreateRoomView.as_view()),
 path('get-room',  GetRoom.as_view()),
]
