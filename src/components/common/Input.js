import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const Input = ({label, onChangeText, placeholder, secureTextEntry, value}) => {
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.labelStyle}>{label}</Text>
            <TextInput
                style={styles.inputStyle}
                onChangeText={onChangeText}
                value={value}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                autoCorrect={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputStyle: {
        fontSize: 18,
        lineHeight: 23,
        paddingHorizontal: 5,
        flex: 2,
        color: '#000',
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1,
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },

});

export { Input };
