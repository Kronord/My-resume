import { Wrapper, Name, Spec, Text, Surname } from './AboutMe.styled';

export function AboutMe() {
  return (
    <Wrapper>
      <Name>
        Dmitrii <Surname>Shapovalov</Surname>
      </Name>
      <Spec>Junior Full Stack developer</Spec>
      <Text>
        I am a Junior Full Stack developer. In projects i used HTML, CSS, JS,
        React and familiar with technologies such as Next.js, Webpack,
        Typescript(it's part of the Front-End). To write the Back-End part I use
        Node.js and technologies related to it such as: Express, MongoDB,
        Mongoose, Docker, etc. I prefer to work with data and operations on it,
        but I also like to visualize content and translate ideas into a working
        web application. I am looking for an opportunity to realize myself as a
        React / Full Stack developer, and help companies automate and improve
        their business.
      </Text>
    </Wrapper>
  );
}

export function AboutMeUA() {
  return (
    <Wrapper>
      <Name>
        Дмитрій <Surname>Шаповалов</Surname>
      </Name>
      <Spec>Junior Full Stack developer</Spec>
      <Text>
        Я Junior Full Stack розробник. У проектах я використовувую HTML, CSS,
        JS, React і знайомий з такими технологіями, як Next.js, Webpack,
        Typescript (це частина Front-End). Для написання Back-End частини я
        використовую Node.js та пов’язані з ним технології, такі як: Express,
        MongoDB, Mongoose, Docker, і т.д. Я віддаю перевагу роботі з даними та
        операціями з ними, але мені також подобається візуалізувати контент та
        втілюватии ідеї в робочу веб-програму.Я шукаю можливість реалізувати
        себе як React / Full Stack розробник і допомагати компаніям
        автоматизувати та вдосконалювати свій бізнес.
      </Text>
    </Wrapper>
  );
}
