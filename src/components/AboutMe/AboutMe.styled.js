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
  font-size: 70px;
  margin: 40px 0 0;
  font-weight: 900;
  letter-spacing: 20px;
  text-transform: uppercase;
  color: #bb7a3b;
`;
export const Surname = styled.span`
  display: block;
  font-weight: 700;
  font-size: 50px;
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
  letter-spacing: 2px;
  font-size: 18px;
  margin: 0;
  &:first-letter {
    font-size: 30px;
    color: #bb7a3b;
  }
`;
