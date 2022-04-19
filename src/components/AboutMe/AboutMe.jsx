import image from '../../Images/AnyConv.com__IMG_2786.jpg';
import {
  Wrapper,
  ImgBox,
  StyleBox,
  Image,
  Name,
  Spec,
  Text,
  Surname,
} from './AboutMe.styled';

export default function AboutMe() {
  return (
    <Wrapper>
      <ImgBox>
        <StyleBox></StyleBox>
        <Image
          src={image}
          alt="man"
        />
      </ImgBox>
      <Name>
        Dmitrii <Surname>Shapovalov</Surname>
      </Name>
      <Spec>Junior React developer</Spec>
      <Text>
        I am a Junior React developer. In projects i used HTML, CSS, JS, React
        and familiar with technologies such as Next.js, Webpack, Typescript. I
        prefer to work with data and operations on it, but I also like to
        visualize content and translate ideas into a working web application. I
        am looking for an opportunity to realize myself as a React / JS
        developer, and help companies automate and improve their business.
      </Text>
    </Wrapper>
  );
}
