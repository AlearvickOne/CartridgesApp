import { EnumRoles } from "@/types/enums";

export const localizationRoles = (role: EnumRoles) => {
  if (role === EnumRoles.CLIENT) return "Клиент";
  else if (role === EnumRoles.PROVIDER) return "Исполнитель заказа";
  else if (role === EnumRoles.ADMIN) return "Администратор";
};
