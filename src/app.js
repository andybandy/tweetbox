import React from 'react';
import ReactDom from 'react-dom';

class TweetBox extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
    this.togglePhoto = this.togglePhoto.bind(this);
    this.remainingCharacters = this.remainingCharacters.bind(this);
    this.overflowAlert = this.overflowAlert.bind(this);

    this.state = {
      text: '',
      photoAdded: false
    };
  };

  handleChange(event) {
    this.setState({ text: event.target.value });
  };

  togglePhoto() {
    this.setState({ photoAdded: !this.state.photoAdded });
  };

  remainingCharacters() {
    if (this.state.photoAdded) {
      return 140 - 23 - this.state.text.length;
    } else {
      return 140 - this.state.text.length;
    }
  };

  overflowAlert() {
    if (this.remainingCharacters() < 0) {
      let beforeOverflowText = this.state.text.substring(140 - 10, 140);
      let overflowText = this.state.text.substring(140);

      return (
        <div className="alert alert-warning">
          <strong>Oops! The text is too long:</strong>
          &nbsp;...{beforeOverflowText}
          <strong className="bg-danger">{overflowText}</strong>
        </div>
      );
    } else {
      return '';
    }
  };

  render() {
    return (
      <div className="well clearfix">
        { this.overflowAlert() }
        <textarea className="form-control"
                  onChange={this.handleChange}>
        </textarea>
        <br/>
        <span>{this.remainingCharacters()}</span>
        <button className="btn btn-primary pull-right"
                disabled={this.remainingCharacters() === 140 || this.remainingCharacters() < 0}>twt</button>
        <button className="btn btn-default pull-right"
          onClick={this.togglePhoto}>
          {this.state.photoAdded ? 'Photo added' : 'add photo'}
        </button>
      </div>
    )
  }
}

ReactDom.render(
  <TweetBox />,
  document.getElementById('container')
);
