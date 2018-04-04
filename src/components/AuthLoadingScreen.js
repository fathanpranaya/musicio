import React, {Component} from 'react';
import {View, StatusBar, ActivityIndicator, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import firebase from "firebase";

class AuthLoadingScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: null,
        };
    }

    bootstrapAsync() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({loggedIn: true});
            } else {
                this.setState({loggedIn: false});
            }
        });

        const userToken = this.state.loggedIn;
        console.log('AuthLoadingScreen: ', userToken);
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    };

    componentDidMount() {
        this.bootstrapAsync();
    }

    componentWillUpdate(nextProps, nextState) {

    }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator/>
                <StatusBar barStyle="default"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default AuthLoadingScreen;
