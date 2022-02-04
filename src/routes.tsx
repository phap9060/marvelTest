import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { ComicStore } from "./pages/Store/ComicStore";
import { CartPage } from "./pages/Cart/CartPage";
import { ComicPage } from "./pages/ComicPage/ComicPage";
export function RouterApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<ComicStore />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/comic" element={<ComicPage />} />
      </Routes>
    </Router>
  );
}
