import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters'
import { BG_COLOR } from '../utils/Colors'

const CustomTextInput = ({title,placeholder,value,onChangeText}) => {
  return (
    <View style={styles.input}>
        <Text  style={styles.title}>{title}</Text>
  <TextInput value={value} onChangeText={(txt)=>onChangeText(txt)} style={styles.TextInput} placeholder={placeholder}/>
    </View>
  )
}

export default CustomTextInput

const styles = StyleSheet.create({
    input:{width:'90%'
    ,height:verticalScale(45)
,borderWidth:1,marginTop:verticalScale(20),borderRadius:moderateScale(10),
},

title:{
    alignSelf:'flex-start',
    marginLeft:moderateScale(20),
    position:'absolute',top:moderateVerticalScale(-12)
    ,fontSize:moderateScale(10),backgroundColor:BG_COLOR,padding:scale(2)
},
TextInput:{
    marginLeft:moderateScale(10),
}
})