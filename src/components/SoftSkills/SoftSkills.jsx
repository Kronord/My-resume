import { Wrapper, Title, StyleBox, InnerBox, Skill } from './SoftSkills.styled';

export default function SoftSkills() {
  return (
    <Wrapper>
      <Title>Soft Skills</Title>
      <StyleBox>
        <InnerBox></InnerBox>
      </StyleBox>
      <ul>
        <li>
          <Skill>Approachable</Skill>
        </li>
        <li>
          <Skill>Calm</Skill>
        </li>
        <li>
          <Skill>Conscientious</Skill>
        </li>
        <li>
          <Skill>Eager to learn</Skill>
        </li>
        <li>
          <Skill>Diligent</Skill>
        </li>
        <li>
          <Skill>Open-minded</Skill>
        </li>
        <li>
          <Skill>Effective listening skills</Skill>
        </li>
        <li>
          <Skill>Quick learning skills</Skill>
        </li>
        <li>
          <Skill>
            Abillity to work effenciently both individualy and in a team
          </Skill>
        </li>
      </ul>
    </Wrapper>
  );
}
