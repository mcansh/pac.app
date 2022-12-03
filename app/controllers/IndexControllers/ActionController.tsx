import { json } from "@remix-run/node";
import { IndexFunctions } from "~/functions";

export async function ActionController(request: Request) {
  const formData = await IndexFunctions.getFormValues(request);
  if (formData.error) return json(formData, 400);

  return json({ toastMessage: "Email ou senha incorretos", status: 400 }, 400);
}
