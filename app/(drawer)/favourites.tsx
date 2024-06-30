
import { useRouter } from 'expo-router';
import React from 'react'
import { Text, View,StyleSheet, Button } from 'react-native';


export default function FavouritesScreen() {


    return (
       <View style={styles.container}>
        <Text style={styles.text}>Favourites Page</Text>
        
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
  