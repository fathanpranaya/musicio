/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
      isLoading: false,
      message: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Im the HomePage component</Text>
        <Text>HAHAHAHA</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
  },
});
