// import { useContext } from 'react';
import { useTransactions } from '../../hooks/useTransactions';
// import { TransactionsContext } from '../../hooks/useTransactions';
import { Container } from './styles';

export function TransactionsTable() {
  // consumindo dados do contexto == acesso as transações (transactions==dados==estado) usando contextApi
  const { transactions } = useTransactions();
  // = useContext(TransactionsContext);
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo:</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {new Intl.DateTimeFormat('pt-BR').format(
                    new Date(transaction.createAt)
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}
