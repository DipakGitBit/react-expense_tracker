import React from 'react';
import { Header } from './components/Header'; 
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import './App.css';

function App() {
  return (
    <GlobalProvider>
     <Header/>
     <div className="container left">
     <div class="centered">
     <AddTransaction/>
     </div>
     </div>

     <div className="container right">
      <div class="centered">
       <TransactionList/>
     </div> 
     </div>

    </GlobalProvider>
  );
}

export default App;
