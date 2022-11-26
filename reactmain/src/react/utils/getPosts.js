const URL_GETPOST = 'http://localhost:8000/api/getpost?id=';
const URL_GETPOSTS = 'http://localhost:8000/api/getposts';
const URL_GETTITLES = 'http://localhost:8000/api/gettitles';
const URL_DELETEPOST = 'http://localhost:8000/api/deletepost?id=';

export const getPost = (id) => {
  return getAPI(URL_GETPOST + id);
}

export const getPosts = () => {
  return getAPI(URL_GETPOSTS);
}

export const getTitles = () => {
  return getAPI(URL_GETTITLES);
}

export const deletePost = (id) => {
  return getAPI(URL_DELETEPOST + id);
}

const getAPI = (url) => {
  const options = {
    referrer: 'no-referrer-when-downgrade',
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };

  return fetchPosts(options, url).then(posts_json => {
    return posts_json;
  });
}

async function fetchPosts(options, url) {
  const response = await fetch(url, options);
  const posts_json = await response.json();
  return posts_json;
}
