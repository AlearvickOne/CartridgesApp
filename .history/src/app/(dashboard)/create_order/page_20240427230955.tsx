export default async function CreateOrder() {
  return (
    <>
      <form action="" className="text-[18px]">
        <div className="flex flex-wrap flex-col mb-5">
          <label className="border-2 px-3 py-[2px] mb-2">Title order</label>
          <input
            className="px-3 py-2 rounded-xl"
            name="title-order"
            type="text"
            defaultValue={"title "}
          />
        </div>
        <div className="flex flex-wrap flex-col mb-5">
          <label className="px-3 py-[2px] mb-2">Descriprion order</label>

          <div className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 before:z-1️ relative ">
            <textarea
              className="border-2 px-3 py-[2px] rounded-xl resize-none  "
              name="desc-order"
              rows={5}
              defaultValue={"description"}
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button className="text-right border-2 rounded-lg px-5 py-2">Create</button>
        </div>
      </form>
    </>
  );
}
