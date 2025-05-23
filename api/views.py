from django.shortcuts import render
from rest_framework import generics
from .models import Room
from .serializers import RoomSerialzer, CreateRoomSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
# Create your views here.

class RoomView(generics.ListCreateAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerialzer

class GetRoom(APIView):
    serializer_class = RoomSerialzer
    Lookup_url_kwarg  = 'code'

    def get(self, request, format=None):
        code= request.GET.get(self.Lookup_url_kwarg)
        if code != None:
            room = Room.objects.filter(code=code)
            if len(room) > 0:
                data = RoomSerialzer(room[0]).data
                data['is_host'] = self.request.session.session_key == room[0].host
                return Response(data, status=status.HTTP_200_OK)
            return Response({'Room not found': 'Invalid room code'}, status=status.HTTP_404_NOT_FOUND)
        return Response({'Bad request': 'Code parameter not found in request'}, status=status.HTTP_400_BAD_REQUEST)

class CreateRoomView(APIView):
    serializer_class = CreateRoomSerializer
    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            guest_can_pause = serializer.data.get('guest_can_pause') 
            votes_to_skip = serializer.data.get('votes_to_skip')
            host = self.request.session.session_key
            queryset = Room.objects.filter(host=host)
            if queryset.exists():
                room = queryset[0]
                room.guest_can_pause = guest_can_pause
                room.votes_to_skip = votes_to_skip
                room.save(update_fields=['guest_can_pause', 'votes_to_skip'])
             
            else:
                room = Room(host=host, guest_can_pause=guest_can_pause, votes_to_skip=votes_to_skip)
                room.save()
            
            return Response(RoomSerialzer(room).data, status=status.HTTP_201_CREATED)