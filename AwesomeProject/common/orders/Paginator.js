import React, { Component } from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';

import PropTypes from 'prop-types';

const size = 24;

export default class Paginator extends Component {

    static propTypes = {
        currentPage: PropTypes.number.isRequired,
        onPageChanged: PropTypes.func.isRequired
    };

    render() {
        return (
            <View style={{ flexDirection: 'row', marginLeft: 16 }}>
                <TouchableOpacity onPress={() => {
                        this.props.onPageChanged(this.props.currentPage - 1);
                    }
                }>
                    <Image source={require('./leftarrow.png')} style={{width: size, height: size}}/>
                </TouchableOpacity>
                <TextInput style={{ backgroundColor: 'white' }}
                           value={''+this.props.currentPage}
                />
                <Text style={{ marginLeft: 16 }}>
                    {`of ${this.props.pagesCount}`}
                </Text>
                <TouchableOpacity onPress={() => {
                    this.props.onPageChanged(this.props.currentPage + 1);
                }
                }>
                    <Image source={require('./rightarrow.png')} style={{width: size, height: size}}/>
                </TouchableOpacity>
            </View>
        )
    }
}
