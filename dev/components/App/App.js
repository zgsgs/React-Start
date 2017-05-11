import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from '/material-ui/style/MuiThemeProvider';
import MyAwesomeReactComponent from 'MyAwesomeReactComponent';

const App = () => (
    <MuiThemeProvider>
        <MyAwesomeReactComponent />
    </ MuiThemeProvider>
);

var app = document.getElementById('app');

ReactDOM.render(
    <App />,
    app
);

export default App;