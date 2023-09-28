import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 30px auto;

  
  @media screen and (max-width: 800px) {
    display: block;
    width: 80vw;
    padding: 0;
  

    @media screen and (max-width: 400px) {
    width: 80vw;
    
  }
  }
`;
