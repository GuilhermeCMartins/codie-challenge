import React, { useState } from "react";
import {
  CustomDropdown,
  CustomOption,
  ErrorMessage,
  StyledSelect,
  StyledSelectWrapper,
} from "./styles";
import { FieldError, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { useRouter } from "next/router";

interface Option {
  index?: number;
  label: string;
  value: string;
}

interface SelectProps {
  index?: number;
  name: string;
  options: Option[];
  placeholder: string;
  register: UseFormRegister<any>;
  error?: FieldError | any;
  isArray?: boolean;
  query?: string;
  setValue: UseFormSetValue<any>;
  title: string;
  addPokemon?: (pokemon: Option) => void;
}

const Select = ({
  name,
  options,
  placeholder,
  register,
  error,
  query,
  setValue,
  title,
  addPokemon,
  index,
  isArray = false,
}: SelectProps) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const errorMessage = isArray ? error?.pokemon.message : error?.message;

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = ({ label, value }: Option) => {
    setSelectedOption(label);
    setIsOpen(false);

    const optionValue = isArray ? { pokemon: label } : label;

    setValue(name, optionValue);

    if (addPokemon) {
      addPokemon({ index, value, label });
    }

    if (query) {
      const updatedQuery = { ...router.query, [query]: value };
      router.replace({ pathname: router.pathname, query: updatedQuery });
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <h3>{title}</h3>
      <StyledSelectWrapper>
        <StyledSelect
          {...register(name)}
          $hasError={!!error}
          $isOpen={isOpen}
          onClick={handleToggle}
        >
          {selectedOption || placeholder}
        </StyledSelect>
        <CustomDropdown $isOpen={isOpen} onMouseLeave={() => setIsOpen(false)}>
          {options.map((item) => (
            <CustomOption
              key={item.value}
              onClick={() => handleOptionClick(item)}
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
