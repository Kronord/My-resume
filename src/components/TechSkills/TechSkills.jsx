import { Wrapper, Title, StyleBox, InnerBox } from './TechSkills.styled';

export default function TechSkills() {
  return (
    <Wrapper>
      <Title>Tech Skills</Title>
      <StyleBox>
        <InnerBox></InnerBox>
      </StyleBox>
      <ul>
        <li>
          <p>HTML5/CSS3/SASS</p>
        </li>
        <li>
          <p>GIT</p>
        </li>
        <li>
          <p>JavaScript</p>
        </li>
        <li>
          <p>React</p>
        </li>
        <li>
          <p>Redux</p>
        </li>
        <li>
          <p>Webpack</p>
        </li>
        <li>
          <p>Parcel</p>
        </li>
        <li>
          <p>Bootstrap</p>
        </li>
        <li>
          <p>Npm</p>
        </li>
        <li>
          <p>REST API</p>
        </li>
        <li>
          <p>Axios</p>
        </li>
        <li>
          <p>Styled Components</p>
        </li>
      </ul>
    </Wrapper>
  );
}
