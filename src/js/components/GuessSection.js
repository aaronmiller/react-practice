import React from 'react';

import Form from './Form';

export default function GuessSection(props) {
  return (
    <section>
      <h2 id="feedback">{props.feedback}</h2>
      <Form onGuess={props.onGuess} />
    </section>
  );
}
