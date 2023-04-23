import React, {useState} from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
const tableData = {
    tableHead: ['Rewards', 'Priority'],
    tableData: [
        ['Bitcoin', '$44,331'],
        ['Ethereum', '$3000.9'],
        ['Tether', '$1'],
        ['BNB', '$413.44'],
        ['USD Coin', '$1'],
    ],
};
const Rewards = ({navigation}) => {
    const [data, setData] = useState(tableData);
    return (
        
        <View style={styles.container}>
            <Table borderStyle={{ borderWidth: 4, borderColor: 'teal' }}>
                <Row data={data.tableHead} style={styles.head} textStyle={styles.headText} />
                <Rows data={data.tableData} textStyle={styles.text} />
            </Table>
            <Button
                title="Create Reward"
                onPress={() => navigation.navigate("CreateReward")}/>
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
export default Rewards