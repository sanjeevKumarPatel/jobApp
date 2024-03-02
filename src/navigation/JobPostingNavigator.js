import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginForCompany from '../screens/jobposting/LoginForCompany'
import SignUpForCompany from '../screens/jobposting/SignUpForCompany'

const Stack = createNativeStackNavigator()
const JobPostingNavigator = () => {
  return (
    
<Stack.Navigator>
    <Stack.Screen name='LoginForCompany' component={LoginForCompany} options={{headerShown:false}}/>
    <Stack.Screen name='SignUpForCompany' component={SignUpForCompany} options={{headerShown:false}}/>

</Stack.Navigator>

  )
}

export default JobPostingNavigator

const styles = StyleSheet.create({})