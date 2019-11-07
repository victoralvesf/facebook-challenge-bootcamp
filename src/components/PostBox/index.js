import React, { Component } from 'react';

import CommentBox from '../CommentBox';
import './styles.css';

export default class PostBox extends Component {
  render() {
    return(
      <div className="post-box">
        <div className="user-info">
          <img src="https://scontent.ffor23-1.fna.fbcdn.net/v/t1.0-1/p160x160/48321983_1695828877190541_1789229374889787392_n.jpg?_nc_cat=110&_nc_oc=AQmaJegSNBXLA46iI0gMtSQNgbCNYL1XyaOCwZcvKcW-YiJxLf3ZXbzp9b9giBu4LHY&_nc_ht=scontent.ffor23-1.fna&oh=8d3220b4e5cf8fbe20dfa4acec83fead&oe=5E4BA87F" alt="Profile"/>
          <div>
            <span>Victor Alves</span>
            <small>06 Nov 2019</small>
          </div>
        </div>
        <p>Texto do post</p>
        <hr/>
        <CommentBox />
      </div>
    );
  }
}
