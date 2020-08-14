import React from 'react';

class Category extends React.Component {
  render() {
    const classes = ['category'];
    if(this.props.isCurrent) {
      classes.push('category__current');
    }
    return (
      <div className={ classes.join(' ') }>
        { this.props.title }
      </div>
    );
  }
}

export default Category;