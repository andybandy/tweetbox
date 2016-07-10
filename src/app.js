import React from 'react';
import ReactDom from 'react-dom';
import TweetBox from './tweetbox';

ReactDom.render(
  <TweetBox maxLength={140} photoSize={23}/>,
  document.getElementById('container')
);
