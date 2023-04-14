import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import ThemeContextProvider from "./context/theme-context-provider";
//App theme nin arasında olmalı çünkü props.children özlliği için yani child konumunda olsun diye 
ReactDOM.createRoot(document.getElementById("root")).render(

 <React.StrictMode>
   <Provider store={store}>
<ThemeContextProvider>
<App />
</ThemeContextProvider>
  </Provider>
 </React.StrictMode>
);
