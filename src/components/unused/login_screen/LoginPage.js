import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from "../../common/index";
import LoginForm from "./LoginForm";

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }


    render() {
        return (
            <View>
                <Header>Login</Header>
                <LoginForm/>
            </View>

        );
    }
}
