import { Form } from "@remix-run/react";
import styled, { keyframes } from "styled-components";

const animationLeftToCenter = keyframes`
  0% {
    transform: translateX(-50px);
    opacity: 0;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
`;

export const IndexViewContainer = styled.main`
  width: 100vw;
  height: 100vh;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to top right, var(--color-1), var(--color-9));

  h1 {
    position: absolute;
    top: 1rem;
    left: 1rem;

    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    background-color: var(--white);
    border-radius: 9999px;
  }
`;

export const SignInForm = styled(Form)`
  display: flex;
  flex-direction: column;

  padding: 1.5rem 2rem;
  border-radius: 8px;
  width: 26rem;

  background-color: var(--white);
  animation: 0.2s ${animationLeftToCenter} ease-out;

  h2 {
    font-weight: 500;
    font-size: 1.5rem;

    text-align: center;
    margin-bottom: 2rem;
  }

  .keepConnected {
    display: flex;
    align-items: center;
    gap: 1rem;

    margin: 0.75rem 0;
  }

  button {
    margin-bottom: 2rem;
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-align: center;
    color: var(--gray-600);
    margin-top: 1rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;
