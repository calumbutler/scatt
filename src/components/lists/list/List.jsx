import React, { Component } from 'react';
import './List.css';

class List extends Component {
  render() {
    const { list, header } = this.props;
    return (
      <div className="List">
        <h4>{header}</h4>
        <ol>
          {
            list.map((listItem) => <li>{listItem}</li>)
          }
        </ol>
      </div>
    );
  }
}


export default List;
