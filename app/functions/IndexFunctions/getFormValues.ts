export async function getFormValues(request: Request) {
  const formState = await request.formData();
  const email = formState.get("email")?.toString();
  const password = formState.get("password")?.toString();
  const keepConnected = formState.get("keepConnected");

  const errors = {
    email: email ? null : "O e-mail é obrigatório.",
    password: password ? null : "A senha é obrigatória.",
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
      password,
      keepConnected,
    },
  };
}
