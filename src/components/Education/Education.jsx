import { Wrapper, Title, StyleBox, InnerBox, Industry, StyleElement, Date, University, Text } from './Education.styled';

export default function Education() {
  return (
    <>
      <Wrapper>
        <Title>Education</Title>
        <StyleBox>
          <InnerBox></InnerBox>
        </StyleBox>
        <div>
          <Industry>trade and economics</Industry>
          <Date>
            <StyleElement></StyleElement>
            2017 - 2020
          </Date>
          <University>
            KYIV NATIONAL UNIVERSITY OF TRADE AND ECONOMICS
          </University>
          <Text>
            Bachelor &#124; Commodity Science and Organization of External Trade
          </Text>
        </div>
      </Wrapper>
    </>
  );
}
