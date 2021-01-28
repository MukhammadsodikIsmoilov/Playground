import { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = "https://reqres.in";

export const useAxiosGet = (page) => {
  const [users, setUsers] = useState([]);
  const [data, setData] = useState({})
  useEffect(() => {
    axios
      .get(`${baseUrl}/api/users?page=${page}`)
      .then((res) => {
        setUsers(res.data.data)
        setData(res.data)
      })
      .then((err) => console.log(err));
  }, [page]);

  return {users, data};
};
