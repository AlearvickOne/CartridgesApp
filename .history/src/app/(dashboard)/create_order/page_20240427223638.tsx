export default async function CreateOrder() {
  return (
    <>
      <form action="" className="">
        <div className="flex flex-wrap flex-col mb-5">
          <label className="border-2 p-5">Title order</label>
          <input className="border-2" type="text" value={"title "} />
        </div>
        <div className="flex flex-wrap flex-col mb-5">
          <label className="border-2">Descriprion order</label>
          <textarea className="border-2" value={"description"} />
        </div>
        <button>Create</button>
      </form>
    </>
  );
}
