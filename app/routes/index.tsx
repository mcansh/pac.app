import { IndexView } from "~/views";
import { IndexControllers } from "~/controllers";

import type { ActionFunction, MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => ({
  title: "pac.app | SignIn",
});

export const action: ActionFunction = async ({ request }) => {
  return await IndexControllers.ActionController(request);
};

export default function () {
  return <IndexView />;
}
