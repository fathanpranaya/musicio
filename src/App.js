import React, { Component } from 'react';
import { View } from 'react-native';
import LoginPage from './components/unused/login_screen/LoginPage';
import firebase from 'firebase'
import HomePage from "./components/HomeScreen";
import { Spinner, Header } from "./components/common";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import LoginForm from './components/LoginScreen';
import ReduxThunk from 'redux-thunk';
import Router from "./Router";
import SocialLoginScreen from './components/SocialLoginScreen';

// AWS Library
import Amplify, { Auth } from 'aws-amplify';
import aws_export from './aws-exports';

Amplify.configure(aws_export);

// to disable the warning yellow box
console.disableYellowBox = true;


const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: null,
        };
        this.store = createStore(reducers);
    }

    componentDidMount() {
        Auth.signIn('fathanpranaya', 'F@th@n1994')
            .then(user => console.log('Cognito Token: ', user.signInUserSession.accessToken.jwtToken))
            .catch(err => console.log(err));
    }

    componentWillMount() {
        firebase.initializeApp(
            {
                apiKey: 'AIzaSyDKqz0rj8FPomk6cgt44fVaQUsiJFxOj-4',
                authDomain: 'millenuum-46a05.firebaseapp.com',
                databaseURL: 'https://millenuum-46a05.firebaseio.com',
                projectId: 'millenuum-46a05',
                storageBucket: 'millenuum-46a05.appspot.com',
                messagingSenderId: '902822249057'
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
                return <HomePage/>;

            case false:
                return <LoginForm/>;
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
            <SocialLoginScreen/>
        );
    }
}
