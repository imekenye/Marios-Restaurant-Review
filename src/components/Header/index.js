import React from 'react';

export default function Header({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Header.Logo = function HeaderLogo({ ...rest }) {
  return <Logo {...rest} />;
};
