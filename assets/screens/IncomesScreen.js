import React from 'react';
import {Text, View, StyleSheet} from 'react-native';


function IncomesScreen(props) {
 return (
  <View style={styles.container}><Text>Incomes screen</Text></View>
 );
}

const styles = StyleSheet.create({
    container:{flex:1,justifyContent:"center"}
})
export default IncomesScreen;