import { StyledButton, LilStyledButton } from "./styles";
import { ButtonProps } from "../types";

export const Button = ({ color, children, onClick }: ButtonProps) => (
  <StyledButton color={color} onClick={onClick}>
    {children}
  </StyledButton>
);


export const LilButton = ({ color, children, onClick }: ButtonProps) => (
  <LilStyledButton color={color} onClick={onClick}>
    {children}
  </LilStyledButton>
);

