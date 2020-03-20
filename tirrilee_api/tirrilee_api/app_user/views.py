from django.shortcuts import render
from rest_framework.generics import CreateAPIView, RetrieveAPIView

from app_user.models import User
from rest_framework.response import Response

from .serializers import UserRegisterSerializer


class UserRegisterAPI(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserRegisterSerializer

    def create(self, request, *args, **kwargs):
        return super(UserRegisterAPI, self).create(request)
