import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 1500px;
  margin: ${props => props.bottom ? '0 auto 50px' : '0 auto'};
`;
export const AboutBox = styled.div`
  width: 1000px;
`;
export const ContactsBox = styled.div`
  width: 500px;
  padding: 30px;
  background-color: #bb7a3b26;
`;
