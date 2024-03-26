import React from 'react';
import Counter from './Counter';
import Caption from './Caption';
import './App.css';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <Caption />
          <Counter />
        </header>
      </div>
  );
}

export default App;