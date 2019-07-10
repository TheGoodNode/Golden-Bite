import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './blogItemLg.css';

class BlogAllArticlesButton extends Component {
  state = {};
  render() {
    return (
      <div className='blogs__button'>
        <a href='#'>View All Articles</a>
      </div>
    );
  }
}

export default BlogAllArticlesButton;
