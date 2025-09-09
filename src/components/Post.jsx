import React from 'react';
import './Post.css';

function Post({ post }) {
  return (
    <div className="post-card">
      <div className="post-header">
        <img src={post.authorAvatar} alt={post.author} className="post-author-avatar" />
        <div className="post-author-info">
          <span className="post-author-name">{post.author}</span>
          <span className="post-timestamp">{post.timestamp} <i className="fas fa-globe-americas"></i></span>
        </div>
        <div className="post-options">
          <i className="fas fa-ellipsis-h"></i>
        </div>
      </div>
      <div className="post-content">
        <p>{post.content}</p>
        {post.image && <img src={post.image} alt="Post" className="post-image" />}
      </div>
      <div className="post-actions">
        <button className="action-button"><i className="far fa-thumbs-up"></i> Like</button>
        <button className="action-button"><i className="far fa-comment"></i> Comment</button>
        <button className="action-button"><i className="far fa-share-square"></i> Share</button>
      </div>
      <div className="post-comment-box">
        <img src="/1.jpg" alt="Rin" className="comment-avatar" />
        <input type="text" placeholder="Write a comment..." className="comment-input" />
      </div>
    </div>
  );
}

export default Post;