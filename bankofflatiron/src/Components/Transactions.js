import React, { useState, useEffect } from "react";
import './App.css'

function Transactions() {
    const [transactions,setTransactions] = useState([]);
    useEffect(() => {
      fetch("https://name-data.onrender.com/transactions")
        .then((r) => r.json())
        .then((json) => setTransactions(json));
    }, []);

    const handleDelete = (id) => {
        fetch(`https://name-data.onrender.com/transactions/${id}`, {
          method: 'DELETE'
        })
          .then(() => {
            setTransactions(transactions.filter(transaction => transaction.id !== id));
          })
          .catch(error => console.error(error));
      };

  return (
    <div className="App">
      <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
          <th>DELETE TRANSACTION</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <tr key={transaction.id}>
            <td>{transaction.id}</td>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
            <td><button id='btn' onClick={() => handleDelete(transaction.id)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default Transactions


