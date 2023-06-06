import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import {Toaster} from 'react-hot-toast'

import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <Provider store={store}>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <App />
    </Provider>
);
