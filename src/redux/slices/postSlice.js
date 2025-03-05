import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllPosts = createAsyncThunk(
  "posts/getAllPost",
  async (page, { rejectWithValue }) => {
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_URL}postsData`
      );
      console.log(response?.posts, 'hi')
      return response?.posts;
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message || "Error while getting all the posts."
      );
    }
  }
);

export const getPostsByTags = createAsyncThunk(
  "posts/getPostsByTags",
  async ({ tags, fetchMore }, { getState, dispatch, rejectWithValue }) => {
    try {
        const { posts } = getState().posts;

        if (!posts || posts.length === 0) {
            return [];
        }

        const relatedPosts =
            posts &&
            posts?.length > 0 &&
            posts?.filter(post => 
            post.tags.some((tag) => tags.includes(tag))
            );
            console.log(relatedPosts, "related posts");
            if (relatedPosts.length > 3 && !fetchMore) {
                return relatedPosts;
            }
            let page = Math.floor(posts.length / 10) + 1;
            await dispatch(getAllPosts(page));
            return await dispatch(getPostsByTags(tags)).unwrap();
        
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message || "Error while getting posts by tags."
      );
    }
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    relatedPosts: [],
    loading: false,
    error: null,
    page: 0,
    hasMore: true
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = [...state.posts, ...action.payload];
        state.page += 1;
        state.hasMore = action.payload.length > 0;
      })
      .addCase(getAllPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getPostsByTags.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPostsByTags.fulfilled, (state, action) => {
        state.loading = false;
        state.relatedPosts = [...state.relatedPosts, ...action.payload];
      })
      .addCase(getPostsByTags.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});
// export const {reducer} = postSlice.actions;
export default postSlice.reducer;
