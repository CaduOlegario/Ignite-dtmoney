
import React, { useState } from "react";
import Modal from 'react-modal';
import { DashBoard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles.global";
import { NewTransactionModal } from './components/NewTransactionModal';


Modal.setAppElement('#root')


export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransaction() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransaction() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransaction}/>

      <DashBoard />

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransaction}
      />
      
      <GlobalStyle />
    </>
  );
}

