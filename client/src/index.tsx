import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/store";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<StyledEngineProvider injectFirst>
				<CssBaseline />
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</StyledEngineProvider>
		</Provider>

	</React.StrictMode>,
	document.getElementById('root')
);
