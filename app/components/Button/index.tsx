import { Container } from "./styles";
import type { IconProps } from "phosphor-react";
import type { ButtonHTMLAttributes, ForwardRefExoticComponent } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  icon?: ForwardRefExoticComponent<IconProps>;
  coloredButton?: boolean;
}

export function Button({
  icon: Icon,
  children,
  coloredButton,
  ...rest
}: ButtonProps) {
  return (
    <Container {...rest} className={coloredButton ? "coloredButton" : ""}>
      {Icon && <Icon />} {children}
    </Container>
  );
}
