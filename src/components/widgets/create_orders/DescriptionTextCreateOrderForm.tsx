import { FormDataNamingOrderClass } from "@/constants/constants";

export const DescriptionTextCreateOrderForm = () => {
  return (
    <div className="flex flex-wrap flex-col mb-5">
      <label htmlFor="desc-order" className="py-[2px] mb-2 ">
        Описание услуги
      </label>
      <textarea
        id="desc-order"
        className="p-2 rounded-xl resize-none shadow-inset shadow-neutral-400 transition-all outline-none hover:outline-black focus:outline-blue-900"
        name={FormDataNamingOrderClass.NAME_DESC_ORDER}
        rows={3}
        placeholder="Опишите подробно вашу услугу ..."
      />
    </div>
  );
};
