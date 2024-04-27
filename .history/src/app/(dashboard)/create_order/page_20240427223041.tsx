export default async function CreateOrder() {
  return (
    <>
      <form action="">
        <div className="">
          <label>Title order</label>
          <input type="text" value={"title "} />
        </div>
        <textarea value={"description"} />
        <button>Create</button>
      </form>
    </>
  );
}
