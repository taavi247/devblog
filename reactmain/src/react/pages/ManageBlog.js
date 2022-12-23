import React, { useEffect, useState } from 'react'
import { Container } from '@mui/material';
import { getPost, getTitles, deletePost } from '../utils/getPosts';
import * as constants from '../common/constants';
import Login from './Login';

const URL_POSTAPI = 'http://localhost:8000/api/editpost';
const URL_AUTH_USER = 'http://localhost:8000/api/authorize-user';

const ManageBlog = ({ isAuthenticated, setIsAuthenticated }) => {
  const [titles, setTitles] = useState(constants.emptyPost);
  const [post, setPost] = useState(constants.emptyPost);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      if (typeof post.title !== 'undefined') {
        document.getElementById('post_title').value = post.title;
        document.getElementById('post_description').value = post.description;
        document.getElementById('post_content').value = post.content;
        document.getElementById('post_id').value = post._id.$oid;
        document.getElementById('post_image').value = post.image;
      }
      else {
        document.getElementById('post_title').value = '';
        document.getElementById('post_description').value = '';
        document.getElementById('post_content').value = '';
        document.getElementById('post_id').value = 'new';
        document.getElementById('post_image').value = '';
      }
    }
  }, [post, isAuthenticated]);

  useEffect(() => {
    checkIfAuthenticated();
  });

  const handleSelectClick = () => {
    updateTitles();
  }

  const handleSelectChange = () => {
    const selected = document.getElementById('select_post');
    const selectedIndex = selected.options.selectedIndex;
    const selectedId = document.getElementsByTagName('option')[selectedIndex].value;

    if (selectedId === 'new') {
      setPost(constants.emptyPost[0]);
    }
    else {
      getPost(selectedId).then(json => {
        setPost(json[0]);
      });
    }
  }

  const handleDeleteClick = () => {
    deletePost(post._id.$oid);
    setPost(constants.emptyPost[0]);
    document.getElementById('select_post').options.selectedIndex = 1;
  }

  const updateTitles = () => {
    getTitles().then(json => {
      setTitles(json);
    });
  }

  const getTitleOptions = () => {
    return titles.map((title) => {
      var title_oid = JSON.stringify(title._id.$oid);

      // String format "127bvca32961dd176a4ccf2a"
      // Removing quotes with slice here
      title_oid = title_oid.slice(1, title_oid.length - 1);

      return (
        <option key={title.title} value={title_oid}>
          {title.title}
        </option>
      )
    });
  }

  const handleClickSubmit = () => {
    setIsSaved(true);

    setTimeout(() => {
      setIsSaved(false);
    }, 1000);
  }

  function checkIfAuthenticated() {
    const options = {
      referrer: 'no-referrer-when-downgrade',
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': 'Token ' + getToken()
      },
    };

    fetch(URL_AUTH_USER, options)
      .then(response => response.json())
      .then(payload => {
        if (payload.Authenticated === 'True') {
          setIsAuthenticated(true);
        }
        else {
          setIsAuthenticated(false);
        }
      })
  }

  const getToken = () => {
    return sessionStorage.getItem('token');
  }

  const setToken = (token) => {
    sessionStorage.setItem('token', token);
    checkIfAuthenticated();
  }

  const handleSubmit = async e => {
    e.preventDefault();

    const title = e.target.title.value;
    const description = e.target.description.value;
    const content = e.target.content.value;
    const image = e.target.image.value;
    const post_id = e.target.post_id.value;

    const options = {
      referrer: 'no-referrer-when-downgrade',
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': 'Token ' + getToken()
      },
      body: JSON.stringify({ title, description, content, image, post_id })
    };

    await fetch(URL_POSTAPI, options);
  }

  if (!getToken() || !isAuthenticated) {
    return <Login setToken={setToken} />
  }
  else {
    return (
      <Container className='blog_list' maxWidth='md'>
        <b>Select post</b>
        <br />
        <select
          id='select_post'
          className='select_post'
          onClick={handleSelectClick}
          onChange={handleSelectChange}
        >
          <option value='choose' disabled>
            -- Select Post --
          </option>
          <option id='select_new' value='new'>
            - Create a new post -
          </option>
          {getTitleOptions()}
        </select>
        <button onClick={handleDeleteClick}>
          Delete
        </button>

        <form onSubmit={handleSubmit}>
          <label>
            <b>Title</b>
            <br />
            <textarea id='post_title' name='title' rows='1' cols='80' />
          </label>
          <br />
          <label>
            <b>Image URL</b>
            <br />
            <textarea id='post_image' name='image' rows='1' cols='80' />
          </label>
          <br />
          <label>
            <b>Description</b>
            <br />
            <textarea id='post_description' name='description' rows='10' cols='80' />
          </label>
          <br />
          <label>
            <b>Content</b>
            <br />
            <textarea id='post_content' name='content' rows='30' cols='80' />
          </label>
          <br />
          <input type='hidden' id='post_id' name='post_id' />
          <input type='submit' onClick={handleClickSubmit} value='Save' />
          <span>{isSaved && <p>Saving...</p>}</span>
        </form>
      </Container>
    );
  }
}

export default ManageBlog;