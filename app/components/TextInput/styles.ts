import styled, { css } from "styled-components";

export const Container = styled.label<{ isError: boolean }>`
  display: flex;
  flex-direction: column;

  input {
    font-size: 1rem;
    padding: 0.8rem 1rem;

    outline: none;
    border-radius: 6px;
    border: 2px solid var(--gray-200);
    background-color: var(--gray-200);

    &:not(:disabled):focus {
      border-color: var(--color-3);
    }

    &::placeholder {
      color: var(--gray-600);
    }

    ${({ isError }) =>
      isError &&
      css`
        border-color: var(--danger-100);
      `}
  }

  .label {
    font-weight: 600;
    font-size: 0.9rem;
    color: var(--gray-700);
    margin-bottom: 0.25rem;
  }

  .error,
  .asterisk {
    color: var(--danger-100);
  }

  .error {
    margin-top: 0.25rem;
  }
`;
