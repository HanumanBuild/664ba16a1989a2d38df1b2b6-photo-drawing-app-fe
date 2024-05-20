import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CustomWebcam from './CustomWebcam';
import './App.css';
import Feed from './Feed';
import UploadEdit from './UploadEdit';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="text-4xl font-bold mb-6">Photo Drawing App</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="text-blue-500 hover:underline">Feed</Link>
              </li>
              <li>
                <Link to="/upload" className="text-blue-500 hover:underline">Upload/Edit</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/upload">
            <UploadEdit />
          </Route>
          <Route path="/">
            <Feed />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;