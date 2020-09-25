import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const Transaction = ({transaction}) => {
    
    const {deleteTransaction}=useContext(GlobalContext);
    const {updateTransaction}=useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';
    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
        <ul>
        {transaction.date}<br/>
        {transaction.text}<span style={{paddingLeft: '250px'}}>{sign}₹{Math.abs(transaction.amount)}</span><br/>
        
        
        {transaction.note}
        </ul>
      
     
      <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
      <button onClick={() => updateTransaction(transaction.id)} className="update-btn">Edit</button>
    </li>
    )
}
