import React from 'react';
import ReactDom from 'react-dom';

class TweetBox extends React.Component {
  render() {
    return (
      <div className="well clearfix">
        <textarea className="form-control"></textarea>
        <br/>
        <button className="btn btn-primary pull-right">twt</button>
      </div>
    )
  }
}

ReactDom.render(
  <TweetBox />,
  document.getElementById('container')
);
