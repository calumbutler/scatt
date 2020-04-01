import React, { Component } from 'react';
import './Timer.css';
import dingmp3 from './ding.mp3';

console.log(dingmp3)

const startTime = 180;

class Timer extends Component {
  state = {
    time: startTime,
  }

  reset = () => {
    clearInterval(this.interval);

    this.setState({ time: startTime });
  }

  startTimer = () => {
    this.interval = setInterval(this.setTime, 1000)
  }

  setTime = () => {
    this.setState((state) => {
      if (state.time === 1) {
        clearInterval(this.interval);
      }
      const time = state.time - 1;
      return {
        time,
      }
    })
  }

  render() {
    const { time } = this.state;
    const minutes = Math.floor(time/60);
    const seconds = ('0' + (time % 60)).slice(-2);
    return (
      <div className="Timer">
          <h4>{`${minutes}:${seconds}`}</h4>
          { (time === startTime)
            &&
            <button onClick={() => this.startTimer()}>
              Start Timer
            </button>
          }

          { (time < startTime)
            &&
            <button onClick={() => this.reset()}>
              Reset
            </button>
          }
          { (time === 0) &&
            <div>
              <audio src={dingmp3} autoplay="true" className="audio-element">
              </audio>
            </div>
          }
      </div>
    );
  }
}


export default Timer;
