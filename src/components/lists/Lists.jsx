import React, { Component } from 'react';
import List from './list/List';
import listData from './data/ListsData';



class Lists extends Component {
  render() {
    return (
      <div className="Lists">
        {
          listData.map((list) => <List {...list}/>)
        }
      </div>
    );
  }
}


export default Lists;
