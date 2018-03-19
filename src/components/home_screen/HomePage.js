/* @flow */

import React, { Component } from 'react';
import { View } from 'react-native';
import AlbumList from './AlbumList';
import { Header, Button } from "../common";
import firebase from "firebase";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View>
                <Header>Home</Header>
                <View style={{height: 50}}>
                    <Button
                        onPress={() => firebase.auth().signOut()}>
                        Log out
                    </Button>
                </View>

                <AlbumList/>
            </View>
        );
    }
}

