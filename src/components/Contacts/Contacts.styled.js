import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 50px;
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
  width: 120px;
  height: 5px;
  background-color: #bb7a3b;
`;
export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  &:last-child {
    margin-bottom: 0;
  }
`;
export const Icon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  fill: #bb7a3b;
  border: 3px solid #b8b8b8;
  margin-right: 30px;
`;
export const Link = styled.a`
  text-decoration: none;
  color: #000;
  &:hover {
    color: #bb7a3b;
  }
`;
export const Text = styled.p`
  display: inline-block;
  margin: 0;
`;
export const Svg = styled.svg`
  width: 20px;
  height: 20px;
`;