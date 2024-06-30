import { Stack, useRouter } from 'expo-router'
import React from 'react'
import { Button } from 'react-native'

export default function _layout() {
    const router = useRouter();
  return (
     <Stack screenOptions={{
        headerStyle:{
            backgroundColor:'red'
        }, 
        headerTintColor:'white'
     }}>

        <Stack.Screen name='index' options={{headerTitle:'Home',
            headerRight: () => <Button onPress={() => router.push('contact')}  title='Contact'/>
        }}/>
        <Stack.Screen name='about' options={{headerTitle:'About'}} />
        <Stack.Screen name='blog/index' options={{headerTitle:'Blog'}} />
        <Stack.Screen name='contact' options={{headerTitle:'Contact', presentation:'modal'}} />
        <Stack.Screen name='(drawer)' options={{headerShown:false}} />
      
     </Stack>
  )
}


