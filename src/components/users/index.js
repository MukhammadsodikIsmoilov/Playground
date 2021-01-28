import React, { useState } from "react";
import { useAxiosGet } from "../../hooks/Custom hooks/useGetUsers";
import { UserCard } from "../user";
import "./style.css";
const UsersInfo = () => {
  const [page, setPage] = useState(1);
  const { users, data } = useAxiosGet(page);
  return (
    <div className="wrapper">
      <div className="users_container">
        <span>Total users: {data.total}</span>
        <div className="users">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
      <div className="pagination">
        <button onClick={() => setPage(1)}>1</button>
        <button onClick={() => setPage(2)}>2</button>
      </div>
    </div>
  );
};

export default UsersInfo;
