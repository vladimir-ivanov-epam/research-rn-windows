import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Header extends Component {

    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.label}>
                    Anadarko Field Inspection
                </Text>
            </View>
        );
    }
}

const styles = {
    header: {
        backgroundColor: '#00F',
        padding: 16
    },
    label: {
        color: '#FFF',
        marginLeft: 32,
        flexGrow: 1
    }
};
