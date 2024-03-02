import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'

import { moderateScale, verticalScale,moderateVerticalScale } from 'react-native-size-matters'
import { BG_COLOR, TEXT_COLOR } from '../utils/Colors'

const CustomBorderButton = ({title,onClick}) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onClick}>
    <Text style={styles.text}>{title}</Text>
</TouchableOpacity>
  
  )
}

export default CustomBorderButton

const styles = StyleSheet.create({  btn:{
    width:'90%'
    ,height:verticalScale(45),borderWidth:1,
    backgroundColor:BG_COLOR,borderRadius:moderateScale(10),
    justifyContent:'center',
    alignItems:'center',marginTop:moderateVerticalScale(15)
},text:{
  color:TEXT_COLOR,
  fontWeight:'500',fontSize:moderateScale(14)
}})