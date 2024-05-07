export default async function AdminPanelPage() {
  const { data } = useGetProfilesUsers();

  useEffect(() => {
    console.log(data);
  }, []);

  return (
  
  );
}
