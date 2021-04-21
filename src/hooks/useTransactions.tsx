import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from 'react';
import { api } from '../services/api';

//interface necessaria para usar o map na aplicação
interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createAt: string;
}
//fazer com que o TransactionsProvider receba conteudo dentro(children) dele do tipo ReactNode(tags, components), ou seha,
interface TransactionsContextProviderProps {
  // ReacNode aceita qual quer tipo de tag e textos
  children: ReactNode;
}
type TransactionInput = Omit<Transaction, 'id' | 'createAt'>;
//
interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}
//os dados de uma nova transações tem esse tipo
// interface TransactionInput {
//   title: string;
//   amount: number;
//   type: string;
//   category: string;
// }
// herda todos os campos de Transaction excluindo o 'id' e 'createAT'
// type TransactionInput = Pick<
//   Transaction,
//   'title' | 'amount' | 'type' | 'category'
// >;

const TransactionsContext = createContext<TransactionsContextData>(
  // forçar tipagem
  {} as TransactionsContextData
);

export function TransactionsProvider({
  children,
}: TransactionsContextProviderProps) {
  //salvar no estado
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  //buscar na api
  useEffect(() => {
    api
      .get('/transactions')
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);
  // //
  // useEffect(() => {
  //   transactions(localStorage.getItem('transactions'));

  //   if (transactions) {
  //     setTransactions(transactions);
  //   }
  // }, [transactions]);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createAt: new Date(),
    });
    const { transaction } = response.data;

    //colocando uma nova transação no array
    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}
//meu hooks para noa ficar importando tanto o context
export function useTransactions() {
  const context = useContext(TransactionsContext);
  return context;
}
