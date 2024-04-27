export default async function CreateOrder() {
  return (
    <>
      <form action="" className="text-[18px]">
        <div className="flex flex-wrap flex-col mb-5">
          <label className="border-2 px-3 py-[2px]">Title order</label>
          <input className="border-2 px-3 py-2 rounded-xl" type="text" value={"title "} />
        </div>
        <div className="flex flex-wrap flex-col mb-5">
          <label className="border-2 px-3 py-[2px] mb-2">Descriprion order</label>
          <textarea
            className="border-2 px-3 py-[2px] rounded-xl resize-none"
            rows={5}
            value={"description"}
          />
        </div>
        <div className="flex justify-end">
          <button className="text-right border-2 rounded-lg px-5 py-2">Create</button>
        </div>
      </form>
    </>
  );
}
