import React from 'react';
import { Container, Title, Icon } from './styles/filter';

export default function Filter({ children, ...rest }) {
  return <Container>{children}</Container>;
}

Filter.Title = function FilterTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Filter.Icon = function FilterIcon({ ...rest }) {
  return <Icon {...rest} />;
};
