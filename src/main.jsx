<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/Stylescommon/styles.scss";
import { Provider } from "react-redux";
import { store } from "./App/store.js";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
=======
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/styles.scss'
import { Provider } from 'react-redux'
import store from './App/store.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
		<React.StrictMode>
			<Provider store={store}>
				<App/>
			</Provider>
		</React.StrictMode>,
)
>>>>>>> Phase-Test
