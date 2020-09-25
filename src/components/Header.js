import React, { useContext } from 'react';
import {GlobalContext} from '../context/GlobalState';

export const Header = () => {

    const {transactions}=useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(0);

    return (
        <h2>
            MY EXPENSES<span style={{paddingLeft: '500px'}}>Total</span><span style={{paddingLeft: '30px'}}>{total}</span>
        </h2>
    )
}
