import React, { Component } from 'react';

export default class Form extends Component {
  onGuess(e) {
    e.preventDefault();

    if (this.props.onGuess) {
      const value = this.input.value;
      this.props.onGuess(value);
    }
    this.input.value = '';
  }

  render() {
    return (
      <form className="guess-form" onSubmit={ e => this.onGuess(e) }>
        <label htmlFor="guess">Enter your guess.</label>
        <input
          id="guess"
          type="number"
          min="0"
          max="100"
          maxLength="3"
          autoComplete="off"
          ref={ input => this.input = input}
          required
        />
        <input
          type="submit"
          value="Guess"
        />
      </form>
    );
  }
}
