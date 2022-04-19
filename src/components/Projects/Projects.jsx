import {
  Title,
  Wrapper,
  StyleBox,
  InnerBox,
  Name,
  Link,
    Text,
  TextStyle,
  List
} from './Projects.styled';

export default function Projects() {
  return (
    <Wrapper>
      <Title>Project Experience</Title>
      <StyleBox>
        <InnerBox></InnerBox>
      </StyleBox>
      <List>
        <li>
          <Name>Team project - Ice Cream</Name>
          <Link href="https://github.com/in-love-with-anime/ice-cream">
            Repository
          </Link>
          <Link href="https://in-love-with-anime.github.io/ice-cream/">
            Live Page
          </Link>
          <Text>
            The following technologies were used in the project:
            <TextStyle>[HTML, CSS, SASS, Parcel].</TextStyle> My part work of
            project: Slider and modal window "Franchise".
          </Text>
        </li>
        <li>
          <Name>Team project - Filmoteka</Name>
          <Link href="https://github.com/TeslaIh/Filmoteka_team_Just_Superheroes">
            Repository
          </Link>
          <Link href="https://teslaih.github.io/Filmoteka_team_Just_Superheroes/#footer">
            Live Page
          </Link>
          <Text>
            The following technologies were used in the project:
            <TextStyle>
              [HTML, CSS, SASS, JavaScript, Axios, REST API, Parcel, Handlebars].
            </TextStyle>
            My part work of project: Gallery films (work with all requests to the
            backend server, pagination, input element for search movies and
            sending request on searched movie, render movie cards on Home Page).
          </Text>
        </li>
      </List>
    </Wrapper>
  );
}
