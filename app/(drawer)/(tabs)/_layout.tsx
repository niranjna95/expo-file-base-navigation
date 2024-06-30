import { Feather } from '@expo/vector-icons'
import { DrawerToggleButton } from '@react-navigation/drawer'
import { Tabs } from 'expo-router'
import React from 'react'

export default function _layout() {
  return (
<Tabs screenOptions={{headerLeft: () => <DrawerToggleButton/>}}>
    <Tabs.Screen name='index' options={{
        tabBarIcon:({color}) =>{
            return <Feather name='list' size={24} color={color} />
        },
        tabBarLabel:'Feed',
         headerTitle:'Feed'
    }} />
    <Tabs.Screen name='profile' options={{
        tabBarIcon:({color}) =>{
            return <Feather name='user' size={24} color={color} />
        },
        tabBarLabel:'Feed',
        headerTitle:'Prifile'
    }}/>
</Tabs>
  )
}
