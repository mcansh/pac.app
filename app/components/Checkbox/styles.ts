import styled, { css } from "styled-components";

type StyledCheckboxProps = {
  checked: boolean;
};

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const HiddenCheckbox = styled.input`
  border: 0;
  display: none;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: var(--white);
  stroke-width: 3px;
`;

export const StyledCheckbox = styled.div<StyledCheckboxProps>`
  display: inline-block;
  width: 1.2rem;
  height: 1.2rem;

  border-radius: 3px;
  transition: all 150ms;

  ${({ checked }) => css`
    background: ${checked ? "var(--color-3)" : "var(--gray-200)"};
  `}
`;
