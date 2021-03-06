import React from 'react';
import { View, Text } from 'react-native';

const Header = ({children}) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}> {children} </Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative',
    },
    textStyle: {
        fontSize: 20,
        color: '#000000',
    }
}

export { Header };
