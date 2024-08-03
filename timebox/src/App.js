import React from 'react';
import './App.css';
import Title from './components/Title';
import WorkArea from './components/Timebox/WorkArea';

export default function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
          <Title/>
          <WorkArea/>
      </header>
    </div>
    </>
  );
}