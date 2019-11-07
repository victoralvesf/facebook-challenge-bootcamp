import React, { Component } from 'react';

import './styles.css';

export default class CommentBox extends Component {
  render() {
    return (
      <div className="comment-box">
        <img src="https://scontent.ffor23-1.fna.fbcdn.net/v/t1.0-1/p50x50/72840754_495131424414877_4199812579024961536_o.jpg?_nc_cat=107&_nc_oc=AQkt2quPjRFl4nDiD-LqTfqnqD0nQUiLluTQRjApQ0uU1KmpMauVyzKOUN1K1eL_liE&_nc_ht=scontent.ffor23-1.fna&oh=4f0775d412f6015b575a550e3de683a6&oe=5E5AAB1B" alt="Profile"/>
        <div>
          <div className="comment-container">
            <span>
              <span className="username">Kyure </span>
              Vou postar esse vídeo aqui tb pq ele ficou mt bom pra n ser postado.
            </span>
          </div>
          <div className="comment-options">
            <button>Curtir</button>
            <span>&bull;</span>
            <button>Responder</button>
          </div>
        </div>
      </div>
    );
  }
}
