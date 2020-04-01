import React, { Component } from 'react';
import './Section.css';

class Section extends Component {
  render() {
    const { children, position } = this.props;
    return (
      <div style={{ position }} className="Section">
          { children }
      </div>
    );
  }
}


export default Section;
