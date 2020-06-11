import React from 'react';

import { Grid, Paper} from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import Welcome from './components/Welcome';

import './style.css';

import Header from './components/Header';
import Content from './components/Content';

function App() {
	const [darkMode, setDarkMode] = React.useState(false);
	const [windowNo, setWindowNo] = React.useState(0);

	const theme = createMuiTheme({
		palette: {
			type: darkMode ? "dark" : "light",
		},
	});

	return (
		<Welcome/>
		);
}

export default App;
