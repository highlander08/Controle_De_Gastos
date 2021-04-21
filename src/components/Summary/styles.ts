import styled from 'styled-components';

export const Container = styled.div`
  /* 3 itens do mesmo tamanho um do lado do outro */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;

  div {
    background: var(--shape);
    padding: 1.5rem 3rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    strong {
      display: flex;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }
    &.highlight-background {
      background: var(--green);
      color: #ffff;
    }
  }
`;
