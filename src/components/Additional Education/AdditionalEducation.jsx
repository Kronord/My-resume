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

export default function AdditionalEducation() {
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
      </Wrapper>
    </>
  );
}
