import { Link, Redirect } from 'expo-router'
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Page() {
  return (<View style={styles.container}>
    <Text style={styles.text}>Home Page</Text>
      <Link href={'/about'}>
      <Text style={styles.linkfontSize}>Go To About Page</Text>
      </Link>
      <Link href={'/blog'} asChild>
      <Button  title='Go to Blog Page'/>
      </Link>
      <Link href={'/contact'} asChild>
      <Button  title='Go to Contact Page'/>
      </Link>
      <Link href={'(drawer)'} asChild>
      <Button  title='Go to Tab Page'/>
      </Link>
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
  },
  linkfontSize:{
    fontSize:18
}
})
