import ReactDOM from 'react-dom/client'
import App from "./routes";

import "./styles/index.css"
import { TokenProvider } from './utils/contexts/token';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <TokenProvider>
    <ToastContainer />
    <App />
  </TokenProvider>,
)
