import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BlogDetails from "./components/BlogDetails";
import Requirements from "./pages/Requirements";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import PublicRoute from "./components/PublicRoute";
import ProtectedRoute from "./components/ProtectedRoute";
import UserProfile from "./pages/UserProfile";
import RelatedPosts from "./pages/RelatedPosts";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="flex flex-wrap max-w-6xl mx-auto px-4 sm:px-6 ">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/re"
              element={<Requirements />}
            />
            <Route
              path="/:id"
              element={<BlogDetails />}
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
              path="/profile"
              element={<ProtectedRoute><UserProfile /></ProtectedRoute>}
            />
            <Route
              path="/related-posts"
              element={<RelatedPosts />}
            />
          </Routes>

        </div>
        {/* <Footer />   */}
      </div>
    </BrowserRouter>
  );
}

export default App;
