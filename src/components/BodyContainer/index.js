import React, { Component } from 'react';

import PostBox from '../PostBox';
import './styles.css';

export default class BodyContainer extends Component {
  render() {
    return (
      <div className="body-container">
        <PostBox />
        <PostBox />
        <PostBox />
        <PostBox />
        <PostBox />
      </div>
    );
  }
}
