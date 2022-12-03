import toast from "react-hot-toast";
import { XCircle, CheckCircle, WarningCircle, Info } from "phosphor-react";
import {
  ToastErrorStyle,
  ToastSuccessStyle,
  ToastWarningStyle,
  ToastInfoStyle,
} from "~/global/styles";

export type FireToastProps = {
  message: string;
  type: "error" | "warning" | "success" | "info";
};

export function fireToast({ message, type }: FireToastProps) {
  switch (type) {
    case "error":
      toast(message, {
        icon: (
          <XCircle
            weight="fill"
            color={ToastErrorStyle.iconTheme.primary}
            size={26}
          />
        ),
        ...ToastErrorStyle,
      });
      break;

    case "success":
      toast(message, {
        icon: (
          <CheckCircle
            weight="fill"
            color={ToastSuccessStyle.iconTheme.primary}
            size={26}
          />
        ),
        ...ToastSuccessStyle,
      });
      break;

    case "warning":
      toast(message, {
        icon: (
          <WarningCircle
            weight="fill"
            color={ToastWarningStyle.iconTheme.primary}
            size={26}
          />
        ),
        ...ToastWarningStyle,
      });
      break;

    case "info":
      toast(message, {
        icon: (
          <Info
            weight="fill"
            color={ToastInfoStyle.iconTheme.primary}
            size={26}
          />
        ),
        ...ToastInfoStyle,
      });
      break;
  }
}
