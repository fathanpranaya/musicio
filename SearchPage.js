'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ActivityIndicator,
  Image,
} from 'react-native';
import SearchResults from './SearchResults';

function urlForQueryAndPage (key, value, pageNumber) {
  const data = {
    api_key: '83e467704873341b0a646064f8104dc4',
    method: 'track.search',
    format: 'json',
  };
  data[key] = value;

  const queryString = Object.keys(data)
    .map(key => key + '=' + encodeURIComponent(data[key]))
    .join('&');

  return 'https://ws.audioscrobbler.com/2.0/?' + queryString;
}

export default class SearchPage extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
      isLoading: false,
      message: '',
    };
  }

  _onSearchTextChanged = (event) => {
    this.state.searchString = event.nativeEvent.text;
  }

  _handleResponse = (response) => {
    this.setState({ isLoading: false, message: ''});
    if (response.trackmatches.track.length > 0) {
      // console.log(response.trackmatches.track);
      this.props.navigator.push({
        title: 'Results',
        component: SearchResults,
        passProps: {track: response.trackmatches.track},
      });
    } else {
      this.setState({message: 'Song not recognized; please try again.'});
    }
  }

  _executeQuery = (query) => {
    console.log(query);
    this.setState({ isLoading: true });
    fetch(query)
      .then(results => results.json())
      .then(json => this._handleResponse(json.results))
      .catch(error =>
        this.setState({
          isLoading: false,
          message: 'Something bad happened ' + error
        }));
  }

  _onSearchPressed = () => {
    const query = urlForQueryAndPage('track', this.state.searchString, 1);
    this._executeQuery(query);
  }

  render() {
    const spinner = this.state.isLoading ? <ActivityIndicator size='large'/> : null;
    return (
      	<View style={styles.container}>
	        <Text style={styles.description}>
	          Search for favorite music!
	        </Text>
	        <View style={styles.flowRight}>
		      	<TextInput
		      		style={styles.searchInput}
              value={this.state.searchString}
              onChange={this._onSearchTextChanged}
		      		placeholder='Search by title or artist.'/>
		   		<Button
		   			onPress={this._onSearchPressed}
		   			color='#48BBEC'
		   			title='Go'
		   		/>
	   		</View>
	   		<Image source={require('./Resources/logo.png')} style={styles.image}/>
        {spinner}
        <Text style={styles.description}>{this.state.message}</Text>
      	</View>
    );
  }

}

const styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  flowRight: {
  	flexDirection: 'row',
  	alignItems: 'center',
  	alignSelf: 'stretch',
  },
  searchInput: {
	height: 36,
	padding: 4,
	marginRight: 5,
	flexGrow: 1,
	fontSize: 18,
	borderWidth: 1,
	borderColor: '#48BBEC',
	borderRadius: 8,
	color: '#48BBEC',
  },
  image: {
  	width: 300,
  	height: 138,
  },
});
