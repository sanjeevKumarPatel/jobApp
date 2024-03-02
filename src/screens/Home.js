import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import firestore from '@react-native-firebase/firestore';
// firebase-course-predotech is the project in firebase

const Home = () => {
    
    const getData = ()=>{
      firestore()
  .collection('Users')
  .add({
    name: 'Ada ',
    age: 30,
  })
  .then(() => {
    console.log('User added!');
  });
    }
    
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