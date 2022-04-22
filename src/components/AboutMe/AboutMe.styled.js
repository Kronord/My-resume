import styled from 'styled-components';

export const Wrapper = styled.section`
  margin-bottom: 50px;
`;
export const Image = styled.img`
  width: 600px;
  height: 550px;
  margin-left: 70px;
  object-fit: cover;
`;
export const StyleBox = styled.div`
  width: 50px;
  background-color: #bb7a3b;
`;
export const ImgBox = styled.div`
  display: flex;
`;
export const Name = styled.h1`
  font-size: 60px;
  margin: 40px 0 0;
  font-weight: 700;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: #bb7a3b;
`;
export const Surname = styled.span`
  display: block;
  color: #000;
`;
export const Spec = styled.p`
  font-size: 20px;
  color: #4f4f4f;
  margin: 10px 0 40px;
  text-transform: uppercase;
`;
export const Text = styled.p`
  line-height: 30px;
  
  font-size: 16px;
  margin: 0;
  &:first-letter {
    font-size: 25px;
    color: #bb7a3b;
  }
`;
