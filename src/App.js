import React from 'react';

import { Grid, Paper} from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"

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
		<ThemeProvider theme={theme}>
			<Paper>
				<Grid container direction="column">
	        <Grid item>
	          <Header darkMode={darkMode} setDarkMode={setDarkMode} setWindowNo={setWindowNo}/>
	        </Grid>
	        <Grid item container>
	          <Grid item xs={false} sm={2} lg={3}/>
	          <Grid item xs={12} sm={8} lg={6}>
	            <Content windowNo={windowNo} darkMode={darkMode}/>
	          </Grid>
	          <Grid item xs={false} sm={2} lg={3}/>
	        </Grid>
	      </Grid>
			</Paper>
		</ThemeProvider>
		);
}

export default App;
