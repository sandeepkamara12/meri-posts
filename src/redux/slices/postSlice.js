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

// export const getPostsByTags = createAsyncThunk("posts/getPostsByTags", async({tags, userId}, {rejectWithValue})=>{
//   try {
//     //Getting posts via all the tags and finally merge them in single array of objects and also remove the duplicates entries and then return.
//     const postsByAllTags = tags && tags?.length >0 && tags?.map(tag=>axios.get(`${process.env.REACT_APP_URL}posts/tag/${tag}?limit=0`))
//     const responses = await Promise.all(postsByAllTags);
//     const allPosts = responses.flatMap((res) => res.data.posts);
//     let postsByUser = allPosts.filter(post=>post?.userId === userId);
//     // .filter((post, index, self)=>self.findIndex(p=>p.id === post.id) === index);
//     // console.log(allPosts, 'sortedPosts');
//     // let sortedPosts = allPosts.filter((post, index, self)=>post?.userId === userId);
//     // console.log(postsByUser, 'sortedPosts');
//     // return sortedPosts;
//     // const sortedPosts = allPosts.sort((a, b) => {
//     //   const aMatches = a.tags.filter(tag => tags.includes(tag)).length;
//     //   const bMatches = b.tags.filter(tag => tags.includes(tag)).length;

//     //   if (a.userId === userId && b.userId !== userId) return -1;
//     //   if (b.userId === userId && a.userId !== userId) return 1;

//     //   return bMatches - aMatches; // More matching tags come first
//     // });
//     // console.log(sortedPosts, 'hola dear');

//     // return sortedPosts;
//   } catch (error) {
//     return rejectWithValue(
//       error?.response?.data?.message || "Error while getting posts by tags."
//     );
//   }
// })


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
// export const getPostsByTags = createAsyncThunk(
//   "posts/getPostsByTags",
//   async ({ tags, fetchMore }, { getState, dispatch, rejectWithValue }) => {
//     try {
//         const { posts } = getState().posts;

//         if (!posts || posts.length === 0) {
//             return [];
//         }

//         const relatedPosts =
//             posts &&
//             posts?.length > 0 &&
//             posts?.filter(post => 
//             post.tags.some((tag) => tags.includes(tag))
//             );
//             console.log(relatedPosts, "related posts");
//             if (relatedPosts.length > 3 && !fetchMore) {
//                 return relatedPosts;
//             }
//             let page = Math.floor(posts.length / 10) + 1;
//             await dispatch(getAllPosts(page));
//             return await dispatch(getPostsByTags(tags)).unwrap();
        
//     } catch (error) {
//       return rejectWithValue(
//         error?.response?.data?.message || "Error while getting posts by tags."
//       );
//     }
//   }
// );

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
    post:{},
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
      });
  }
});
// export const {reducer} = postSlice.actions;
export default postSlice.reducer;
