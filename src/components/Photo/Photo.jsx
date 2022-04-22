import image from '../../Images/AnyConv.com__IMG_2786.jpg';
import { ImgBox, StyleBox, Image } from './Photo.styled';

export default function Photo() {
    return (
<ImgBox>
  <StyleBox></StyleBox>
  <Image src={image} alt="man" />
</ImgBox>
    );
}
