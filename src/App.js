import './App.css';
import Counter from './components/Counter';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <h1 id="message">Bonjour, Ali!</h1>
      <Welcome name="Ali" />; 

      <Counter />
    </div>
  );
}

export default App;
