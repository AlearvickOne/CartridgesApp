"use server";
import { SocketApiClass } from "@/api/socket-api";
import { zodValid } from "@/api/zod-valid";
import { FormCreateOrder } from "@/components/client-components/FormCreateOrder";
import { FormDataNamingOrderClass } from "@/constants/constants";

export default async function CreateOrder() {
  async function createOrderForm(formdata: FormData) {
    "use server";

try{



  
} catch (error) {

}

    

  return (
    <div className=" overflow-auto max-h-screen p-10">
      <FormCreateOrder createOrderForm={createOrderForm} />
    </div>
  );
}
