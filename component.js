import React from 'react';

export default class Comp extends React.Component {
  render () {
  	return (
      <div>
        <h2>Hi There!</h2>
        <img src={"./photo.jpg"} width={"100px"}/>
        <hr/>
      </div>
  	);
  }
}