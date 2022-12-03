import { ForgotView } from "~/views";
import { ForgotControllers } from "~/controllers";

import type { ActionFunction, MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => ({
  title: "pac.app | Forgot",
});

export const action: ActionFunction = async ({ request }) => {
  return await ForgotControllers.ActionController(request);
};

export default function () {
  return <ForgotView />;
}
