export default async function CreateOrder() {
  return (
    <>
      <form action="" className="flex-col">
        <div className="flex flex-wrap flex-col">
          <label>Title order</label>
          <input type="text" value={"title "} />
        </div>
        <div className="flex flex-wrap flex-col">
          <label>Descriprion order</label>
          <textarea value={"description"} />
        </div>
        <button>Create</button>
      </form>
    </>
  );
}
