import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

function App() {
  return (
    <div className="container mx-auto p-4 flex flex-row gap-4 items-start">
      <PostForm />
      <PostList />
    </div>
  );
}

export default App;
