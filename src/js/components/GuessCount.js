import React from 'react';

export default function GuessCount(props) {
  return (
    <p>Guess # <span id="guess-count">{props.count}</span></p>
  );
}
