import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllPosts = createAsyncThunk(
  "posts/getAllPost",
  async (page, { rejectWithValue }) => {
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_URL}posts?delay=1000&limit=10&skip=${page * 10}`
      );
      return response?.data?.posts;
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

export const searchPosts = createAsyncThunk("posts/searchPosts", async(text,rejectWithValue)=>{
  try {
    let response = await axios.get(`${process.env.REACT_APP_URL}posts/search?q=${text}`);
    
    return response?.data?.posts
  } catch (error) {
    return rejectWithValue(
      error?.response?.data?.message || "Error while searching posts."
    );
  }
})

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    relatedPosts: [],
    searchedPosts: [],
    loading: false,
    searchLoading: false,
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
      })
      .addCase(searchPosts.pending, (state) => {
        state.searchLoading = true;
        state.error = null;
      })
      .addCase(searchPosts.fulfilled, (state, action) => {
        state.searchLoading = false;
        state.searchedPosts = action.payload;
      })
      .addCase(searchPosts.rejected, (state, action) => {
        state.searchLoading = false;
        state.error = action.payload;
      });
  }
});
// export const {reducer} = postSlice.actions;
export default postSlice.reducer;
