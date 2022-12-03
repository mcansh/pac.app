import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --white: #ffffff;
    --black: #000000;

    --success-100: #80ed99;
    --success-500: #006400;

    --warning-100: #ffe169;
    --warning-500: #c36f09;

    --danger-100: #ff5a5f;
    --danger-500: #6a040f;

    --info-100: #ade8f4;
    --info-500: #023e8a;

    --color-1: #4cc9f0;
    --color-2: #4895ef;
    --color-3: #4361ee;
    --color-4: #3f37c9;
    --color-5: #3a0ca3;
    --color-6: #480ca8;
    --color-7: #560bad;
    --color-8: #7209b7;
    --color-9: #b5179e;

    --gray-100: #f8f9fa;
    --gray-200: #e9ecef;
    --gray-300: #dee2e6;
    --gray-400: #ced4da;
    --gray-500: #adb5bd;
    --gray-600: #6c757d;
    --gray-700: #495057;
    --gray-800: #343a40;
    --gray-900: #212529;
  }
  
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html { 
    @media(max-width: 1080px) {
      font-size: 93.75%; 
    }

    @media(max-width: 720px) {
      font-size: 87.5%; 
    }
  } 

  body {
    background: var(--gray-100);
    -webkit-font-smoothing: antialiased;
  }

  *, body, input, textarea, button {
    color: var(--gray-700);
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
    color: var(--gray-800);
  }

  button, a {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6; 
    cursor: not-allowed;
  }
`;
