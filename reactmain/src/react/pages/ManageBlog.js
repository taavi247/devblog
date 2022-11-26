import React, { useEffect, useState } from 'react'
import { Container, Paper } from '@mui/material';
import { getPost, getTitles, deletePost } from '../utils/getPosts';

const emptyPost = [
  {
    '_id': {
      '$oid': 'new',
    },
    'title': '',
    'description': '',
    'content': '',
  }
]

const ManageBlog = () => {
  const [titles, setTitles] = useState(emptyPost);
  const [post, setPost] = useState(emptyPost);

  useEffect(() => {
    if (typeof post.title !== 'undefined') {
      document.getElementById('post_title').value = post.title;
      document.getElementById('post_description').value = post.description;
      document.getElementById('post_content').value = post.content;
      document.getElementById('post_id').value = post._id.$oid;
    }
    else {
      document.getElementById('post_title').value = '';
      document.getElementById('post_description').value = '';
      document.getElementById('post_content').value = '';
      document.getElementById('post_id').value = 'new';
    }
  }, [post._id]);

  const handleSelectClick = () => {
    updateTitles();
  }

  const handleSelectChange = () => {
    const selected = document.getElementById('select_post');
    const selectedIndex = selected.options.selectedIndex;
    const selectedId = document.getElementsByTagName('option')[selectedIndex].value;

    if (selectedId === 'new') {
      setPost(emptyPost[0]);
    }
    else {
      getPost(selectedId).then(json => {
        setPost(json[0]);
      });
    }
  }

  const handleDeleteClick = () => {
    deletePost(post._id.$oid);
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

      <form method='post' action='http://localhost:8000/api/editpost'>
        <label>
          <b>Title</b>
          <br />
          <textarea id='post_title' name='title' rows='1' cols='80' />
          <br />
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
        <input type='submit' value='Save' />
      </form>
    </Container>
  );
}

export default ManageBlog;