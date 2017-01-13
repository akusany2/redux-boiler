import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import { routeCodes } from '../../routes';

export default class Menu extends Component {

  render() {
    return (
      <div className='Menu'>
          <Link to={ routeCodes.POST }>
              Post
          </Link>
          <Link to={routeCodes.CONTACT}>
              Contact
          </Link>
          <Link to='404'>
              404
          </Link>
      </div>
    );
  }
}
