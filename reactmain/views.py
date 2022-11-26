from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from reactmain.src.django.utils import blog_utils
from django.urls import reverse

def index(request):
	return render(request, 'reactmain/index.html')

def edit_post(request):
	if request.method == 'POST':
		postdata = request.POST
		blog_utils.edit_post(postdata)
		return HttpResponseRedirect('')

def delete_post(request):
	if request.method == 'GET':
		blog_utils.delete_post(request.GET.get('id', ''))
		return HttpResponseRedirect('')

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