import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { moderateScale, scale,moderateVerticalScale, verticalScale } from 'react-native-size-matters'
import { TEXT_COLOR } from '../../utils/Colors'
import { useNavigation } from '@react-navigation/native'

const SelectUser = () => {
const navigation =  useNavigation()

  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>

<Image source={require('../../images/studying.png')} style={{height:scale(70),width:scale(70),marginBottom:moderateVerticalScale(30)}}/>


      <Text style={styles.title}>What are you looking for?</Text>

<TouchableOpacity style={styles.wantToHire} onPress={()=>navigation.navigate('JobPostingNavigator')}>
<Text style={{color:'white',fontSize:moderateScale(14),fontWeight:'500'}}>Want to hire candidate</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.wantJob}>
<Text style={{color:'black',fontSize:moderateScale(14),fontWeight:'500'}}>Want to get Job</Text>

</TouchableOpacity>

    </View>
  )
}

export default SelectUser

const styles = StyleSheet.create({
title:{
    fontSize:moderateScale(20),
    fontWeight:'600'
},wantToHire:{
    width:'90%',height:verticalScale(50),backgroundColor:TEXT_COLOR
,borderRadius:moderateScale(10)
,justifyContent:'center',alignItems:'center',marginTop:moderateVerticalScale(20)
},wantJob:{marginTop:moderateVerticalScale(20),
    justifyContent:'center',alignItems:"center",
    height:moderateScale(10),width:'90%',borderWidth:1,borderRadius:moderateScale(10),height:verticalScale(50),margin:1
}


})