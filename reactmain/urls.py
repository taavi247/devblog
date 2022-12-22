from django.urls import path
from . import views
from rest_framework.authtoken import views as rest_views

urlpatterns = [
	path('', views.index),
	path('api/getpost', views.get_post),
	path('api/getposts', views.get_posts),
	path('api/gettitles', views.get_titles),
	path('api/editpost', views.EditPost.as_view()),
	path('api/deletepost', views.DeletePost.as_view()),
	path('api/token-auth', rest_views.obtain_auth_token),
	path('api/authorize-user', views.AuthorizeUser.as_view())
]