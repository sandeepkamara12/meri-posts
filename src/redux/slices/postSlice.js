import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllPostsData, getPostDetails, postByTagName, postByUserId, searchedPost } from "../../api/post";

export const getAllPosts = createAsyncThunk(
  "posts/getAllPost",
  async ({param}, { rejectWithValue }) => {
    try {
      return await getAllPostsData(param);
    } catch (error) {
      return rejectWithValue(error?.message);
    }
  }
);

export const getSinglePost = createAsyncThunk("posts/getSinglePost", async (postId, { rejectWithValue }) => {
  try {
    return await getPostDetails(postId);
  } catch (error) {
    return rejectWithValue(
      error?.response
    );
  }
})


export const getPostsByTagName = createAsyncThunk("posts/getPostsByTagName", async ({ param:{tag, page} }, { rejectWithValue }) => {
  try {
    return await postByTagName(tag, page);
  } catch (error) {
    return rejectWithValue(error?.message);
  }
});

export const getPostByUserId = createAsyncThunk("posts/getPostByUserId", async (userId, { rejectWithValue }) => {
  try {
    return await postByUserId(userId);
  } catch (error) {
    return rejectWithValue(error?.message);
  }
});

//Related Posts at Blog Details, also need to set the limit for 3 posts.
export const getRelatedPosts = createAsyncThunk("posts/relatedPosts", async ({ userId, tags, currentPostId }, { dispatch, rejectWithValue }) => {
  if (userId) {
    try {
      //Get posts by user id
      const response = await dispatch(getPostByUserId(userId));
      const postsByUser = response?.payload;
      if (!postsByUser) {
        return rejectWithValue("No posts found for this user.");
      }
      //Get posts that match the tags and remove the current post too.
      let relatedPosts = postsByUser?.filter(post => post?.tags.some(tag => tags.includes(tag))).filter(post => post?.id !== currentPostId);
      return relatedPosts;

    } catch (error) {
      return rejectWithValue("Error while fetching related posts.");
    }
  }
})

export const searchPosts = createAsyncThunk("posts/searchPosts", async (text, rejectWithValue) => {
  try {
    return await searchedPost(text);
  } catch (error) {
    return rejectWithValue(
      error?.message
    );
  }
})

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    post: {},
    totalPosts: 0,
    totalPages: 0,
    relatedPosts: [],
    searchedPosts: [],
    tagPosts: [],
    loading: {},
    error: {},
    page: 0,
    hasMore: true
  },
  reducers: {
    resetTagPosts: (state) => {
        state.tagPosts = [];
        state.totalPages = 0;
        state.page = 0;
        state.hasMore = true;
    },
    clearPost: (state) => {
      state.post = {};
      state.loading = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPosts.pending, (state) => {
        state.loading.getAllPosts = true;
        state.error.getAllPosts = null;
      })
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.loading.getAllPosts = false;
        state.posts = [...state.posts, ...action.payload.posts];
        state.totalPosts = action.payload.total;
        state.totalPages = Math.ceil(action.payload.total / 10)
        if (state.page < state.totalPages) {
          state.page += 1;
        }
        state.hasMore = action.payload.posts.length > 0;
      })
      .addCase(getAllPosts.rejected, (state, action) => {
        state.loading.getAllPosts = false;
        state.error.getAllPosts = action.payload;
      })
      .addCase(getRelatedPosts.pending, (state) => {
        state.loading.getRelatedPosts = true;
        state.error.getRelatedPosts = null;
      })
      .addCase(getRelatedPosts.fulfilled, (state, action) => {
        state.loading.getRelatedPosts = false;
        state.relatedPosts = action.payload;
      })
      .addCase(getRelatedPosts.rejected, (state, action) => {
        state.loading.getRelatedPosts = false;
        state.error.getRelatedPosts = action.payload;
      })
      .addCase(searchPosts.pending, (state) => {
        state.loading.searchPosts = true;
        state.error.searchPosts = null;
      })
      .addCase(searchPosts.fulfilled, (state, action) => {
        state.loading.searchPosts = false;
        state.searchedPosts = action.payload;
      })
      .addCase(searchPosts.rejected, (state, action) => {
        state.loading.searchPosts = false;
        state.error.searchPosts = action.payload;
      })
      .addCase(getSinglePost.pending, (state) => {
        state.loading.getSinglePost = true;
        state.error.getSinglePost = null;
      })
      .addCase(getSinglePost.fulfilled, (state, action) => {
        state.loading.getSinglePost = false;
        state.post = action.payload;
      })
      .addCase(getSinglePost.rejected, (state, action) => {
        state.loading.getSinglePost = false;
        state.error.getSinglePost = action.payload;
      })
      .addCase(getPostsByTagName.pending, (state) => {
        state.loading.getPostsByTagName = true;
        state.error.getPostsByTagName = null;
      })
      .addCase(getPostsByTagName.fulfilled, (state, action) => {
        state.loading.getPostsByTagName = false;
        state.error.getPostsByTagName = null;
        state.totalPages = Math.ceil(action.payload.total / 10)
        state.tagPosts = [...state.tagPosts, ...action.payload.posts];
        state.page += 1;
        state.hasMore = action.payload.posts.length > 0;
      })
      .addCase(getPostsByTagName.rejected, (state, action) => {
        state.loading.getPostsByTagName=false;
        state.error.getPostsByTagName = action.payload;
      });
  }
});
export const { resetTagPosts, clearPost } = postSlice.actions;
export default postSlice.reducer;
