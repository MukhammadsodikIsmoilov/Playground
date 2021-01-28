import React, { useState } from "react";
import { usePostsList } from "../hooks/Custom hooks/usePostList";
import Post from "../components/Post";

const News = () => {
  const [limit, setLimit] = useState(10);
  const posts = usePostsList([], limit);
  return (
    <>
      <div className="posts">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
      <button onClick={() => setLimit(limit + 10)}>More</button>
    </>
  );
};

export default News;
