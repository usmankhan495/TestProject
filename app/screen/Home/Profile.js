import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View style={styles.root}>
      <Text>Profile</Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({root:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
}})