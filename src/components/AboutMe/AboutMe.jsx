import {
  Wrapper,
  Name,
  Spec,
  Text,
  Surname,
} from './AboutMe.styled';

export default function AboutMe() {
  return (
    <Wrapper>
      <Name>
        Dmitrii <Surname>Shapovalov</Surname>
      </Name>
      <Spec>Junior Full Stack developer</Spec>
      <Text>
        I am a Junior Full Stack developer. In projects i used HTML, CSS, JS,
        React and familiar with technologies such as Next.js, Webpack,
        Typescript (it's part of the Front-End). To write the Back-End part I use Node.js and
        technologies related to it such as: Express, MongoDB, Mongoose, Docker,
        etc. I prefer to work with data and operations on it, but I also like to
        visualize content and translate ideas into a working web application. I
        am looking for an opportunity to realize myself as a React / Full Stack
        developer, and help companies automate and improve their business.
      </Text>
    </Wrapper>
  );
}
