import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import localforage from 'localforage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// const authRoutes = ['/gameplay', '/gameover'];
// const publicRoutes = ['/'];

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
		this.checkLogin();
	}

	checkLogin() {
	
	}

	render() {
		// muiTheme={getMuiTheme(darkBaseTheme)}
		return (
			<MuiThemeProvider key="themeProvider">
				<div className="container" key="container">
					{this.props.children}
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;
