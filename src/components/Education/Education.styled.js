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
  font-weght: 700;
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
export const Industry = styled.p`
  text-transform: uppercase;
  color: #4F4F4F;
`;
export const StyleElement = styled.span`
  width: 30px;
  height: 3px;
  margin-right: 20px;
  background-color: #ebd7c4;
`;

export const Date = styled.span`
  display: flex;
  align-items: center;
  color: #999999;
`;

export const University = styled.p`
  font-weight: 700;
  color: #bb7a3b;
`;
export const Text = styled.p`
  line-height: 30px;
  margin-bottom: 0;
`;
