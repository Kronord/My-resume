import {
  Wrapper,
  Title,
  StyleBox,
  InnerBox,
  List,
  Item,
  Link,
  Text,
} from './Contacts.styled';

export function Contacts() {
  return (
    <Wrapper>
      <Title>Contacts</Title>
      <StyleBox>
        <InnerBox></InnerBox>
      </StyleBox>
      <List>
        <Item>
          <Link href="tel:+380674177642">067-417-76-42</Link>
        </Item>
        <Item>
          {/* <Icon>
            <Svg>
              <use href={`${Icons}#icon-mail`} width="20" height="20"></use>
            </Svg>
          </Icon> */}
          <Link href="mailTo:fedishyn2@gmail.com">
            boxfor.working.letters@gmail.com
          </Link>
        </Item>
        <Item>
          {/* <Icon>
            <Svg>
              <use href={`${Icons}#icon-telegram`} width="20" height="20"></use>
            </Svg>
          </Icon> */}
          <Link href="https://t.me/Kronord">Telegram</Link>
        </Item>
        <Item>
          {/* <Icon>
            <Svg>
              <use href={`${Icons}#icon-linkedin`} width="20" height="20"></use>
            </Svg>
          </Icon> */}
          <Link href="https://www.linkedin.com/in/%D0%B4%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9-%D1%88%D0%B0%D0%BF%D0%BE%D0%B2%D0%B0%D0%BB%D0%BE%D0%B2-b58756205/">
            LinkedIn
          </Link>
        </Item>
        <Item>
          {/* <Icon>
            <Svg>
              <use href={`${Icons}#icon-github`} width="20" height="20"></use>
            </Svg>
          </Icon> */}
          <Link href="https://github.com/Kronord">GitHub</Link>
        </Item>
        <Item>
          {/* <Icon>
            <Svg>
              <use href={`${Icons}#icon-address`} width="20" height="20"></use>
            </Svg>
          </Icon> */}
          <Text>Ukraine, Kiev</Text>
        </Item>
      </List>
    </Wrapper>
  );
}

export function ContactsUA() {
  return (
    <Wrapper>
      <Title>Контакти</Title>
      <StyleBox>
        <InnerBox></InnerBox>
      </StyleBox>
      <List>
        <Item>
          <Link href="tel:+380674177642">067-417-76-42</Link>
        </Item>
        <Item>
          {/* <Icon>
            <Svg>
              <use href={`${Icons}#icon-mail`} width="20" height="20"></use>
            </Svg>
          </Icon> */}
          <Link href="mailTo:fedishyn2@gmail.com">
            boxfor.working.letters@gmail.com
          </Link>
        </Item>
        <Item>
          {/* <Icon>
            <Svg>
              <use href={`${Icons}#icon-telegram`} width="20" height="20"></use>
            </Svg>
          </Icon> */}
          <Link href="https://t.me/Kronord">Telegram</Link>
        </Item>
        <Item>
          {/* <Icon>
            <Svg>
              <use href={`${Icons}#icon-linkedin`} width="20" height="20"></use>
            </Svg>
          </Icon> */}
          <Link href="https://www.linkedin.com/in/%D0%B4%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9-%D1%88%D0%B0%D0%BF%D0%BE%D0%B2%D0%B0%D0%BB%D0%BE%D0%B2-b58756205/">
            LinkedIn
          </Link>
        </Item>
        <Item>
          {/* <Icon>
            <Svg>
              <use href={`${Icons}#icon-github`} width="20" height="20"></use>
            </Svg>
          </Icon> */}
          <Link href="https://github.com/Kronord">GitHub</Link>
        </Item>
        <Item>
          {/* <Icon>
            <Svg>
              <use href={`${Icons}#icon-address`} width="20" height="20"></use>
            </Svg>
          </Icon> */}
          <Text>Україна, Київ</Text>
        </Item>
      </List>
    </Wrapper>
  );
}
