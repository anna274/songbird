import React from 'react';
import Category from './Category';
import '../App.css';

class CategoryList extends React.Component {
  render() {
    return (
      <div className="categoryList">
        {
          this.props.categories.map((category) => {
            const isCurrent = category.id === this.props.currentCategory;
            return <Category title={ category.title } isCurrent = { isCurrent } key={ category.id }/>
          })
        }
      </div>
    );
  }
}

export default CategoryList;