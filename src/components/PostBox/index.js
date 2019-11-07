import React, { Component } from 'react';

import CommentBox from '../CommentBox';
import './styles.css';

export default class PostBox extends Component {
  render() {
    const { data } = this.props;
    return(
      <div className="post-box">
        <div className="user-info">
          <img src={data.author.avatar} alt={data.author.name}/>
          <div>
            <span>{data.author.name}</span>
            <small>{data.date}</small>
          </div>
        </div>
        <p>{data.content}</p>
        {data.comments.length > 0 ? (
          <>
            <hr/>
            {data.comments.map(comment => (
              <CommentBox key={comment.id} comment={comment} />
            ))}
          </>
        ) : ('')}
      </div>
    );
  }
}
