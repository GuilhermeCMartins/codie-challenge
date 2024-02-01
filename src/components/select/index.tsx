import React from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
  padding: 0.5rem;
  border-radius: 8px;
  border-color: #d5d5d5;
  border: 1px solid #d5d5d5;
  outline: none;
  width: 200px;
  color: #747474;
`;

interface Options {
  value: string;
  label: string;
}

interface SelectProps {
  name: string;
  options: Options[];
}

const CustomSelect = ({ name, options }: SelectProps) => {
  return (
    <div>
      <h3>{name}</h3>
      <StyledSelect>
        <option value="" disabled selected>Selecione...</option>
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </StyledSelect>
    </div>
  );
};

export default CustomSelect;
