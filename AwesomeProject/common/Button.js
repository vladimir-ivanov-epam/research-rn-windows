import React, { Component } from 'react';
import { View, Text } from 'react-native';

import PropTypes from 'prop-types';

export default class Button extends Component {

    static propTypes = {
        text: PropTypes.string.isRequired,
        style: PropTypes.any
    };

    render() {
        return (<Text style={[styles.self, this.props.style]}>
            {this.props.text}
        </Text>);
    }


}

const styles = {
    self: {
        padding: 8,
        color: 'white',
        backgroundColor: '#94ff20',
        borderColor: 'black',
        borderWidth: 1
    }
}
