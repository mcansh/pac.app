import { useEffect } from "react";
import { Link, useActionData } from "@remix-run/react";

import { fireToast } from "~/global";
import { Button, TextInput } from "~/components";
import { ForgotViewContainer, ForgotForm } from "./styles";
import { ArrowLeft } from "phosphor-react";

export function ForgotView() {
  const actionData = useActionData();

  useEffect(() => {
    if (actionData?.toastMessage && actionData?.status === 400)
      fireToast({ type: "error", message: actionData.toastMessage });
    if (actionData?.toastMessage && actionData?.status === 200)
      fireToast({ type: "success", message: actionData.toastMessage });
  }, [actionData]);

  return (
    <ForgotViewContainer>
      <h1>PAC - Plano anual de contratações</h1>

      <ForgotForm method="post">
        <Link to="/" className="back_link">
          <ArrowLeft size={26} />
        </Link>
        <h2>Recupere sua senha</h2>
        <p>
          Por favor, digite o seu e-mail para que possamos enviar um link para
          recuperação de senha.
        </p>

        <TextInput
          name="email"
          placeholder="email@email.com"
          label="E-mail"
          error={actionData?.data?.email}
        />

        <Button>Enviar</Button>
        <Link to="/forgot">Não recebeu o link?</Link>
      </ForgotForm>
    </ForgotViewContainer>
  );
}
