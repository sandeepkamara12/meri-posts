import "./App.css";
import Header from "./components/common/Header";
// import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BlogDetails from "./components/post/details/BlogDetails";
import Requirements from "./pages/Requirements";
import Login from "./components/common/Login";
import Register from "./components/common/Register";
import ForgotPassword from "./components/common/ForgotPassword";
import PublicRoute from "./routes/PublicRoute";
import ProtectedRoute from "./routes/ProtectedRoute";
import UserProfile from "./pages/UserProfile";
import TagPosts from "./pages/TagPosts";
import NotFound from "./components/common/NotFound";
import Cookiee from "./components/common/Cookiee";
import UserLayout from "./layouts/user/UserLayout";
import AdminLayout from "./layouts/admin/AdminLayout";
import UserPosts from "./components/user/UserPosts";
import Dashboard from "./pages/admin/Dashboard";
import Posts from "./pages/admin/Posts";
import Users from "./pages/admin/Users";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>

          {/* Public Routes: Anyone can access either loggedIn or not */}
          <Route path="/" element={<UserLayout />}>
            <Route
              index
              element={<Home />}
            />
            <Route
              path="/post/:id"
              element={<BlogDetails />}
            />
            <Route
              path="/re"
              element={<Requirements />}
            />
            <Route
              path="/tag-posts"
              element={<TagPosts />}
            />
          </Route>

          {/* Restricted Public Routes: Could not be access after loggedIn */}
          <Route element={<PublicRoute />}>
            <Route path="/" element={<UserLayout />}>
              <Route
                path="/login"
                element={<Login />}
              />
              <Route
                path="/register"
                element={<Register />}
              />
              <Route
                path="/forgot-password"
                element={<ForgotPassword />}
              />
            </Route>
          </Route>

          {/* Protected Routes: Could be accessible after loggedIn only */}
          {/* User Routes */}
          <Route element={<ProtectedRoute allowRoles={['user']} />}>
            <Route path="/" element={<UserLayout />}>
              <Route path="profile" element={<UserProfile />} />
              <Route path="user-posts" element={<UserPosts />} />
            </Route>
          </Route>

          {/* Admin Routes */}
          <Route element={<ProtectedRoute allowRoles={['admin']} />}>
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="posts" element={<Posts />} />
              <Route path="users" element={<Users />} />
            </Route>
          </Route>

          {/* Not Found */}
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>

      </div>
      {/* <Footer />   */}
      <Cookiee />
    </BrowserRouter>
  );
}

export default App;
