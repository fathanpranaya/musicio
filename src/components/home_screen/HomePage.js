/* @flow */

import React, { Component } from 'react';
import { View } from 'react-native';
import AlbumList from './AlbumList';
import { Header } from "../common";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View>
                <Header>Home</Header>
                <AlbumList/>
            </View>
        );
    }
}

