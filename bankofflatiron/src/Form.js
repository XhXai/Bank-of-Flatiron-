import React from 'react'
import { useState } from 'react';


function Form() {
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [amount, setAmount] = useState('')  
  const handleSubmit = (e) => {
    e.preventDefault();
    const transaction = {date, description, category, amount}
    fetch('http://localhost:3000/transactions/',{
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(transaction),
    }).then(console.log(transaction))
  }  

   return (
    <div className='Form'>
    <form>
      <label>Date</label><br></br>
      <input type="date"  value={date}
      onChange={(e) => setDate(e.target.value)}/><br></br>
    <label >Description:</label><br></br>
    <input type="text" value={description}
    onChange={(e) => setDescription(e.target.value)}/><br></br>
    <label >Category:</label><br></br>
    <input type="text" value={category}
    onChange={(e) => setCategory(e.target.value)}/><br></br>
    <label >Amount:</label><br></br>
    <input type="number" value={amount}
    onChange={(e) => setAmount(e.target.value)}/><br></br>
    <button onClick={handleSubmit}>Add Transaction</button> 
      </form>
    </div>
  );
}export default Form;