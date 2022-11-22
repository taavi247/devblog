from django.urls import path
from . import views

urlpatterns = [
	path('', views.index),
	path('editpost/', views.edit_post),
	path('addpost/', views.add_post),
	path('api/getposts', views.get_posts),
]