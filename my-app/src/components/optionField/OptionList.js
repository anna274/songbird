import React from 'react';
import Option from './Option';

class OptionList extends React.Component {
  render() {
    return (
      <ul className="optionList">
        {
          this.props.options.map((option) => {
            return <Option key={ option.id } option = { option } answerID = { this.props.answerID } onClick = { this.props.onClick }/>;
          })
        }
      </ul>
    );
  }
}

export default OptionList;