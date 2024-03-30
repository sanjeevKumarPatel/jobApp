import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters'
import { BG_COLOR } from '../utils/Colors'

const CustomTextInput = ({title,placeholder,value,onChangeText,bad,keyboardType}) => {
  return (
    <View style={[styles.input,{borderColor:bad?'red':null}]}>
        <Text  style={[styles.title,{color:bad?'red':null}]}>{title}</Text>
  <TextInput keyboardType={keyboardType?keyboardType:'default'} value={value} onChangeText={(txt)=>onChangeText(txt)} style={styles.TextInput} placeholder={placeholder}/>
    </View>
  )
}

export default CustomTextInput

const styles = StyleSheet.create({
    input:{width:'90%'
    ,height:verticalScale(42)
,borderWidth:1,marginTop:verticalScale(20),
borderRadius:moderateScale(10),
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