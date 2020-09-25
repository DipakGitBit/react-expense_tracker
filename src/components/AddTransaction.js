import React, {useState,useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';

export const AddTransaction = () => {
    const [text,setText]=useState('');
    const [amount,setAmount]=useState();
    const [note,setNote]=useState('');
    const [date,setDate]=useState();


    const {addTransaction}=useContext(GlobalContext);


    const onSubmit=e=>{
      e.preventDefault();

      const newTransaction={
        id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
      note,
      date
      }
      addTransaction(newTransaction);
    }



    return (
        <>
    
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text"></label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)}
          placeholder="Title" />
        </div>

        <div className="form-control">
          <label htmlFor="amount"></label>
            
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount" />
        </div>

        <div className="form-control">
          <label htmlFor="note"></label>
          <input type="text" value={note} onChange={(e) => setNote(e.target.value)}
          placeholder="Note" />
        </div>

        <div className="form-control">
          <label htmlFor="date"></label>
          <input type="text" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Date"/>
        </div>

        <button className="btn">+ ADD EXPENSE</button>
      </form>
        </>
    )
}
