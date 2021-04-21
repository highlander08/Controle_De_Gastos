import { GlobalStyles } from '../src/styles/global';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import Modal from 'react-modal';
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';

Modal.setAppElement('#root');

export function App() {
  const [isNewTableOpenModalOpen, SetIsNewTransactionOpenModalOpen] = useState(
    false
  );

  function handleOpenNewTransactionModal() {
    SetIsNewTransactionOpenModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    SetIsNewTransactionOpenModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header handleOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <GlobalStyles />

      <NewTransactionModal
        isOpen={isNewTableOpenModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </TransactionsProvider>
  );
}
