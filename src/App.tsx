import React from 'react';
import { Counter } from './Components/Counter/Counter';

import './App.scss';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Counter />
    </div>
  );
};
