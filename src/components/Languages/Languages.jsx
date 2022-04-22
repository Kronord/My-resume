import { Wrapper, Title, StyleBox, InnerBox } from './Languages.styled';

export default function Languages() { 
    return (
      <Wrapper>
        <Title>Languages</Title>
        <StyleBox>
          <InnerBox></InnerBox>
        </StyleBox>
        <ul>
          <li>
            <p>English - Pre-Intermediate</p>
          </li>
          <li>
            <p>Ukraine - Native</p>
          </li>
        </ul>
      </Wrapper>
    );
};