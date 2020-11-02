import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

function HomeScreen(props) {
 return (
  <View style={styles.container}>
      <Text>Home screen</Text>
  </View>
 );
}

const styles = StyleSheet.create({
 container:{flex:1,justifyContent:"center"}
})
export default HomeScreen