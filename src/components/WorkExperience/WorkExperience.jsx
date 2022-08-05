import { Wrapper, Title, StyleBox, InnerBox, Date, StyleElement, Company, Position, Text } from './WorkExperience.styled';

export function WorkExperience() {
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
        <Position>category manager assistant</Position>
        <Company>trading food company &#34;Prodline&#34;</Company>
        <ul>
          <li>
            <Text>purchase of goods for retail stores</Text>
          </li>
          <li>
            <Text>control and change in prices for goods</Text>
          </li>
          <li>
            <Text>search for new suppliers</Text>
          </li>
          <li>
            <Text>document management with suppliers</Text>
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

export function WorkExperienceUA() {
  return (
    <Wrapper>
      <Title>Досвід Роботи</Title>
      <StyleBox>
        <InnerBox></InnerBox>
      </StyleBox>
      <div>
        <Date>
          <StyleElement></StyleElement>
          2021 - 2022
        </Date>
        <Position>помічник категорійного менеджера</Position>
        <Company>Продуктова компанія &#34;Prodline&#34;</Company>
        <ul>
          <li>
            <Text>займався закупкою товарів для мережі магазинів</Text>
          </li>
          <li>
            <Text>контролював та встановлював ціни на продукцію своєї категорії</Text>
          </li>
          <li>
            <Text>займався пошуком нових постачальників</Text>
          </li>
          <li>
            <Text>проводив документообіг з постачальниками</Text>
          </li>
        </ul>
        <Text>
          Досягнення: підписання п'яти вигідних контрактів з новими постачальниками
          та збільшення місячного товарообігу на 3%
        </Text>
      </div>
    </Wrapper>
  );
}
