import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { GlobalStyle } from 'assets/global.Styles';
import { App } from './components/App';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    
    <BrowserRouter basename="/LearnLingo">
      <Provider store={store}>
      <GlobalStyle />
        <App />  
        </Provider>
        </BrowserRouter>
        
  </React.StrictMode>
);
