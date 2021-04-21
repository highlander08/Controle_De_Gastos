import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
// import { TransactionsContext } from '../../hooks/useTransactions';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useTransactions } from '../../hooks/useTransactions';

import { Container, TransactionTypeContainer, RadioBox } from './style';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  // estados sao para armazenar informaçoes que vem de inputs ou cliques do usuario
  const { createTransaction } = useTransactions();
  // = useContext(TransactionsContext);
  // typescript-eslint/no-unused-vars
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    //cria nova transação
    await createTransaction({
      title,
      amount,
      category,
      type,
    });
    // depois de cadastrar transação seta o valor como era antes e limmpa os campos para uma nova transação
    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');
    //fecha modal (caixa para de inserir os dados da transação)
    onRequestClose();
  }

  return (
    <Modal
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          placeholder="Titulo"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

        <input
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <TransactionTypeContainer>
          {/*  className={type === 'deposit' ? 'active' : ''} */}
          <RadioBox
            activeColor="green"
            isActive={type === 'deposit'}
            type="button"
            onClick={() => {
              setType('deposit');
            }}
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            activeColor="red"
            isActive={type === 'withdraw'}
            type="button"
            onClick={() => {
              setType('withdraw');
            }}
          >
            <img src={outcomeImg} alt="Saida" />
            <span>Saida</span>
          </RadioBox>
        </TransactionTypeContainer>

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
