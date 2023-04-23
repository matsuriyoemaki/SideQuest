import React, {useState} from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
const tableData = {
    tableHead: ['Crypto Name', 'Value', 'Mkt Cap'],
    tableData: [
        ['Bitcoin', '$44,331', '$839,702,328,904'],
        ['Ethereum', '$3000.9', '$359,080,563,225'],
        ['Tether', '$1', '$79,470,820,738'],
        ['BNB', '$413.44', '$69,446,144,361'],
        ['USD Coin', '$1', '$53,633,260,549'],
    ],
};
const Completed = ({navigation}) => {
    const [data, setData] = useState(tableData);
    return (
        <View style={styles.container}>
            <Table borderStyle={{ borderWidth: 4, borderColor: 'teal' }}>
                <Row data={data.tableHead} style={styles.head} textStyle={styles.headText} />
                <Rows data={data.tableData} textStyle={styles.text} />
            </Table>
        </View>
    )
}
const styles = StyleSheet.create({
    container: { flex: 1, padding: 10, justifyContent: 'center', backgroundColor: '#fff' },
    head: { height: 44, backgroundColor: 'darkblue' },
    headText: { fontSize: 20, fontWeight: 'bold' , textAlign: 'center', color: 'white' },
    text: { margin: 6, fontSize: 16, fontWeight: 'bold' , textAlign: 'center' },
    button: {width: '70%', backgroundColor: '#5cffecff', top: "70%", alignSelf: 'flex-end', marginTop: -5, position: 'absolute'}
})
export default Completed;