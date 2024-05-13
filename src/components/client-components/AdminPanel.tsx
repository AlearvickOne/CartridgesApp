"use server";

import { LOBSTER_FONT } from "@/constants/constants";
import { OrdersDeleteMenu } from "../widgets/admin_panel/OrdersDeleteMenu";
import { CustomListUsers } from "../widgets/admin_panel/CustomListUsers";

export const AdminPanel = () => {
  return (
    <div className="py-24 overflow-auto min-h-screen w-full flex flex-center items-center flex-col">
      <div className="bg-stone-100 rounded-xl w-full  pt-5 border-2 border-purple-600">
        <h1 className={` text-center text-xl ${LOBSTER_FONT.className}`}>Панель управления</h1>
        <hr className="border-b-2 my-2 border-violet-800" />
        <CustomListUsers />
        <div className="px-5 mt-5">
          <hr className="border-b-2 my-2 border-violet-800" />
          <h1 className={` text-center text-xl ${LOBSTER_FONT.className}`}>Удаление заказов</h1>
          <OrdersDeleteMenu />
        </div>
      </div>
    </div>
  );
};
