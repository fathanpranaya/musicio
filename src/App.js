/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import LoginPage from './components/login_screen/LoginPage';
import firebase from 'firebase'
import HomePage from "./components/home_screen/HomePage";
import { Spinner, Header } from "./components/common";
import { TechPage } from "./components/tech_screen/TechPage";

// to disable the warning yellow box
console.disableYellowBox = true;

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: null,
        }
    }

    componentWillMount() {
        firebase.initializeApp(
            {
                apiKey: "AIzaSyDKqz0rj8FPomk6cgt44fVaQUsiJFxOj-4",
                authDomain: "millenuum-46a05.firebaseapp.com",
                databaseURL: "https://millenuum-46a05.firebaseio.com",
                projectId: "millenuum-46a05",
                storageBucket: "millenuum-46a05.appspot.com",
                messagingSenderId: "902822249057"
            }
        );

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({loggedIn: true});
            } else {
                this.setState({loggedIn: false});
            }
        });
    }

    _renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return <HomePage/>

            case false:
                return <LoginPage/>
            default:
                return (
                    <View>
                        <Header>Music IO</Header>
                        <Spinner size="large"/>
                    </View>
                );
        }
    }

    render() {
        return (
            //<View>
            // {this._renderContent()}
            // </View>
            <TechPage/>
        );
    }
}
