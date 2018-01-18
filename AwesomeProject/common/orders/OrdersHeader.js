import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Paginator from "./Paginator";

export default class OrdersHeader extends Component {

    render() {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 8, backgroundColor: '#F00' }}>
                <Text style={styles.label}>
                    Status
                </Text>
                <Text style={styles.label}>
                    Work Order
                </Text>
                <Text style={styles.label}>
                    Facility
                </Text>
                <Paginator pagesCount={2}/>
            </View>);
    }
}

const styles = {
    label: {
        color: 'white',
        fontSize: 12
    }
};
