import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'


const Home = () => {
    

    return (
    <View>

        <Pressable onPress={()=>{getData(); console.log("Button is Pressed")}} style={{backgroundColor:'red',padding:12}}>

      <Text>Add Data</Text>
        </Pressable>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})