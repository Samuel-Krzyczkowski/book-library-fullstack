import "./index.css";
import Header from "./components/Header";
import Library from "./pages/Library";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Reviews from "./pages/Reviews";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
