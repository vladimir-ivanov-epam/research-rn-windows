import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Header from "./Header";
import Orders from "./Orders";

export default class Home extends Component {

    render() {
        return (
            <View style={{ backgroundColor: '#C3C3C3', flexGrow: 1 }}>
                <Header/>
                <Orders />
            </View>
        )
    }
}
