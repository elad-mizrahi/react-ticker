/* eslint-disable no-console */
import React, {PropTypes} from 'react';

class InputMessagesPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit= this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onInputSubmit(this.element.value);
    }

  render() {
    return (
      <div className="input-messages-container">
        <form onSubmit={this.handleSubmit}>
            <textarea ref={el => this.element = el}/>
            <input type="submit" />
        </form>
      </div>
    );
  }
}

InputMessagesPage.propTypes = {
    onInputSubmit: PropTypes.func.isRequired
};


export default InputMessagesPage;
