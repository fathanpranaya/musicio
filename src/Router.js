import React from 'react';
import LoginForm from "./components/LoginScreen";
import { StackNavigator, SwitchNavigator } from 'react-navigation';
import AuthLoadingScreen from "./components/AuthLoadingScreen";
import EmployeeListScreen from "./components/EmployeeListScreen";
import HomeScreen from "./components/HomeScreen";

const AppStack = StackNavigator({
    Home: {
        screen: HomeScreen
    }
});

const AuthStack = StackNavigator({
    Login: {
        screen: LoginForm
    }
});

export default SwitchNavigator(
    {
        App: AppStack,
        Auth: AuthStack,
        AuthLoading: AuthLoadingScreen
    },
    {
        initialRouteName: 'App',
    }
);
