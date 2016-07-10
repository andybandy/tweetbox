import React, { PropTypes } from 'react';

const propTypes = {
  maxLength: PropTypes.number.isRequired,
  photoSize: PropTypes.number.isRequired,
};

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
      return this.props.maxLength - this.props.photoSize - this.state.text.length;
    } else {
      return this.props.maxLength - this.state.text.length;
    }
  };

  overflowAlert() {
    if (this.remainingCharacters() < 0) {
      let maxLength = this.props.maxLength;
      if (this.state.photoAdded) {
        maxLength -= this.props.photoSize;
      }

      const beforeOverflowText = this.state.text.substring(maxLength - 10, maxLength);
      const overflowText = this.state.text.substring(maxLength);

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
        <span className={ this.remainingCharacters() < 0 ? "text-danger" : "" }>
          {this.remainingCharacters()}
        </span>
        <button className="btn btn-primary pull-right"
                disabled={this.remainingCharacters() === this.props.maxLength || this.remainingCharacters() < 0}>twt</button>
        <button className="btn btn-default pull-right"
          onClick={this.togglePhoto}>
          {this.state.photoAdded ? 'Photo added' : 'add photo'}
        </button>
      </div>
    )
  }
}

TweetBox.propTypes = propTypes;

export default TweetBox;
