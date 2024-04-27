export default async function CreateOrder() {
  return (
    <>
      <form action="" className="">
        <div className="flex flex-wrap flex-col mb-5">
          <label className="border-2">Title order</label>
          <input className="border-2" type="text" value={"title "} />
        </div>
        <div className="flex flex-wrap flex-col mb-5">
          <label>Descriprion order</label>
          <textarea value={"description"} />
        </div>
        <button>Create</button>
      </form>
    </>
  );
}
