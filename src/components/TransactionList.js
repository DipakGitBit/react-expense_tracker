import React, {useContext} from 'react';
import {Transaction} from './Transaction';
import {GlobalContext} from '../context/GlobalState';

export const TransactionList = () => {
  const {transactions}=useContext(GlobalContext);


    return (
        <>

      <ul className="list">
      {transactions.map(transaction=>(<Transaction Key={transaction.id} transaction={transaction}/>))}
        
      </ul>
        </>
    )
}
