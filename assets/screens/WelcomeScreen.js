import React from 'react';
import {View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

function WelcomeScreen({navigation}) {

 return (
    <View style={styles.container}>
    <LottieView
     autoPlay
     style={{
        width: 300,
        top:-15
      }}
        onAnimationFinish={()=>navigation.navigate('Main')}
      loop={false} 
       source={require('../src/meeco.json')}
   />
 </View>
);
}

const styles = StyleSheet.create({
container:{
   width: "100%",
   flex: 1,
   justifyContent:"center",
   alignItems: "center"
}
})
export default WelcomeScreen;