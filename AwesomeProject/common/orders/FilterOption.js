import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from "../Button";

export default class FilterOption extends Component {

    render() {
        return (<View style={{ flexDirection: 'row', alignItems: 'center', margin: 8 }}>
            <Text style={{ color: 'black', marginLeft: 48, marginRight: 48 }}>
                Filter Options
            </Text>
            <Button text={'Show/Hide'}/>
        </View>);
    }
}
