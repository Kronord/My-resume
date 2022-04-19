import styled from 'styled-components';

export const Wrapper = styled.section`
  margin-bottom: 50px;
  &:last-child {
    margin-bottom: 0;
  }
`;
export const Title = styled.h2`
  font-size: 30px;
  letter-spacing: 5px;
  margin: 0 0 15px;
  font-weght: bold;
  text-transform: uppercase;
`;
export const StyleBox = styled.div`
  height: 5px;
  width: 100%;
  background-color: #bb7a3b4d;
  margin-bottom: 40px;
`;
export const InnerBox = styled.div`
  width: 200px;
  height: 5px;
  background-color: #bb7a3b;
`;
export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 3px;
  color: #bb7a3b;
`;
export const Link = styled.a`
  text-decoration: none;
  font-size: 18px;
  margin-right: 30px;
  color: #999999;
  &:hover {
    color: #bb7a3b;
  }
  &:last-child {
      margin: 0;
  }
`;
export const Text = styled.p`
  line-height: 30px;
  letter-spacing: 2px;
`;
export const TextStyle = styled.span`
  display: block;
  color: #bb7a3b;
`;
export const List = styled.ul`
  margin: 0;
`;