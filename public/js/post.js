const newPostHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();
  
    if (title && content) {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create post.');
      }
    }
  };
  
  const editPostHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();
    const post_id = window.location.pathname.split('/')[2];
  
    if (title && content) {
      const response = await fetch(`/api/posts/${post_id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update post.');
      }
    }
  };
  
  const deletePostHandler = async (event) => {
    event.preventDefault();
  
    const post_id = window.location.pathname.split('/')[2];
  
    const response = await fetch(`/api/posts/${post_id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete post.');
    }
  };
  
  document.querySelector('.new-post-form').addEventListener('submit', newPostHandler);
  document.querySelector('.edit-post-form').addEventListener('submit', editPostHandler);
  document.querySelector('.delete-post-btn').addEventListener('click', deletePostHandler);
  