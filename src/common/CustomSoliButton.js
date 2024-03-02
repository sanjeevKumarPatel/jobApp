import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { moderateScale, moderateVerticalScale, verticalScale } from 'react-native-size-matters'
import { BG_COLOR, TEXT_COLOR } from '../utils/Colors'

const CustomSoliButton = ({title,onClick}) => {
  return (
  
<TouchableOpacity style={styles.btn} onPress={onClick}>
    <Text style={styles.text}>{title}</Text>
</TouchableOpacity>
  
  )
}

export default CustomSoliButton

const styles = StyleSheet.create({
    btn:{
        width:'90%'
        ,height:verticalScale(45),borderWidth:1,
        backgroundColor:TEXT_COLOR,borderRadius:moderateScale(10),
        justifyContent:'center',
        alignItems:'center',marginTop:moderateVerticalScale(15)
    },text:{
      color:BG_COLOR,
      fontWeight:'500',fontSize:moderateScale(14)
    }
})