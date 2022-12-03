import { json } from "@remix-run/node";
import { ForgotFunctions } from "~/functions";

export async function ActionController(request: Request) {
  const formData = await ForgotFunctions.getFormValues(request);
  if (formData.error) return json(formData, 400);

  return json({ toastMessage: "E-mail enviado!", status: 200 }, 400);
}
