import { Form } from "@remix-run/react";
import styled, { keyframes } from "styled-components";

const animationRigthToCenter = keyframes`
  0% {
    transform: translateX(50px);
    opacity: 0;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
`;

export const ForgotViewContainer = styled.main`
  width: 100vw;
  height: 100vh;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom left, var(--color-1), var(--color-9));

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

export const ForgotForm = styled(Form)`
  display: flex;
  flex-direction: column;
  position: relative;

  padding: 1.5rem 2rem;
  border-radius: 8px;
  width: 26rem;

  background-color: var(--white);
  animation: 0.2s ${animationRigthToCenter} ease-out;

  .back_link {
    position: absolute;
    top: 0.5rem;
    left: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    padding: 0.25rem;

    background: transparent;
    border: none;
    transition: transform 0.2s;

    &:hover {
      background-color: var(--gray-100);
      transform: translateX(-5px);
    }
  }

  h2 {
    margin-top: 0.15rem;
    font-weight: 500;
    font-size: 1.5rem;
    text-align: center;
  }

  > p {
    text-align: center;
    margin: 2rem 0;
  }

  button {
    margin-top: 1rem;
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
