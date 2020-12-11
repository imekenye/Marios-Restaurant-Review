import React from 'react';
import { Container, Name, Location, Button } from './styles/addplaceform';

export default function AddPlaceForm({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

AddPlaceForm.Name = function AddPlaceFormName({ ...rest }) {
  return <Name {...rest} />;
};
AddPlaceForm.Location = function AddPlaceFormLocation({ ...rest }) {
  return <Location {...rest} />;
};
AddPlaceForm.Button = function AddPlaceFormButton({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
};
