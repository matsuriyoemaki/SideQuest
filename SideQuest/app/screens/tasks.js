import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
const tableData = {
    tableHead: ['Tasks', 'Deadline', 'Completed'],
    tableData: [
        ['Bitcoin', '$44,331', '$839,702,328,904'],
        ['Ethereum', '$3000.9', '$359,080,563,225'],
        ['Tether', '$1', '$79,470,820,738'],
        ['BNB', '$413.44', '$69,446,144,361'],
        ['USD Coin', '$1', '$53,633,260,549'],
    ],
};




const Tasks = ({navigation}) => {
    const [data, setData] = useState(tableData);
    const [currentDate, setcurrentDate] = useState('')
    useEffect(() => {
 
    //Get Current Date
    var date = new Date().getDate();
 
    //Get Current Month
    var month = new Date().getMonth() + 1;
 
    //Get Current Year
    var year = new Date().getFullYear();
 
    //Get Current Time Hours
    var hours = new Date().getHours();
 
    //Get Current Time Minutes
    var min = new Date().getMinutes();
 
    //Get Current Time Seconds
    var sec = new Date().getSeconds();
 
    setcurrentDate(
        month + '/' + date + '/' + year + ' ' + hours + ':' + min
    )
    return () => {
 
  }
}, [])
    return (
        <View style={styles.container}>
            <Text style={styles.timeStyle}>
                {currentDate}
            </Text>
            <Button style={styles.button}
                title="Completed"
                onPress={() => navigation.navigate("Completed")}/>
            <Table borderStyle={{ borderWidth: 4, borderColor: 'teal' }}>
                <Row data={data.tableHead} style={styles.head} textStyle={styles.headText} />
                <Rows data={data.tableData} textStyle={styles.text} />
            </Table>
            <Button
                title="Create Task"
                onPress={() => navigation.navigate("CreateTask")}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: { flex: 1, padding: 10, justifyContent: 'center', backgroundColor: '#fff' },
    head: { height: 44, backgroundColor: 'darkblue' },
    headText: { fontSize: 20, fontWeight: 'bold' , textAlign: 'center', color: 'white' },
    text: { margin: 6, fontSize: 16, fontWeight: 'bold' , textAlign: 'center' },
    button: {width: '70%', backgroundColor: '#5cffecff', top: "70%", alignSelf: 'flex-end', marginTop: -5, position: 'absolute'},
    timeStyle: {fontSize: 50, textAlign:"center"}
})
export default Tasks;