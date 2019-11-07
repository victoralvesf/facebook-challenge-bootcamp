import React, { Component } from 'react';

import Account from '../../assets/images/account.svg';
import './styles.css';

export default class Header extends Component {
  render() {
    return (
      <div className="app-header">
          <span className="logo">facebook</span>
          <div className="account">
              <span>Meu perfil</span>
              <img src={Account} alt="Conta" className="icon"/>
          </div>
      </div>
    );
  }
}

