import React from 'react';
import Section from './components/section/Section';
import Timer from './components/timer/Timer';
import Letter from './components/letter/Letter';
import Lists from './components/lists/Lists';
import './App.css';


function App() {
  return (
    <div className="App">
      <Section position="relative">
         <Letter />
      </Section>
      <Section position="relative">
         <Timer />
      </Section>
       <Section position="relative">
          <Lists />
       </Section>
    </div>
  );
}

export default App;
