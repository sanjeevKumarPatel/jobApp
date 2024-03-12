import { Image, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters'
import { BG_COLOR } from '../utils/Colors'

const CustomTextInput = ({title,placeholder,value,bad,onClick}) => {
  return (
    <View style={[styles.input,{borderColor:bad?'red':null}]}>
        <Text  style={[styles.title,{color:bad?'red':null}]}>{title}</Text>



<TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:scale(12),paddingVertical:scale(2)}} onPress={onClick}>

  <Text style={{color:placeholder?.includes('Select')?'#9e9e9e' :'black'}} > {placeholder} </Text>
  <Image source={require('../images/down.png') } style={{height:scale(20),width:scale(20)
}}/>
</TouchableOpacity>
</View>
  
   
  )
}

export default CustomTextInput

const styles = StyleSheet.create({
    input:{width:'90%'
    ,height:verticalScale(42)
,borderWidth:1,marginTop:verticalScale(20),
borderRadius:moderateScale(10),
justifyContent:'center'
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