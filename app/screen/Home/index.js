import { StyleSheet, Text, View,Pressable ,TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Home({navigation}) {
    const navigate=useNavigation()
  return (
    <View style={styles.root}>
      <Text>Home</Text>
      <TouchableOpacity onPress={()=>{
          navigate.navigate('Profile')
          console.log('click')
      }}  >
          <Text>Go to Profile</Text>
        
        </TouchableOpacity>

    
    </View>
  )
}

const styles = StyleSheet.create({root:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
}})