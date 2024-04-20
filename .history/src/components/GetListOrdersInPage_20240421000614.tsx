const { data, isLoading } = useGetOrdersData();

return (
  <div className="">
    {isLoading ? (
      <p>Loading...</p>
    ) : (
      <ul>
        {data?.map(
          ({ id, title, description, isPaid }: IOrders) =>
            isPaid === isPaidOrder && (
              <LiOrder id={id} title={title} isPaid={isPaid}>
                {description}
              </LiOrder>
            )
        )}
      </ul>
    )}
  </div>
);
