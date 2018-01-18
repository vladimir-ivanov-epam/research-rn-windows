import React, { Component } from 'react';
import { Text, View } from 'react-native';
import FilterOption from "./orders/FilterOption";
import PropTypes from 'prop-types';

import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import TableLabel from "./orders/TableLabel";
import Paginator from "./orders/Paginator";
import Button from "./Button";

export default class Orders extends Component {

    static propTypes = {
        columns: PropTypes.number
    };

    state = { };

    createRow = (item) => {
        return [
            item.inspect ? this.inspectButton() : '' ,
            item.status,
            `${item.workOrder1}\n${item.workOrder2}\n${item.workOrder3}`,
            `${item.facilityId}\n${item.facilityName}`,
            this.buttons()
        ];
    };

    setPage = (page) => {
        this.setState({ page });
    };

    status = () => ( <TableLabel label={'Status'} />);
    workOrder = () => ( <TableLabel label={'Work Order'} />);
    facility = () => ( <TableLabel label={'Facility'} />);
    paginator = (currentPage) => ( <Paginator pagesCount={2} currentPage={currentPage} onPageChanged={(page) => this.setPage(page)} /> );
    buttons = () => ( <Button text={'Details'} style={{ margin: 16, backgroundColor: '#5950ff' }}/>);
    inspectButton = () => ( <Button text={'Inspect' } style={{ margin: 16 }}/>);


    mockData1 = require('../mockData1.json');
    mockData2 = require('../mockData2.json');

    componentWillMount() {
        this.setPage(1);
    }

    render() {
        console.log(`[Orders] this.state.page = ${JSON.stringify(this.state.page)}`);
        if (this.state.page === undefined) {
            return <View />
        }
        let tableHead = ['', this.status(), this.workOrder(), this.facility(), this.paginator(this.state.page)];


        let rawData = this.state.page === 1 ? this.mockData1 : this.mockData2;

        let tableData = rawData.map(item => this.createRow(item));

        return (<View style={{ flexDirection: 'column', flexGrow: 1 }}>
            <FilterOption/>
            <Table style={{ flexGrow: 1 }}>
                <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
                <Rows data={tableData} style={styles.oddRow} textStyle={styles.text}/>
            </Table>
        </View>);
    }
}

const styles = {
    head: { height: 40, backgroundColor: '#ff501d' },
    text: { marginLeft: 5 },
    oddRow: { minHeight: 30 },
    evenRow: { minHeight: 30, backgroundColor: '#f1f8ff' }
}
