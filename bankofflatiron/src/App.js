import React from 'react'
import Form from './Form'
import Transactions from './Transactions';
import './App.css'

function App(){
  return(
    <div className='App'>
      <h1>Expense Tracker</h1>
      <Transactions />
      <Form />
    </div>
  );
}

export default App
