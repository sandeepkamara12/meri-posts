import axios from "axios";
// const access_token = localStorage.getItem('token');
const axiosInstance = axios.create({
  baseUrl:process.env.REACT_APP_URL,
  // timeout : 1000,
  // headers: {
  //   Authorization: `Bearer ${access_token}`,
  //   "Content-Type": "application/json",
  // }, 
})
// axiosInstance.interceptors.request.use(
//   config=>({
//     url: '/user',
//     method: 'get',
//   })
// )

export default axiosInstance;