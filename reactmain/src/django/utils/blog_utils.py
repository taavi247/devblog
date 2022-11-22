from pymongo import MongoClient
from bson.json_util import dumps

def add_post(postdata):
	post = {
		"title": postdata.get('title'),
		"description": postdata.get('description'),
		"content": postdata.get('content')
	}

	client = MongoClient()
	database = client.blogposts
	posts = database.posts
	posts.insert_one(post)

def edit_post(postdata):
	pass

def query_all_posts():
	client = MongoClient()
	database = client.blogposts
	posts = database.posts.find()
	postlist = list(posts)

	return dumps(postlist)