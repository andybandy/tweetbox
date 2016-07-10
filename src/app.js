import React from 'react';
import ReactDom from 'react-dom';

class TweetBox extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      text: ''
    };
  };

  handleChange(event) {
    this.setState({ text: event.target.value });
  };

  render() {
    return (
      <div className="well clearfix">
        <textarea className="form-control"
                  onChange={this.handleChange}>
        </textarea>
        <span>{this.state.text.length}</span>
        <button className="btn btn-primary pull-right"
                disabled={this.state.text.length === 0}>twt</button>
      </div>
    )
  }
}

ReactDom.render(
  <TweetBox />,
  document.getElementById('container')
);
