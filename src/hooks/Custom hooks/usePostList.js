import { useState, useEffect } from "react";

export const usePostsList = (initialState, limit) => {
  const [posts, setPosts] = useState(initialState);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
      );
      const data = await res.json();

      setPosts(data);
    };
    fetchData();
  }, [limit]);

  return posts;
};
