import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale, scale } from 'react-native-size-matters'
import { BG_COLOR, TEXT_COLOR } from '../../../utils/Colors'

const MyJobs = () => {
  return (
    <View  style={styles.container}>
      <Text style={styles.headingStyle}>FindMyJob</Text>
    </View>
  )
}

export default MyJobs

const styles = StyleSheet.create({
  container:{
    flex:1,backgroundColor:BG_COLOR
  },
    headingStyle:{
        color:TEXT_COLOR,fontSize:scale(25)
        ,fontWeight:'600',marginLeft:moderateScale(10)
    }
})