import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import LifeCycleClass from './components/LifeCycleClass';
import Welcome from './components/Welcome';
import UseStateHooks from './components/UseStateHooks';

function App() {
  const [showLifeCycle, setShowLifeCycle] = useState(true);

  return (
    <div className="App">
        <UseStateHooks />
      

    </div>
  );
}

export default App;
