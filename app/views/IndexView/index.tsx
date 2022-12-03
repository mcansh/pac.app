import { useEffect } from "react";
import { Link, useActionData } from "@remix-run/react";

import { fireToast } from "~/global";
import { Button, TextInput, Checkbox } from "~/components";
import { IndexViewContainer, SignInForm } from "./styles";

export function IndexView() {
  const actionData = useActionData();

  useEffect(() => {
    if (actionData?.toastMessage && actionData?.status === 400)
      fireToast({ type: "error", message: actionData.toastMessage });
    if (actionData?.toastMessage && actionData?.status === 201)
      fireToast({ type: "success", message: actionData.toastMessage });
  }, [actionData]);

  return (
    <IndexViewContainer>
      <h1>PAC - Plano anual de contratações</h1>

      <SignInForm method="post">
        <h2>Faça seu login</h2>

        <TextInput
          name="email"
          placeholder="email@email.com"
          label="E-mail"
          error={actionData?.data?.email}
        />

        <TextInput
          name="password"
          placeholder="mypassword123"
          label="Senha"
          error={actionData?.data?.password}
          style={{ marginTop: "0.5rem" }}
        />

        <div className="keepConnected">
          <Checkbox name="keepConnected" />
          <label>Manter conectado</label>
        </div>

        <Button>Entrar</Button>
        <Link to="/forgot">Esqueceu sua senha?</Link>
      </SignInForm>
    </IndexViewContainer>
  );
}
