import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BG_COLOR, TEXT_COLOR } from '../../utils/Colors'
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters'
import CustomTextInput from '../../common/CustomTextInput'
import CustomSoliButton from '../../common/CustomSoliButton'
import CustomBorderButton from '../../common/CustomBorderButton'
import { useNavigation } from '@react-navigation/native'

const LoginForCompany = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex:1,backgroundColor:BG_COLOR,alignItems:'center'}}>

      <Image source={require('../../images/studying.png')} style={{height:moderateVerticalScale(70),width:moderateScale(70),marginTop:verticalScale(30)}}/>
      <Text style={styles.heading}>Login</Text>

      <CustomTextInput title={'Email'} placeholder="xyz@gmail.com"/>
      <CustomTextInput title={"Password"} placeholder="**********"/>
<Text style={styles.forgotPassword}>Forgot Password</Text>

<CustomSoliButton title={"LogIn"} onClick={()=>navigation.navigate('SignUpForCompany')}/>
<CustomBorderButton  title={"Create Account"} onClick={()=>navigation.navigate('SignUpForCompany')}/>
    </View>
  )
}

export default LoginForCompany

const styles = StyleSheet.create({

heading:{
fontWeight:'600',fontSize:moderateScale(20),marginTop:verticalScale(30),color:TEXT_COLOR
},
forgotPassword:{
  color:'darkred'
  ,alignSelf:'flex-end',marginRight:moderateScale(20),marginTop:moderateVerticalScale(20)
  ,fontSize:16,
  fontWeight:'500'
}

})