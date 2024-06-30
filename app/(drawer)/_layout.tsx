import React, { useEffect } from 'react'
import { Drawer } from 'expo-router/drawer';
import  { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Feather,Ionicons,MaterialIcons } from '@expo/vector-icons';
import { router, usePathname } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';

const CustomDrawerContnet = (props:any) =>{
      const pathName = usePathname();

      useEffect(() =>{
        
      },[pathName])

    return(
 <DrawerContentScrollView {...props}>
    <View style={styles.userInfoWrapper}>
        <Image source={require('../../assets/images/user.jpg')} height={60} width={60}
          style={styles.userImg}
        />
        <View style={styles.userDetailsWrapper}>
           <Text style={styles.userName}>John Deo</Text>
           <Text style={styles.userEmail}>john@gmail.com</Text>
        </View>
    </View>
     <DrawerItem
        icon={({color,size}) => (
            <Feather name='list' size={size} color={pathName === "/" ? "#fff" :"#000"} />
        )}
        label={"Feed"}
        labelStyle={[styles.lableIcon,{color:pathName === "/" ? "#fff" :"#000"}]}
        style ={{backgroundColor: pathName === "/" ? "#333" : "#fff"}}
        onPress={() => {
            router.push('/(tabs)')
        }}
     />
      <DrawerItem
        icon={({color,size}) => (
            <Feather name='user' size={size} color={pathName === "/profile" ? "#fff" :"#000"} />
        )}
        label={"Profile"}
        labelStyle={[styles.lableIcon,{color:pathName === "/profile" ? "#fff" :"#000"}]}
        style ={{backgroundColor: pathName === "/profile" ? "#333" : "#fff"}}
        onPress={() => {
            router.push('/(tabs)/profile')
        }}
     />
       <DrawerItem
        icon={({color,size}) => (
            <MaterialIcons name='favorite-outline' size={size} color={pathName === "/favourites" ? "#fff" :"#000"} />
        )}
        label={"Favourites"}
        labelStyle={[styles.lableIcon,{color:pathName === "/favourites" ? "#fff" :"#000"}]}
        style ={{backgroundColor: pathName === "/favourites" ? "#333" : "#fff"}}
        onPress={() => {
            router.push('/favourites')
        }}
     />
      <DrawerItem
        icon={({color,size}) => (
            <Ionicons name='settings-outline' size={size} color={pathName === "/settings" ? "#fff" :"#000"} />
        )}
        label={"Settings"}
        labelStyle={[styles.lableIcon,{color:pathName === "/settings" ? "#fff" :"#000"}]}
        style ={{backgroundColor: pathName === "/settings" ? "#333" : "#fff"}}
        onPress={() => {
            router.push('/settings')
        }}
     />
 </DrawerContentScrollView>
 )
}

export default function Layout() {
  return (
   <Drawer drawerContent={(props) => <CustomDrawerContnet {...props}/>} screenOptions={{headerShown:false}}> 
    <Drawer.Screen name='favourites' options={{headerShown:true}} />
    <Drawer.Screen name='settings' options={{headerShown:true}} />
   </Drawer>
  )
}

const styles = StyleSheet.create({

    lableIcon:{
        marginLeft: -20,
        fontSize:20
    },
    userInfoWrapper:{
        flexDirection:'row',
        paddingHorizontal:10,
        paddingVertical:20,
        borderBottomColor:'#CCC',
        borderBottomWidth:1,
        marginBottom:10

    },
    userImg:{
        borderRadius:60
    },
    userDetailsWrapper:{
       marginTop:24,
       marginLeft:5
    },
    userName:{
        fontSize:16,
        fontWeight:'bold'
    },
    userEmail:{
        fontSize:16,
       fontStyle:'italic',
       textDecorationLine:'underline'
    }

})