const URL_GETPOST = 'http://127.0.0.1:8000/api/getpost?id=';
const URL_GETPOSTS = 'http://127.0.0.1:8000/api/getposts';
const URL_GETTITLES = 'http://127.0.0.1:8000/api/gettitles';
const URL_DELETEPOST = 'http://127.0.0.1:8000/api/deletepost?id=';

export const getPost = (id) => {
  return getAPI(URL_GETPOST + id);
}

export const getPosts = () => {
  return getAPI(URL_GETPOSTS);
}

export const getTitles = () => {
  return getAPI(URL_GETTITLES);
}

export const editPost = (id) => {
  return getAPI(URL_DELETEPOST + id);
}

export const deletePost = (id) => {
  return getAPI(URL_DELETEPOST + id);
}

const getAPI = (url) => {
  const options = {
    referrer: 'no-referrer-when-downgrade',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + sessionStorage.getItem('token')
    },
  };

  return fetchPosts(options, url).then(posts_json => {
    return posts_json;
  });
}

async function fetchPosts(options, url) {
  try {
    const response = await fetch(url, options);
    const posts_json = await response.json();
    return posts_json;
  }
  catch (error) {
    return;
  }
}
