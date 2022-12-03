import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 1rem;

  padding: 1rem 2rem;
  flex: 1;

  border: none;
  border-radius: 6px;
  transition: background-color 0.2s;

  font-size: 1rem;
  font-weight: 600;
  color: var(--white);
  background-color: var(--color-3);

  &:not(:disabled):hover {
    background-color: var(--color-2);
  }

  &:disabled {
    background-color: var(--color-2);
  }
`;
