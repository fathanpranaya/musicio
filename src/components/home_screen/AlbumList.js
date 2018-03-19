import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
import { Button } from "../common";
import firebase from 'firebase';

export default class AlbumList extends Component {
    constructor(props) {
        super(props);
        this.state = {albums: []};
    }

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this._handleResponse(response));
    }

    _handleResponse(response) {
        return this.setState({albums: response.data});
    }

    _renderAlbums() {
        return this.state.albums.map(album =>
            <AlbumDetail
                key={album.title}
                album={album}
            />
        );
    }

    render() {
        return (
            <ScrollView style={{marginBottom: 220}}>
                {this._renderAlbums()}
            </ScrollView>
        );
    }
}

