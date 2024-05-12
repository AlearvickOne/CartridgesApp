import { useGetProfilesUsers } from "@/hooks/ProfilesUser/useGetProfilesUsers";
import { Checkbox } from "@mui/material";
import { useState } from "react";
import { ButtonViolet } from "../ButtonViolet";
import { useDeleteUsers } from "@/hooks/ProfilesUser/useDeleteUsers";

export const CustomListUsers = () => {
  const [usersPanel, setUsersPanel] = useState<number[]>([]);
  const deleteUsers = useDeleteUsers();

  const { data } = useGetProfilesUsers();

  const handleCheckBox = (setId: number) => {
    const userId = usersPanel.filter((id) => id === setId);

    userId[0] === setId
      ? setUsersPanel((prev) => prev.filter((id) => id !== setId))
      : setUsersPanel((prev) => [...prev, setId]);
  };

  return (
    <div
      id="CustomListUsers"
      className="w-full rounded-lg p-2 bg-gradient-to-b from-violet-400 to-violet-600"
    >
      <ul className="p-5 overflow-auto h-[300px] bg-white z-10 rounded-xl">
        {data?.map((el) => (
          <li key={el.id} className="p-2 mb-2 border-2 rounded-[15px] flex justify-between">
            <span className="hidden md:grid md:grid-cols-5 items-center justify-items-center md:w-full">
              <p>{el.id}</p>
              <p>{el.login}</p>
              <p>{`${el.name} ${el.surname}`}</p>
              <p>{el.role}</p>
              <Checkbox onClick={() => handleCheckBox(+el.id)} />
            </span>
            <span className="grid grid-cols-3 md:hidden w-full justify-items-end text-[12px]">
              <div className="justify-self-start">
                <p>{el.id}</p>
                <p>{el.login}</p>
              </div>
              <div className="text-center w-full">
                <p>{`${el.name} ${el.surname}`}</p>
                <hr className="border-black" />
                <p>{el.role}</p>
              </div>
              <Checkbox onClick={() => handleCheckBox(+el.id)} />
            </span>
          </li>
        ))}
      </ul>
      <div className="md:flex gap-x-5 justify-between items-center my-2">
        <ButtonViolet
          typeBtn="submit"
          OnClickFn={() => deleteUsers.mutate({ arrayId: usersPanel })}
          otherClasses="h-full"
        >
          {usersPanel.length < 2 ? "Удалить пользователя" : "Удалить пользователей"}
        </ButtonViolet>
      </div>
    </div>
  );
};
