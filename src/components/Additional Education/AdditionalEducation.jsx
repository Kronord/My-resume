import {
  Wrapper,
  Title,
  StyleBox,
  InnerBox,
  StyleElement,
  Date,
  University,
  Text,
} from './AdditionalEducation.styled';

export function AdditionalEducation() {
  return (
    <>
      <Wrapper>
        <Title>Additional Education</Title>
        <StyleBox>
          <InnerBox></InnerBox>
        </StyleBox>
        <div>
          <University>IT Schooll GoIT(Kyiv)</University>
          <Date>
            <StyleElement></StyleElement>
            2021 - 2022
          </Date>
          <Text>Full Stack Developer</Text>
        </div>
        <div>
          <University>SoftServe Academy(Kyiv)</University>
          <Date>
            <StyleElement></StyleElement>
            04/2025 - 06/2025
          </Date>
          <Text>Practical React course</Text>
        </div>
      </Wrapper>
    </>
  );
}

export function AdditionalEducationUA() {
  return (
    <>
      <Wrapper>
        <Title>Додаткова Освіта</Title>
        <StyleBox>
          <InnerBox></InnerBox>
        </StyleBox>
        <div>
          <University>IT Школа GoIT(Київ)</University>
          <Date>
            <StyleElement></StyleElement>
            2021 - 2022
          </Date>
          <Text>Full Stack Developer</Text>
        </div>
        <div>
          <University>SoftServe Академія(Київ)</University>
          <Date>
            <StyleElement></StyleElement>
            04/2025 - 06/2025
          </Date>
          <Text>Practical React course</Text>
        </div>
      </Wrapper>
    </>
  );
}
