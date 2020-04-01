import React, { Component } from 'react';
import './Timer.css';
import dingmp3 from 'ding.mp3';

class Timer extends Component {
  state = {
    time: 180,
  }

  reset = () => {
    clearInterval(this.interval);

    this.setState({ time: 180 });
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
          { (time === 180)
            &&
            <button onClick={() => this.startTimer()}>
              Start Timer
            </button>
          }

          { (time < 180)
            &&
            <button onClick={() => this.reset()}>
              Reset
            </button>
          }
          { (time === 0) &&
            <div>
              <audio className="audio-element">
                <source src="dingmp3"></source>
              </audio>
            </div>
          }
      </div>
    );
  }
}


export default Timer;
