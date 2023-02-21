import styled from 'styled-components';
import Button from '../button/button.component';

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  
  @media screen and (max-width: 800px) {
    width: 40vw;
    align-items: center;
  }
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;

  @media screen and (max-width: 800px) {
    display: block;
    padding: 20vw;
  }

  @media screen and (max-width: 400px) {
    display: block;
    padding: 25vw;
  }
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
`;
