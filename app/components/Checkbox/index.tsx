import { useState } from "react";
import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Icon,
} from "./styles";

import type { InputHTMLAttributes } from "react";

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Checkbox({
  className,
  checked: InitialChecked,
  ...rest
}: CheckboxProps) {
  const [checked, setChecked] = useState(!!InitialChecked);
  return (
    <CheckboxContainer
      className={className}
      onClick={() => setChecked((old) => !old)}
    >
      <HiddenCheckbox {...rest} type="checkbox" readOnly checked={checked} />

      <StyledCheckbox checked={!!checked}>
        {checked && (
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        )}
      </StyledCheckbox>
    </CheckboxContainer>
  );
}
