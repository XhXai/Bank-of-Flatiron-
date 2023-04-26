import React, { useState, useEffect } from "react";
import './App.css'

function Transactions() {
    const [transactions,setTransactions] = useState([]);
    useEffect(() => {
      fetch("https://name-data.onrender.com/transactions")
        .then((r) => r.json())
        .then((json) => setTransactions(json));
    }, []);

    function handleDeleteClick(id) {
        fetch(`https://transactionssite.onrender.com/transactions/${id}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then(() => console.log("deleted!"));
      }

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
            <button className="delete-btn" onClick={() => handleDeleteClick(transaction.id)}>
                  {" "}
                  Delete{" "}
                </button>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default Transactions


