import React from "react";
import { Name, Container, Input, ErrorMessage } from "./styles";
import { UseFormRegister, FieldError } from "react-hook-form";

interface InputProps {
  name: string;
  title: string;
  placeholder: string;
  register: UseFormRegister<any>;
  error?: FieldError;
}

const ComboBox = ({
  name,
  title,
  placeholder,
  register,
  error,
}: InputProps) => {
  return (
    <Container>
      <Name>{title}</Name>
      <Input
        {...register(name)}
        type="text"
        placeholder={placeholder}
        $isError={!!error}
      />
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </Container>
  );
};

export default ComboBox;
