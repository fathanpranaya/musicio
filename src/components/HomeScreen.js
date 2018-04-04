/* @flow */

import React, { Component } from 'react';
import { View } from 'react-native';
import AlbumList from './home_screen/AlbumList';
import { Button } from "./common/index";
import firebase from "firebase";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static navigationOptions = {
        title: 'Home'
    };

    onSignOutButtonPress() {
        firebase.auth().signOut()
            .then(res => this.props.navigation.navigate('Auth'))
            .catch(err => console.log('Firebase Error: ', err));

    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{height: 50}}>
                    <Button
                        onPress={() => this.onSignOutButtonPress()}>
                        Log out
                    </Button>
                </View>

                <AlbumList/>
            </View>
        );
    }
}

