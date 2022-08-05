import { Wrapper, Title, StyleBox, InnerBox } from './Languages.styled';

export function Languages() { 
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

export function LanguagesUA() { 
    return (
      <Wrapper>
        <Title>Володіння мовами</Title>
        <StyleBox>
          <InnerBox></InnerBox>
        </StyleBox>
        <ul>
          <li>
            <p>Англійська - Pre-Intermediate</p>
          </li>
          <li>
            <p>Українська - Native</p>
          </li>
        </ul>
      </Wrapper>
    );
};