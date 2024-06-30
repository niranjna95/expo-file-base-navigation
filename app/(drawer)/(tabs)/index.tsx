
import { useRouter } from 'expo-router';
import React from 'react'
import { Text, View,StyleSheet, Button } from 'react-native';


export default function Feed() {

    const router = useRouter();
    return (
       <View style={styles.container}>
        <Text style={styles.text}>Feed Page</Text>
      </View>);
}



const styles = StyleSheet.create({

    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    text:{
      fontSize:30
    }
   
  })
  