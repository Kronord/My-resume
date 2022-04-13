import { Wrapper, Title, StyleBox, InnerBox, Skill } from './TechSkills.styled';

export default function TechSkills() {
  return (
    <Wrapper>
      <Title>Tech Skills</Title>
      <StyleBox>
        <InnerBox></InnerBox>
      </StyleBox>
      <ul>
        <li>
          <Skill>HTML5/CSS3/SASS</Skill>
        </li>
        <li>
          <Skill>GIT</Skill>
        </li>
        <li>
          <Skill>JavaScript</Skill>
        </li>
        <li>
          <Skill>React</Skill>
        </li>
        <li>
          <Skill>Redux</Skill>
        </li>
        <li>
          <Skill>Webpack</Skill>
        </li>
        <li>
          <Skill>Parcel</Skill>
        </li>
        <li>
          <Skill>Bootstrap</Skill>
        </li>
        <li>
          <Skill>Npm</Skill>
        </li>
        <li>
          <Skill>REST API</Skill>
        </li>
        <li>
          <Skill>Axios</Skill>
        </li>
        <li>
          <Skill>Styled Components</Skill>
        </li>
      </ul>
    </Wrapper>
  );
}
