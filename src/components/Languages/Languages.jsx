import { Wrapper, Title, StyleBox, InnerBox, Text } from './Languages.styled';

export default function Languages() { 
    return (
      <Wrapper>
        <Title>Languages</Title>
        <StyleBox>
          <InnerBox></InnerBox>
        </StyleBox>
        <ul>
          <li>
            <Text>English - Pre-Intermediate</Text>
          </li>
          <li>
            <Text>Ukraine - Native</Text>
          </li>
        </ul>
      </Wrapper>
    );
};