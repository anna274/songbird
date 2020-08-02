import React from 'react';
import '../App.css';
import Option from './Option';

class OptionList extends React.Component {
  render() {
    return (
      <ul className="optionList">
        {
          this.props.options.map((option) => {
            return <Option key={ option.id } option = { option }/>;
          })
        }
      </ul>
    );
  }
}

export default OptionList;