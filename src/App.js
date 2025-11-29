import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import LifeCycleClass from './components/LifeCycleClass';
import Welcome from './components/Welcome';

function App() {
  const [showLifeCycle, setShowLifeCycle] = useState(true);

  return (
    <div className="App">
      <Welcome name="Ali" />

     

       <LifeCycleClass initialCount={5} />
    </div>
  );
}

export default App;
