import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { initLocalStorage } from "./utils/storage";
import { mockData } from "./utils/mock-data";
import { CssBaseline, StyledEngineProvider } from "@mui/material";

initLocalStorage(mockData);

ReactDOM.render(
	<React.StrictMode>
		<StyledEngineProvider injectFirst>
			<CssBaseline />
			<App />
		</StyledEngineProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
