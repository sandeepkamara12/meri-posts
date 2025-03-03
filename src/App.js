import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./components/Post";
import BlogDetails from "./components/BlogDetails";
import Requirements from "./pages/Requirements";

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
          </Routes>

        </div>
        <Footer />  
      </div>
    </BrowserRouter>
  );
}

export default App;
