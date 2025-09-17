import { Wrapper, Name, Spec, Text, Surname } from './AboutMe.styled';

export function AboutMe() {
  return (
    <Wrapper>
      <Name>
        Dmitrii <Surname>Shapovalov</Surname>
      </Name>
      <Spec>Junior Full Stack developer</Spec>
      {/* <Text>
        I am an aspiring cybersecurity specialist with a background in frontend
        development. I am eager to apply my technical skills and problem-solving
        mindset to the field of cybersecurity, while actively learning and
        building practical knowledge in areas such as network security, incident
        response, and threat analysis.
      </Text> */}
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
      {/* <Text>
        Я початківець у сфері кібербезпеки з досвідом фронтенд-розробки. Маю
        бажання застосувати свої технічні навички та аналітичне мислення у сфері
        кібербезпеки, активно навчаючись і розвиваючи практичні знання в таких
        напрямках, як мережева безпека, реагування на інциденти та аналіз
        загроз.
      </Text> */}
    </Wrapper>
  );
}
