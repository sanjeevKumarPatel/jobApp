// 316463220016 id

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
const Stack = createNativeStackNavigator();
import Splash from './src/screens/onboarding/Splash';
import JobPostingNavigator from './src/navigation/JobPostingNavigator';
import JobSearchNavigator from './src/navigation/JobSearchNavigator';
import SelectUser from './src/screens/onboarding/SelectUser';
import DashboardForCompany from './src/screens/jobposting/DashboardForCompany';
import AddJob from './src/screens/jobposting/tabs/AddJob';


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
        <Stack.Screen name="JobPostingNavigator" component={JobPostingNavigator} options={{headerShown:false}}/>
        <Stack.Screen name="DashboardForCompany" component={DashboardForCompany} options={{headerShown:false}}/>
        <Stack.Screen name="AddJob" component={AddJob} options={{headerShown:false}}/>


        <Stack.Screen name="JobSearchNavigator" component={JobSearchNavigator} options={{headerShown:false}}/>
        <Stack.Screen name="SelectUser" component={SelectUser} options={{headerShown:false}}/>



      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App

const styles = StyleSheet.create({})