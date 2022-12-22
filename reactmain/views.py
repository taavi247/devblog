from django.shortcuts import render
from django.http import HttpResponse
from reactmain.src.django.utils import blog_utils
from django.urls import reverse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import authentication, permissions, status

def index(request):
	return render(request, 'reactmain/index.html')

def get_post(request):
	if request.method == 'GET':
		post = blog_utils.query_post(request.GET.get('id', ''))
		return HttpResponse(
			post,
			content_type='application/json'
		)

def get_posts(request):
	if request.method == 'GET':
		posts = blog_utils.query_all_posts()
		return HttpResponse(
			posts,
			content_type='application/json'
		)

def get_titles(request):
	if request.method == 'GET':
		posts = blog_utils.query_all_titles()
		return HttpResponse(
			posts,
			content_type='application/json'
		)

class AuthorizeUser(APIView):
	authentication_classes = [authentication.TokenAuthentication]
	permission_classes = [permissions.IsAdminUser]

	def get(self, request):
		content = {'Authenticated': 'True'}
		return Response(content)

class EditPost(APIView):
	authentication_classes = [authentication.TokenAuthentication]
	permission_classes = [permissions.IsAdminUser]

	def post(self, request):
		postdata = request.data
		blog_utils.edit_post(postdata)
		return Response(status=status.HTTP_204_NO_CONTENT)

class DeletePost(APIView):
	authentication_classes = [authentication.TokenAuthentication]
	permission_classes = [permissions.IsAdminUser]

	def get(self, request):
		blog_utils.delete_post(request.GET.get('id', ''))
		return Response(status=status.HTTP_204_NO_CONTENT)