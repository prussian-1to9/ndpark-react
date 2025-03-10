import React from "react";
import styled from "styled-components";
import { Button } from "antd";

const StyledButton = styled(Button)`
  width: 100%;
  padding: 1rem;
  text-align: center;
`;

const AuthButton: React.FC<{
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "primary" | "default" | "dashed" | "link" | "text";
  htmlType?: "button" | "submit" | "reset";
  preventDefault?: boolean;
}> = ({
  children,
  onClick,
  preventDefault = true,
  type = "primary",
  htmlType = "button",
  ...props
}) => {
  return (
    <StyledButton
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        if (preventDefault) e.preventDefault();
        if (onClick) onClick(e);
      }}
      type={type ?? "primary"}
      htmlType={htmlType}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default AuthButton;
