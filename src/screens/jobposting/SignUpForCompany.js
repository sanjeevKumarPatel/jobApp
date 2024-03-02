

import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { BG_COLOR, TEXT_COLOR } from '../../utils/Colors'
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters'
import CustomTextInput from '../../common/CustomTextInput'
import CustomSoliButton from '../../common/CustomSoliButton'
import CustomBorderButton from '../../common/CustomBorderButton'
import { useNavigation } from '@react-navigation/native'

const SignUpForCompany = () => {
  const navigation = useNavigation();

const [name,setName] = useState('')
const [badname,setBadname] = useState('')
const [email,setEmail] = useState('')
const [phone,setPhone] = useState('')
const [address,setAddress] = useState('')
const [companyName,setCompanyName] = useState('')
const [password,setPassword] = useState('')





  return (
    <ScrollView>
    <View style={{flex:1,backgroundColor:BG_COLOR,alignItems:'center',marginBottom:moderateVerticalScale(10)}}>

      <Image source={require('../../images/studying.png')} style={{height:moderateVerticalScale(70),width:moderateScale(70),marginTop:verticalScale(30)}}/>
      <Text style={styles.heading}> Create Account</Text>
      <CustomTextInput value={name} onChangeText={txt =>setName(txt)} title={'Name'} placeholder="xyz"/>


      <CustomTextInput title={"Contact"} placeholder="+91 7878787"
      value={phone} onChangeText={txt =>setPhone(txt)} 
      />

      <CustomTextInput title={"Company Name"} placeholder="MicroSoft"
      value={companyName} onChangeText={txt =>setCompanyName(txt)} 
      />

      <CustomTextInput title={'Address'} placeholder="123, Newyork"
      value={address} onChangeText={txt =>setAddress(txt)} 
      />

      <CustomTextInput title={'Email'} placeholder="xyz@gmail.com"
      value={email} onChangeText={txt =>setEmail(txt)} 
      />
      <CustomTextInput title={"Password"} placeholder="**********"
      value={password} onChangeText={txt =>setPassword(txt)} />

<CustomSoliButton title={"SignUp"}/>
<CustomBorderButton  title={"LogIn"} onClick={()=>navigation.goBack()}/>
    </View>
    </ScrollView>  )
}

export default SignUpForCompany

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