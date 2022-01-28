import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import {Home} from './pages/Home/Home'
import { Store } from "./pages/Store/ComicStore";
export function RouterApp() {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
            <Routes>
                <Route path='/store' element={<Store/>}/>
            </Routes>
        </Router>
    )
}