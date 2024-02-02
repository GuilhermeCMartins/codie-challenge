import React, { useState } from "react";
import {
  CustomDropdown,
  CustomOption,
  ErrorMessage,
  StyledSelect,
  StyledSelectWrapper,
} from "./styles";
import { FieldError, UseFormRegister } from "react-hook-form";

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  name: string;
  options: Option[];
  placeholder: string;
  register: UseFormRegister<any>;
  error?: FieldError | any;
  isArray?: boolean;
}

const Select = ({
  name,
  options,
  placeholder,
  register,
  error,
  isArray = false,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const errorMessage = isArray ? error?.pokemon.message : error?.message;

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value: string) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <div style={{ width: "100%" }}>
      <h3>{name}</h3>
      <StyledSelectWrapper>
        <StyledSelect
          {...register}
          $hasError={!!error}
          $isOpen={isOpen}
          onClick={handleToggle}
        >
          {selectedOption || placeholder}
        </StyledSelect>
        <CustomDropdown $isOpen={isOpen}>
          {options.map((item) => (
            <CustomOption
              key={item.value}
              onClick={() => handleOptionClick(item.value)}
            >
              {item.label}
            </CustomOption>
          ))}
        </CustomDropdown>
        {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </StyledSelectWrapper>
    </div>
  );
};

export default Select;
