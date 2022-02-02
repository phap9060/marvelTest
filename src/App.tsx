import { RouterApp } from "./routes";
import {GlobalStyle} from './GlobalFile'
import { store } from './context/configureStore'
import { Provider } from 'react-redux'

function App() {
  return (
  <Provider store={store}>
    <RouterApp />
    <GlobalStyle/>
  </Provider>);
}

export default App;
