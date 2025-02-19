import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux";
import store from "./store";
import Router from "./router/router"
import './index.css'


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
     <Provider store={store}>
           <Router />
     </Provider>
)

