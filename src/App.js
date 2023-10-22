import React from 'react';
import './App.css';
import EmailList from './components/emaillist';
import EmailDetails from './components/emaildetails';

function App() {

  return (
    <div className="App">
      <EmailList />
      <EmailDetails />
    </div>
  );
}

export default App;
