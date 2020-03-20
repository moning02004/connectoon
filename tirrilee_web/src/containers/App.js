import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MainView from '../components/MainView';
import FooterView from '../components/FooterView';
import Register from './Register';
import Login from './Login';
import { connect } from 'react-redux';


class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Route exact path="/" component={MainView} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                </BrowserRouter>
                <FooterView />
            </React.Fragment>
        )
    }
}

App = connect(undefined)(App);
export default App;