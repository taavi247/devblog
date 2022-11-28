from pymongo import MongoClient
from bson.json_util import dumps
from bson.objectid import ObjectId
from django.http import HttpResponse

def edit_post(postdata):
	client = MongoClient()
	database = client.blogposts
	posts = database.posts
	
	post = {
		"title": postdata.get('title'),
		"description": postdata.get('description'),
		"content": postdata.get('content')
	}

	if (postdata.get('post_id') == 'new'):
		title = list(posts.find({'title': postdata.get('title')}))
		if title == []:
			print('newww')
			posts.insert_one(post)
	else:
		query = {'_id': ObjectId(postdata.get('post_id'))}
		posts.replace_one(query, post)

def delete_post(id):
	client = MongoClient()
	database = client.blogposts
	database.posts.delete_one({'_id': ObjectId(id)})

def query_post(id):
	client = MongoClient()
	database = client.blogposts
	post = database.posts.find({'_id': ObjectId(id)})

	return dumps(post)

def query_all_posts():
	client = MongoClient()
	database = client.blogposts
	posts = database.posts.find()
	postlist = list(posts)

	return dumps(postlist)

def query_all_titles():
	client = MongoClient()
	database = client.blogposts
	posts = database.posts.find({}, {'title': 1})
	postlist = list(posts)

	return dumps(postlist)