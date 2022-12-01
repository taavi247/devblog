from pymongo import MongoClient
from bson.json_util import dumps
from bson.objectid import ObjectId
from django.http import HttpResponse
from datetime import date

def edit_post(postdata):
	client = MongoClient()
	database = client.blogposts
	posts = database.posts
	
	post = {
		"title": postdata.get('title'),
		"description": postdata.get('description'),
		"content": postdata.get('content'),
		"date_created": '',
		"date_modified": ''
	}

	post_id = postdata.get('post_id')
	
	if (post_id == 'new'):
		title = list(posts.find({'title': postdata.get('title')}))
		if title == []:
			post['date_created'] = date.today().isoformat()
			post['date_modified'] = date.today().isoformat()
			posts.insert_one(post)
	else:
		id_query = {'_id': ObjectId(post_id)}
		created = posts.find_one(id_query, {'date_created': 1})
		post['date_created'] = created['date_created']
		post['date_modified'] = date.today().isoformat()
		posts.replace_one(id_query, post)

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