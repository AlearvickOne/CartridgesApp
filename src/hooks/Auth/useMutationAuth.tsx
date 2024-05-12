import { authService } from "@/api/services/authService";
import { AllPagesClass } from "@/constants/constants";
import { M_AUTH } from "@/constants/constantsQuery";
import { DisBoolean } from "@/types/Dispatch.types";
import { ILoginForm, IRegisterForm } from "@/types/auth.interface";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { UseFormReset } from "react-hook-form";

export const useMutationAuth = (
  setIsClick: DisBoolean,
  setIsError: DisBoolean,
  isLoginForm: boolean,
  reset: UseFormReset<ILoginForm | IRegisterForm>
) => {
  const { push } = useRouter();

  return useMutation({
    mutationKey: [M_AUTH],
    mutationFn: (data: IRegisterForm) => {
      setIsClick(true);
      setIsError(false);
      return authService.main(isLoginForm ? "login" : "register", data);
    },
    onSuccess: () => {
      reset();
      push(AllPagesClass.NOT_PAID_ORDERS_PAGE);
    },
    onError: () => {
      setIsError(true);
      setIsClick(false);
    },
  });
};
