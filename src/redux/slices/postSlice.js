import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllPosts = createAsyncThunk(
  "posts/getAllPost",
  async (page, {rejectWithValue }) => {
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_URL}posts?delay=1000&limit=10&skip=${page * 10}`
      );
      return response?.data;
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message || "Error while getting all the posts."
      );
    }
  }
);

export const getSinglePost = createAsyncThunk("posts/getSinglePost", async(postId, {rejectWithValue})=>{
  try {
    let response = await axios.get(`${process.env.REACT_APP_URL}posts/${postId}`);
    return response?.data;
  } catch (error) {
    return rejectWithValue(
      error?.response?.data?.message || "Error while getting all the posts."
    );
  }
})


export const getPostsByTagName = createAsyncThunk("posts/getPostsByTagName", async ({tag, page}, { rejectWithValue }) => {
  try {
    let response = await axios.get(`${process.env.REACT_APP_URL}posts/tag/${tag}/?delay=1000&limit=10&skip=${page * 10}`);
    console.log(response, 'aa');
    return response?.data;
  } catch (error) {
    return rejectWithValue(
      error?.response?.data?.message || "Error while getting posts via tag name."
    );
  }
});

export const getPostByUserId = createAsyncThunk("posts/getPostByUserId",async(userId, {rejectWithValue})=>{
  try {
    let response = await axios.get(`${process.env.REACT_APP_URL}users/${userId}/posts`);
    return response?.data?.posts;
  } catch (error) {
    return rejectWithValue(
      error?.response?.data?.message || "Error while getting posts by user id."
    );
  }
});

//Related Posts at Blog Details, also need to set the limit for 3 posts.
export const getRelatedPosts = createAsyncThunk("posts/relatedPosts", async({userId, tags, currentPostId}, {dispatch, rejectWithValue})=>{
  if(userId) {
    try {
      //Get posts by user id
      const response =  await dispatch(getPostByUserId(userId));
      const postsByUser = response?.payload;
      if (!postsByUser) {
        return rejectWithValue("No posts found for this user.");
      }
      //Get posts that match the tags and remove the current post too.
      let relatedPosts = postsByUser?.filter(post=>post?.tags.some(tag=>tags.includes(tag))).filter(post=>post?.id !== currentPostId);
      console.log(relatedPosts, 'relatedPosts')
      return relatedPosts;
      
    } catch (error) {
      return rejectWithValue("Error while fetching related posts.");
    }
  }
})

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
    post: {},
    totalPosts: 0,
    totalPages:0,
    relatedPosts: [],
    searchedPosts: [],
    // tagPosts:[],
    tagPosts: {
      loading: false,
      error: null,
      posts: [],
      totalPages: 0,
      page:0,
      hasMore: true
    },
    loading: false,
    searchLoading: false,
    error: null,
    page: 0,
    hasMore: true
  },
  reducers: {
    resetTagPosts: (state) => {
      state.tagPosts = {
        loading: false,
        error: null,
        posts: [],
        totalPages: 0,
        page: 0,
        hasMore: true,
      };
    },
    clearPost: (state) => {
      state.post = {};
      state.loading = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllPosts.fulfilled, (state, action) => {
        console.log(state.page, 'page count is');
        state.loading = false;
        state.posts = [...state.posts, ...action.payload.posts];
        state.totalPosts = action.payload.total;
        state.totalPages = Math.ceil(action.payload.total / 10)
        if (state.page < state.totalPages) {
          state.page += 1;
        }
        state.hasMore = action.payload.posts.length > 0;
      })
      .addCase(getAllPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getRelatedPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRelatedPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.relatedPosts = action.payload;
      })
      .addCase(getRelatedPosts.rejected, (state, action) => {
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
      })
      .addCase(getSinglePost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSinglePost.fulfilled, (state, action) => {
        state.loading = false;
        state.post = action.payload;
      })
      .addCase(getSinglePost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getPostsByTagName.pending, (state) => {
        state.tagPosts.loading = true;
        state.tagPosts.error = null;
      })
      .addCase(getPostsByTagName.fulfilled, (state, action) => {
        state.tagPosts.loading = false;
        state.tagPosts.totalPages = Math.ceil(action.payload.total / 10)
        state.tagPosts.posts = [...state.tagPosts.posts, ...action.payload.posts];
        state.tagPosts.page += 1;
        state.tagPosts.hasMore = action.payload.posts.length > 0;
      })
      .addCase(getPostsByTagName.rejected, (state, action) => {
        state.tagPosts.loading = false;
        state.tagPosts.error = action.payload;
      });
  }
});
export const { resetTagPosts, clearPost } = postSlice.actions;
export default postSlice.reducer;
