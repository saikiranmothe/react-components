import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Header.css';

export default class Header extends React.PureComponent {
  renderContent() {
    return (
      <nav className="navbar">
        <div className="left-container">
          <img className="logo" src={ this.props.img } alt={ this.props.logo_alt } />
          <span className="subtitle">{ this.props.subtitle }</span>
        </div>
        <span>{this.props.children}</span>
      </nav>
    );
  }
}

//
// Header.defaultProps = {
//   img: 'defaultImg.png',
//   subtitle: 'A La Carte TV',
//   logo_alt: 'A La Carte TV',
//   children: propTypes
// }
