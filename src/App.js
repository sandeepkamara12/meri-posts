import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./components/Post";
import BlogDetails from "./components/BlogDetails";
import Requirements from "./pages/Requirements";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import PublicRoute from "./components/PublicRoute";
import ProtectedRoute from "./components/ProtectedRoute";
import UserProfile from "./pages/UserProfile";

function App() {


  return (
    <Provider store={store}>
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
              element={<ProtectedRoute><BlogDetails /></ProtectedRoute>}
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
          </Routes>

        </div>
        {/* <Footer />   */}
      </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
