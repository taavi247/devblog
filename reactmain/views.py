from django.shortcuts import render
from django.http import HttpResponse
from reactmain.src.django.utils import blog_utils
def index(request):
	return render(request, 'reactmain/index.html')

def edit_post(request):
	if request.method == 'GET':
		return render(request, 'reactmain/editpost.html')
	elif request.method == 'POST':
		postdata = request.POST
		blog_utils.edit_post(postdata)
		return HttpResponse('Post edited!')

def add_post(request):
	if request.method == 'GET':
		return render(request, 'reactmain/addpost.html')
	elif request.method == 'POST':
		postdata = request.POST
		blog_utils.add_post(postdata)
		return HttpResponse('Post added!')

def get_posts(request):
	posts = blog_utils.query_all_posts()
	return HttpResponse(
		posts,
		content_type='application/json'
	)