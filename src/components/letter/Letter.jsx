import React, { Component } from 'react';
import './Letter.css';

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

class Letter extends Component {
  state = {
    letter: 'A',
  }

  setLetter = () => {
    clearInterval(this.interval);
    const index = Math.floor(Math.random() * 26);
    const letter = alphabet[index];

    this.setState({ letter });
  }

  render() {
    const { letter } = this.state;
    return (
      <div className="Letter">
          <h4>{letter}</h4>
          <button onClick={() => this.setLetter()}>
            Set Letter
          </button>
      </div>
    );
  }
}


export default Letter;
