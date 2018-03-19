import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Card, CardSection, Button, Input, Spinner } from "../common";
import firebase from 'firebase';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: '',
            loading: false,
        }
    }

    _onButtonPress() {
        const {email, password} = this.state;

        this.setState({error: '', loading: true});

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this._onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this._onLoginSuccess.bind(this))
                    .catch(this._onLoginFail.bind(this));
            });
    }

    _onLoginFail() {
        this.setState({
            error: 'Authentication Failed',
            loading: false,
        })
    }

    _onLoginSuccess() {
        this.setState({
            error: '',
            email: '',
            password: '',
            loading: false,
        });
    }

    _renderButton() {
        if (this.state.loading) {
            return <Spinner size="small"/>;
        }
        return (
            <Button onPress={this._onButtonPress.bind(this)}>
                Log in
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        value={this.state.email}
                        onChangeText={email => this.setState({email})}
                        label='Email'
                        placeholder="user@email.com"
                    />
                </CardSection>

                <CardSection>
                    <Input
                        value={this.state.password}
                        onChangeText={password => this.setState({password})}
                        label='Password'
                        placeholder="*********"
                        secureTextEntry
                    />
                </CardSection>

                <Text style={styles.errorText}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this._renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    errorText: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
    }
});

