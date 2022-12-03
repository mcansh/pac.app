import { Container } from "./styles";
import type { InputHTMLAttributes } from "react";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  error?: string | null;
  inputStyle?: React.CSSProperties;
  showAsterisk?: boolean;
}

export function TextInput({
  name,
  label,
  error,
  showAsterisk,
  inputStyle,
  style,
  ...rest
}: TextInputProps) {
  return (
    <Container style={style} isError={!!error}>
      {label && (
        <label className="label" htmlFor={name}>
          {showAsterisk && <span className="asterisk">*</span>} {label}
        </label>
      )}

      <input id={name} name={name} style={inputStyle} {...rest} />

      {error && <p className="error">{error}</p>}
    </Container>
  );
}
