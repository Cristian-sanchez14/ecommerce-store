import styled from 'styled-components';

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  

  h2 {
    margin: 10px 0;
  }

  @media screen and (max-width: 800px) {
    display: block;
    width: 80vw;

    Button {
      padding: 0px
      
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

`;
