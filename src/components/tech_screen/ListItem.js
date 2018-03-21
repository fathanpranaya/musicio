import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    LayoutAnimation,
} from 'react-native';
import { CardSection } from "../common";
import { connect } from 'react-redux';
import * as actions from '../../actions';

class ListItem extends Component {
    constructor(props) {
        super(props);
    }

    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    _renderDescription() {
        const {library, expanded} = this.props;

        if (expanded) {
            return (
                <CardSection>
                    <Text style={{flex: 1}}>{library.description}</Text>
                </CardSection>
            );
        }
    }

    render() {
        const {id, title} = this.props.library;

        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this._renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
    }
});

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;

    return {expanded}
};

export default connect(mapStateToProps, actions)(ListItem);
// 1st args: mapStateToProp
// 2nd args: action creator function
