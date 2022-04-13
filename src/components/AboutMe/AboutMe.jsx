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
          src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=996&t=st=1649774176~exp=1649774776~hmac=81c85cba618dce76f8d7eb589c2e0aad090eedfdc2944331baa4af50d8f4b78b"
          alt="man"
        />
      </ImgBox>
      <Name>
        Dmitrii <Surname>Shapovalov</Surname>
      </Name>
      <Spec>Junior React developer</Spec>
      <Text>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero dicta eum
        nisi reprehenderit dolore placeat cupiditate, delectus impedit eos
        repellat. Temporibus sunt, ipsum fuga eos exercitationem magni
        distinctio nihil quae aliquid molestias sit aspernatur laborum nemo, est
        asperiores nostrum labore!
      </Text>
    </Wrapper>
  );
}
