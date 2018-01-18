import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class TableLabel extends Component {

    render() {
        return (<Text style={styles.self}>
            {this.props.label}
        </Text>)
    }

}


const styles = {
    color: '#FFF',
    padding: 8,
    fontSize: 12
};
