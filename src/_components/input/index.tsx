import * as React from 'react';
import TextFieldMaterial from '@material-ui/core/TextField';
import { FieldInputProps, FieldRenderProps } from 'react-final-form';

type Props = FieldRenderProps<string, any>;
type FieldProps = {
  value?: string;
  placeholder?: string;
  formError?: string;
  input: FieldInputProps<any, HTMLElement>;
};
type TextFieldProps = FieldProps & Props;

export const TextField = ({
  input: { type, name, onChange, value },
  placeholder,
  meta: { touched, invalid, error, submitError },
  formError,
}: TextFieldProps) => (
  <TextFieldMaterial
    fullWidth
    placeholder={placeholder}
    error={Boolean((touched && invalid) || formError)}
    helperText={(touched && (error || submitError)) || formError}
    type={type}
    name={name}
    onChange={onChange}
    value={value}
  />
);
