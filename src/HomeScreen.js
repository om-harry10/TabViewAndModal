import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';


export default HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonStyle}>
      <Button title="Go to Circular tab view"  onPress={()=>navigation.navigate('Circular Tab')} />
      </View>

      <View style={styles.buttonStyle}>
      <Button title="Go to Modal Screen" onPress={()=>navigation.navigate('Custom Swipe Modal')} />
      </View>
      
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonStyle:{
        marginVertical:10
    }
  });