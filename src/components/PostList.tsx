import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../features/posts/postSlice";
import { AppDispatch, RootState } from "../store/store";

const PostList = () => {
  const dispatch: AppDispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.posts.items);
  const status = useSelector((state: RootState) => state.posts.status);
  const error = useSelector((state: RootState) => state.posts.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getPosts());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <p className="text-gray-500">Loading...</p>;
  }

  if (status === "failed") {
    return <p className="text-red-500">Error: {error}</p>;
  }

  return (
    <div className="bg-gray-100 p-4 rounded shadow w-2/3">
      <h2 className="text-xl font-bold mb-4 text-gray-700">Posts</h2>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="bg-white shadow-md p-4 rounded">
            <h3 className="text-lg font-bold text-gray-700">{post.title}</h3>
            <p className="text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
