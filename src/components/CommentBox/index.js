import React, { Component } from 'react';

import './styles.css';

export default class CommentBox extends Component {
  render() {
    const { comment } = this.props;
    return (
      <div className="comment-box">
        <img src={comment.author.avatar} alt={comment.author.name} />
        <div>
          <div className="comment-container">
            <span>
              <span className="username">{comment.author.name} </span>
              {comment.content}
            </span>
          </div>
          <div className="comment-options">
            <span className="date">{comment.date}</span>
            <button>Curtir</button>
            <span>&bull;</span>
            <button>Responder</button>
          </div>
        </div>
      </div>
    );
  }
}
