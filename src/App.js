import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>

          <Route exact path="/">
            <React.Fragment>
              hello
            </React.Fragment>
          </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
