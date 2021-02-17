import React, { useState, useEffect } from "react";

const ForExample = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const data = await res.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  const handleName = (e) => {
    const { value } = e.target;

    setName(value);
  };

  const handleUsername = (e) => {
    const { value } = e.target;

    setUsername(value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={handleName} />
        <input value={username} onChange={handleUsername} />
      </div>
      <div>
        <div>
          <span>{name}</span>
        </div>
        <div>
          <span>{username}</span>
        </div>
      </div>
      <div>
        {users.map((user) => (
          <div key={user.id}>{user.email}</div>
        ))}
      </div>
    </div>
  );
};

export default ForExample;
