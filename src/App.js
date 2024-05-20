import CustomWebcam from './CustomWebcam';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-4xl font-bold mb-6">Photo Drawing App</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <CustomWebcam />
        </div>
      </header>
    </div>
  );
}

export default App;