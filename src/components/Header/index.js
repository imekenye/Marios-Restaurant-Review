import React from 'react';
import { Container, Logo, Title } from './styles/header';

export default function Header({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Header.Logo = function HeaderLogo({ ...rest }) {
  return <Logo {...rest} />;
};

Header.Title = function HeaderTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};
