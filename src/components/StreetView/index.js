import React from 'react';
import { Image, Container } from './styles/streetview';

export default function StreetView({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

StreetView.Image = function StreetViewImage({ ...rest }) {
  return <Image {...rest} />;
};
