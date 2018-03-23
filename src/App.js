import React, { Component } from 'react';
import { View } from 'react-native';
import LoginPage from './components/login_screen/LoginPage';
import firebase from 'firebase'
import HomePage from "./components/home_screen/HomePage";
import { Spinner, Header } from "./components/common";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import ReduxThunk from 'redux-thunk';

// AWS Library
import Amplify from 'aws-amplify';
import { Auth } from 'aws-amplify';
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
        // const for dummy user
        Auth.signUp({
            username: 'JanHitler',
            password: 'J@n1234567',
            attributes: {
                email: 'jan.feuerbach@millenuum.com',  // optional
                phone_number: '+821034021928',      // optional - E.164 number convention
                // other custom attributes
            },
            validationData: []  //optional
        })
            .then(data => console.log(data))
            .catch(err => alert(err.message));

        // Collect confirmation code, then
        // Auth.confirmSignUp('fathanganteng', code)
        //     .then(data => console.log(data))
        //     .catch(err => console.log(err));
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
                return <LoginPage/>;
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
            <Provider store={store}>
                <LoginForm/>
            </Provider>
        );
    }
}
