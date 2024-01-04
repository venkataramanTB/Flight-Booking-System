import React from 'react';
import './App.css';
import SignUp from './Logins/signup';
import SignIn from './Logins/signin';
import Home from './Logins/home';
import SearchFlights from './Logins/Search';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path='/search' element={<SearchFlights />}></Route>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;