export async function getFormValues(request: Request) {
  const formState = await request.formData();
  const email = formState.get("email")?.toString();

  const errors = {
    email: email ? null : "O e-mail é obrigatório.",
  };

  const hasErrors = Object.values(errors).some((errorMessage) => errorMessage);
  if (hasErrors) {
    return {
      error: true,
      data: {
        ...errors,
      },
    };
  }
  return {
    error: false,
    data: {
      email,
    },
  };
}
