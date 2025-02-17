import React, { useState } from "react";
import styled from "styled-components";

import { Input, Form } from "antd";
import { Rule } from "antd/es/form";

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0;

  & > div {
    margin: 0;
  }
  &.active p {
    top: -0.75rem;
    color: var(--color-p-20);
  }
`;

const StyledInput = styled(Input)`
  width: 100%;
  outline: none;
  padding: 0.5rem 1rem;

  transition: box-shadow 0.3s;

  &:focus {
    box-shadow: 0px 0px 0.25rem 0.25rem var(--color-p-70);
  }
`;
const PlaceHolder = styled.p`
  position: absolute;
  left: 1rem;
  top: 0.5rem;
  margin: 0;
  font-size: 1rem;

  color: var(--color-n-70);
  background: radial-gradient(white, transparent);
  transition: all 0.3s;
`;

const AuthInput: React.FC<{
  type: string;
  name: string;
  placeholder: string;
  value?: string | number;
  rules?: Rule[];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ type, name, placeholder, value, onChange, rules = [] }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <InputWrapper className={isFocused ? "active" : ""}>
      <Form.Item name={name} rules={rules}>
        <StyledInput
          type={type}
          value={value}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={onChange}
        />
      </Form.Item>
      <PlaceHolder>{value ? "" : placeholder}</PlaceHolder>
    </InputWrapper>
  );
};

export default AuthInput;
