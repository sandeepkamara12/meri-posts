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

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="flex flex-wrap max-w-6xl mx-auto px-4 sm:px-6 ">
          <Routes>

            {/* Public Routes */}
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/re"
              element={<Requirements />}
            />
            <Route
              path="/login"
              element={<PublicRoute><Login /></PublicRoute>}
            />
            <Route
              path="/register"
              element={<PublicRoute><Register /></PublicRoute>}
            />
            <Route
              path="/forgot-password"
              element={<PublicRoute><ForgotPassword /></PublicRoute>}
            />
            <Route
              path="/tag-posts"
              element={<TagPosts />}
            />
             <Route
              path="/post/:id"
              element={<BlogDetails />}
            />


            {/* User Routes */}
            <Route element={<ProtectedRoute allowRoles={['user']} />}>
              <Route path="/" element={<UserLayout />}>
                <Route path="/profile" element={<UserProfile />} />
                <Route path="/user-posts" element={<UserPosts />} />
              </Route>
            </Route>


            {/* Admin Routes */}
            <Route element={<ProtectedRoute allowRoles={['admin']} />}>
              <Route path="/admin" element={<AdminLayout />}>
                {/* <Route path="/profile" element={<AdminProfile />} /> */}
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
      </div>
    </BrowserRouter>
  );
}

export default App;
