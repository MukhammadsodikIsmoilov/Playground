import { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = "https://reqres.in";

export const useGetUsers = (page) => {
  const [users, setUsers] = useState([]);
  const [data, setData] = useState({});
  useEffect(() => {
    axios({
      method: 'GET',
      url: `${baseUrl}/api/users?page=${page}`,
      header: {'X-Requested-With': 'XMLHttpRequest'},
      responseEncoding: 'utf8'
    })
      .then((res) => {
        setUsers(res.data.data);
        setData(res.data);
      })
      .then((err) => console.log(err));
  }, [page]);

  return { users, data };
};
