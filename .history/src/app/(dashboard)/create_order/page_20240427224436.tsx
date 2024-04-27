export default async function CreateOrder() {
  return (
    <>
      <form action="" className="text-[18px]">
        <div className="flex flex-wrap flex-col mb-5">
          <label className="border-2 px-3 py-[2px]">Title order</label>
          <input className="border-2 px-3 py-2" type="text" value={"title "} />
        </div>
        <div className="flex flex-wrap flex-col mb-5">
          <label className="border-2 px-3 py-[2px]">Descriprion order</label>
          <textarea className="border-2 px-3 py-[2px] rounded-xl" rows={5} value={"description"} />
        </div>
        <button>Create</button>
      </form>
    </>
  );
}
