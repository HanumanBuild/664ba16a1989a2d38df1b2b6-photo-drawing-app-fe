import logo from './logo.svg';
import './App.css';
import CustomWebcam from './CustomWebcam';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold mb-4">Photo Drawing App</h1>
        <CustomWebcam />
      </header>
    </div>
  );
}

export default App;