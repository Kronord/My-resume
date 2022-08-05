import {
  Title,
  Wrapper,
  StyleBox,
  InnerBox,
  Name,
  Link,
  Text,
  TextStyle,
  List,
} from './Projects.styled';

export function ProjectsUA() {
  return (
    <Wrapper>
      <Title>Проектний досвід</Title>
      <StyleBox>
        <InnerBox></InnerBox>
      </StyleBox>
      <List>
        <li>
          <Name>Командний проект - Ice Cream</Name>
          <Link href="https://github.com/in-love-with-anime/ice-cream">
            Репозиторій
          </Link>
          <Link href="https://in-love-with-anime.github.io/ice-cream/">
            Жива Сторінка
          </Link>
          <Text>
            У проекті були використані такі технології:
            <TextStyle>[HTML, CSS, SASS, Parcel].</TextStyle> Моя частина роботи
            на проекті: Слайдер та модальне вікно "Franchise".
          </Text>
        </li>
        <li>
          <Name>Командний проект - Filmoteka</Name>
          <Link href="https://github.com/TeslaIh/Filmoteka_team_Just_Superheroes">
            Репозиторій
          </Link>
          <Link href="https://teslaih.github.io/Filmoteka_team_Just_Superheroes/#footer">
            Жива Сторінка
          </Link>
          <Text>
            У проекті були використані такі технології:
            <TextStyle>
              [HTML, CSS, SASS, JavaScript, Axios, REST API, Parcel,
              Handlebars].
            </TextStyle>
            Моя частина роботи на проекті: Галерея фільмів (Робота з усіма
            запитам до бекенд серверу, пагинація, інпут для пошуку фільмів та
            надсилання запиту, рендер карток фільмів на головній сторінці).
          </Text>
        </li>
        <li>
          <Name>Командний проект - calorie calculator</Name>
          <Link href="https://github.com/fragile-chamomile/weightbusters-backend">
            Репозиторій(Тільки Back-end частина)
          </Link>
          <Link href="https://soft-chaja-5962b0.netlify.app/">
            Жива Сторінка
          </Link>
          <Link href="https://weightbusters-api.herokuapp.com/api-docs/#/">
            Swagger
          </Link>
          <Text>
            У проекті були використані такі технології та бібліотеки:
            <TextStyle>
              [Webpack, React, JavaScript, Redux, Styled-Components, MUI, Formik
              etc.] (Front-End частина).
            </TextStyle>
            <TextStyle>
              [Node.js, Express, Mongoose, MongoDB, Heroku, Swagger(документація
              запитів для Front-End), etc.] (Back-End частина).
            </TextStyle>
            Моя частина роботи на проекті: на цьому проекті, я розробляв
            Back-End частину додатку, а саме, я обробляв Front-End запити для
            пошуку продутку за його назвою. Також написав частину докумаентації
            на Swagger.
          </Text>
        </li>
      </List>
    </Wrapper>
  );
}

export function Projects() {
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
              [HTML, CSS, SASS, JavaScript, Axios, REST API, Parcel,
              Handlebars].
            </TextStyle>
            My part work of project: Gallery films (work with all requests to
            the backend server, pagination, input element for search movies and
            sending request on searched movie, render movie cards on Home Page).
          </Text>
        </li>
        <li>
          <Name>Team project - calorie calculator</Name>
          <Link href="https://github.com/fragile-chamomile/weightbusters-backend">
            Repository(Only Back-end part)
          </Link>
          <Link href="https://soft-chaja-5962b0.netlify.app/">Live Page</Link>
          <Link href="https://weightbusters-api.herokuapp.com/api-docs/#/">
            Swagger
          </Link>
          <Text>
            The following technologies and libraries were used in the project:
            <TextStyle>
              [Webpack, React, JavaScript, Redux, Styled-Components, MUI, Formik
              etc.] (Front-End part).
            </TextStyle>
            <TextStyle>
              [Node.js, Express, Mongoose, MongoDB, Heroku,
              Swagger(documentation for Front-End), etc.] (Back-End part).
            </TextStyle>
            My part work of project: in this project, I was developing the
            Back-End part of the application, namely, I was processing the
            Front-End request for a product by the name of this product. I also
            wrote part of the documentation for Swagger.
          </Text>
        </li>
      </List>
    </Wrapper>
  );
}
