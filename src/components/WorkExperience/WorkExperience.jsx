import { Wrapper, Title, StyleBox, InnerBox, Date, StyleElement, Company, Position, Text } from './WorkExperience.styled';

export default function WorkExperience() {
  return (
    <Wrapper>
      <Title>Work Experience</Title>
      <StyleBox>
        <InnerBox></InnerBox>
      </StyleBox>
      <div>
        <Date>
          <StyleElement></StyleElement>
          2021 - 2022
        </Date>
        <Company>trading food company &#34;Prodline&#34;</Company>
        <Position>category manager assistant</Position>
        <ul>
          <li>
            <p>purchase of goods for retail stores</p>
          </li>
          <li>
            <p>control and change in prices for goods</p>
          </li>
          <li>
            <p>search for new suppliers</p>
          </li>
          <li>
            <p>document management with suppliers</p>
          </li>
        </ul>
        <Text>
          Achievements: signing of five profitable contracts with new suppliers
          and increase of monthly turnover by 3%
        </Text>
      </div>
    </Wrapper>
  );
}
