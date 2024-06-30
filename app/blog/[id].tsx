import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react'
import { Text, View,StyleSheet, Button } from 'react-native';


export default function Blog() {
     
    const {id,author} = useLocalSearchParams();
    const router = useRouter();
    return (
        <>
          <Stack.Screen options={{headerTitle:`Article ${id}` }}/>
       <View style={styles.container}>
        <Text style={styles.text}>Blog Post Details Page {id}</Text>
        <Text style={styles.text}>Written by {author}</Text>
        <Button title='Go Back' onPress={() => router.back()} />

      </View>
        </>
      );
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