import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
  handleOpenNewTransactionModal: () => void;
}

export function Header({ handleOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Money Ativo" />
        <button type="button" onClick={handleOpenNewTransactionModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  );
}
