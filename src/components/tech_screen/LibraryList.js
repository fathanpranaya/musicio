import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.libraries);
    }

    _renderRow(library) {
        return <ListItem library={library}/>;
    }

    render() {
        return (
            <ListView
                dataSource={this.dataSource}
                renderRow={this._renderRow}
            />
        );
    }
}

const mapStateToProps = state => {
    return {libraries: state.libraries};
};

export default connect(mapStateToProps)(LibraryList);
// weird syntax: first call connect() and then call LibraryList function :v
