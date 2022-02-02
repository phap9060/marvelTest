import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import {Home} from './pages/Home/Home'
import { ComicStore } from "./pages/Store/ComicStore";
import {CartPage} from './pages/Cart/CartPage'
export function RouterApp() {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
            <Routes>
                <Route path='/store' element={<ComicStore/>}/>
            </Routes>
            <Routes>
                <Route path='/cart' element={<CartPage/>} />
            </Routes>
        </Router>
    )
}