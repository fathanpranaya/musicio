import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../../reducers';
import { Header } from "../common";
import LibraryList from './LibraryList';

const store = createStore(reducers);
const TechPage = () => {
    return (
        <Provider store={store}>
            <View style={{flex: 1}}>
                <Header>Tech Stack</Header>
                <LibraryList/>
            </View>
        </Provider>

    );
};

const styles = StyleSheet.create({});

export { TechPage };