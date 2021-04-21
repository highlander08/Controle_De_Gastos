import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root{
  --background: #f0f2f5;
  --red: #E62E4D;
  --green: #33cc95;
  --blue: #5429CC;
  
  --blue-light:#6933ff;
  
  --text-title:#363F5F;
  --text-body: #969CB3; 
  
  --shape: #FFFFFF;
}

*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
// font-size do desktop é 16px;
html{
  /* tela ate 1080px de largura */
  @media(max-width: 1080px){
    font-size: 93.75%; // 15px
    /* calculo = 16*0.9375 */
  }
  /* tela menor do que 720px */
  @media(max-width: 720){
    font-size: 87.5% // 14px
    /* calculo = 16*0.875 */
  }
}
/* utilizando rem para uma boa pratica 1rem */
body{
  background: var(--background);
  -webkit-font-smoothing: antialiased;
}
body, input, textarea, button{
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}
h1,h1,h3,h4,h5,h6,strong{
  font-weight:600;
}

button{
  cursor:pointer;
}
[disabled]{
  opacity: 0.6;
  cursor: not-allowed;
}

.react-modal-overlay{
  /* fundo preto e caixa centralizado */
background: rgba(0, 0 ,0, 0.5);
/* emcima de todos os outros elementos */
position: fixed;
top:0;
bottom:0;
right:0;
left:0;
/* centralizalos */
display:flex;
align-items: center;
justify-content: center;
}

.react-modal-content{
  width: 100%;
max-width: 574px;
/* se ele tiver mais de 576px ele para, mas se tiver menos ele deixa do tamanho da tela que é 100%  */

background: var(--background);
padding: 3rem;
position: relative;
border-radius: 0.24rem;
}
.react-modal-close{
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  border: 0;
  background:transparent;

  transition: filter 0.2s;

  &:hover{
    filter: brightness(0.7);
  }
}
`;
