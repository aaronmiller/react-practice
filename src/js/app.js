import React, { Component } from 'react';
import { render } from 'react-dom';

import Header from './components/Header';
import GuessCount from './components/GuessCount';
import GuessList from './components/GuessList';
import GuessSection from './components/GuessSection';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      guesses: [],
      feedback: 'Make your guess...',
      correctAnswer: Math.floor(Math.random() * 100) + 1
    };
  }

  newGame() {
    this.setState({
      guess: [],
      feedback: 'Make your guess...',
      correctAnswer: Math.floor(Math.random() * 100) + 1
    });
  }

  guess(guess) {
    guess = parseInt(guess, 10);

    if (isNaN(guess)) {
      this.setState({
        feedback: 'Please enter a valid number'
      });

      return;
    }

    const diff = Math.abs(guess - this.state.correctAnswer);
    let feedback;

    if (diff >= 50) {
      feedback = 'You\'re ice cold...';
    } else if (diff >= 30) {
      feedback = 'You\'re cold...';
    } else if (diff >= 15) {
      feedback = 'You\'re warm...';
    } else if (diff >= 7) {
      feedback = 'You\'re hot!';
    } else if (diff >= 1) {
      feedback = 'You\'re very hot!';
    } else {
      feedback = 'You got it!';
    }

    this.setState({
      feedback,
      guesses: [...this.state.guesses, guess]
    });
  }

  render() {
    return (
      <div className="app">
        <Header />
        <GuessSection
          feedback={ this.state.feedback }
          onGuess={(guess) => this.guess(guess)}
        />
        <GuessCount count={ this.state.guesses.length } />
        <GuessList guesses={ this.state.guesses } />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
