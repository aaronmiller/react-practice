import React, { Component } from 'react';

import Form from './Form';
import GuessCount from './GuessCount';

export default class GuessContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="guess-container">
        <Form />
        <GuessCount count={ this.state.guess.length } />
      </div>
    );
  }
}
