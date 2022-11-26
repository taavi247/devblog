from django.urls import path
from . import views

urlpatterns = [
	path('', views.index),
	path('api/editpost', views.edit_post),
	path('api/deletepost', views.delete_post),
	path('api/getpost', views.get_post),
	path('api/getposts', views.get_posts),
	path('api/gettitles', views.get_titles),
]