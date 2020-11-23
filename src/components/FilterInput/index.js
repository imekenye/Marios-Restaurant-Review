import React from 'react';
import {
  Container,
  Checkbox,
  CheckboxLabel,
  Button,
} from './styles/filterinput';

export default function FilterInput({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

FilterInput.Checkbox = function FilterInputCheckbox({ ...rest }) {
  return <Checkbox {...rest} />;
};

FilterInput.CheckboxLabel = function FilterInputCheckboxLabel({
  children,
  ...rest
}) {
  return <CheckboxLabel {...rest}>{children}</CheckboxLabel>;
};

FilterInput.Button = function FilterInputButtonx({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
};
