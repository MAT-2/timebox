import React from 'react';
import './App.css';
import Typewriter from 'typewriter-effect';


export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="apptitle">
          <Typewriter
            onInit={(typewriter) => {
            typewriter.typeString('Welcome to Timebox!')
            .pauseFor(2500)
            .deleteAll()
            typewriter.typeString('Start Your Productivity Below')
            .start();
            }}
          />
        </div>
      </header>
    </div>
  );
}