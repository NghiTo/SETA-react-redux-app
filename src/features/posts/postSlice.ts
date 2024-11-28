import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Post } from "../../interface/post.interface";

interface PostsState {
  items: Post[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null | undefined;
}

const initialState: PostsState = {
  items: [],
  status: "idle",
  error: null,
};

export const getPosts = createAsyncThunk<Post[]>("posts/getPosts", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
});

export const createPost = createAsyncThunk<Post, Omit<Post, "id">>(
  "posts/createPost",
  async (newPost) => {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      newPost
    );
    return response.data;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error?.message || null;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export default postsSlice.reducer;
