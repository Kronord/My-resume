import { Wrapper, Title, StyleBox, InnerBox, Industry, StyleElement, Date, University, Text } from './Education.styled';

export function Education() {
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

export function EducationUA() {
  return (
    <>
      <Wrapper>
        <Title>Освіта</Title>
        <StyleBox>
          <InnerBox></InnerBox>
        </StyleBox>
        <div>
          <Industry>торгівля та економіка</Industry>
          <Date>
            <StyleElement></StyleElement>
            2017 - 2020
          </Date>
          <University>
            КИЇВСЬКИЙ НАЦІОНАЛЬНИЙ ТОРГІВЕЛЬНО ЕКОНОМІЧНИЙ УНІВЕРСИТЕТ
          </University>
          <Text>
            Бакалавр &#124; Товарознавство та організація зовнішньої торгівлі
          </Text>
        </div>
      </Wrapper>
    </>
  );
}
