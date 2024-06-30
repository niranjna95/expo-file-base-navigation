
import { useRouter } from 'expo-router';
import React from 'react'
import { Text, View,StyleSheet, Button } from 'react-native';


export default function Blog() {

    const router = useRouter();
    return (
       <View style={styles.container}>
        <Text style={styles.text}>Blog Page</Text>
        <Button title='Go To Blog 1' onPress={() => router.push('/blog/1')} />
         <Button title='Go To Blog 2' onPress={() => router.push('/blog/2')} />
         <Button title='Go To Blog 3' onPress={() => router.push('/blog/3?author=john')} />
         <Button title='Go Back' onPress={() => router.back()} />

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
  