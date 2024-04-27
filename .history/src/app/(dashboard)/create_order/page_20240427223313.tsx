export default async function CreateOrder() {
  return (
    <>
      <form action="" className="flex-col">
        <div className="flex flex-wrap colu">
          <label>Title order</label>
          <input type="text" value={"title "} />
        </div>
        <div className="">
          <label>Descriprion order</label>
          <textarea value={"description"} />
        </div>
        <button>Create</button>
      </form>
    </>
  );
}
