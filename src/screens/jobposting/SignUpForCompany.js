

import { Alert, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { BG_COLOR, TEXT_COLOR } from '../../utils/Colors'
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters'
import CustomTextInput from '../../common/CustomTextInput'
import CustomSoliButton from '../../common/CustomSoliButton'
import CustomBorderButton from '../../common/CustomBorderButton'
import { useNavigation } from '@react-navigation/native'
import Loader from '../../common/Loader'

import firestore from '@react-native-firebase/firestore';
// firebase-course-predotech is the project in firebase







const SignUpForCompany = () => {

  const navigation = useNavigation();

  const [accountCreated,setAccountCreated ] = useState(false)
  const [loading,setLoading] = useState(false)

const [name,setName] = useState('')
const [badname,setBadname] = useState('')

const [email,setEmail] = useState('')
const [badEmail,setBadEmail] = useState('')

const [phone,setPhone] = useState('')
const [badPhone,setBadPhone] = useState('')


const [address,setAddress] = useState('')
const [badAddress,setBadAddress] = useState('')

const [companyName,setCompanyName] = useState('')
const [badCompanyName,setBadCompanyName] = useState('')

const [password,setPassword] = useState('')
const [badPassword,setBadPassword] = useState('')



const registerUser = ()=>{
  setLoading(true)
  firestore()
.collection('Job_Posters')
.add({
name,
phone,
email,
companyName,
address,
password
})
.then(() => {
  setAccountCreated(true)
  console.log('User added!');
  setLoading(false);
  setTimeout(() => {
    navigation.goBack()
  }, 3000);

  setName('');
  setEmail('');
  setPassword('')
  setCompanyName('')
  setAddress('')
  setPhone('')

}).catch((error)=>{
  setLoading(false);
  console.log(error)
});
}








const validate =()=>{
  let validName = true;
   let validEmail = true;
   let validPhone = true;
   let validCompany = true;
   let validPass = true;
   let validAddress = true;

    if (name== ''){
    validName = false;
    setBadname('Please Enter Valid name')
   }

   else if( name !== "" &&  name.length < 3 ){
validName =false;
setBadname("Please enter valid name")

   }
else if(  name !== "" &&  name.length > 3 && !name.toString().match(/^[a-z ,.'-]+$/i))
{
  validName = false;
  setBadname("Please remove numbers from the name")
}
   else if (name!== '' && name.length >=3 && name.toString().match(/^[a-z ,.'-]+$/i)){
    validName = true;
    setBadname('')
   }


   if(email =='') { 
    validEmail = false;
    setBadEmail('Please Enter Email')
   }else if (email!= '' &&  !email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i)){
    validEmail = false;
    setBadEmail('Please Enter Valid Email')
   }

  
   else if (email!= '' && email.toString().match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)){
    validEmail = true;
    setBadEmail('')
   }


   
   if(phone ==''){
    validPhone = false;
    setBadPhone('Please Enter contact number')
   }else if (phone!== '' && phone.length < 10 && !phone.match(/^(\+\d{1,3}[- ]?)?\d{10}$/)){
    validPhone = false;
    setBadPhone('Please Enter Valid phone')
   }
   else if (phone!== '' && phone.length >= 10 && phone.match(/^(\+\d{1,3}[- ]?)?\d{10}$/) ){
    validPhone = true;
    setBadPhone('')
   }


   if(companyName ==''){
    validCompany = false;
    setBadCompanyName('Please Enter company name')
   }else if (companyName!== '' && companyName.length < 3){
    validCompany = false;
    setBadCompanyName('Please Enter Valid phone')
   }
   else if (companyName!== '' && companyName.length > 3){
    validCompany = true;
    setBadCompanyName('')
   }

   if(address ==''){
    validAddress = false;
    setBadAddress('Please Enter address')
   }else if (address!== '' && address.length < 3){
    validAddress = false;
    setBadAddress('Please Enter address')
   }
   else if (address!== '' && address.length > 3){
    validAddress = true;
    setBadAddress('')
   }



   if(password ==''){
    validPass = false;
    setBadPassword('Please Enter valid paassword')
   }else if (password!== '' && password.length < 6){
    validPass = false;
    setBadPassword('Please Enter Valid paassword')
   }
   else {
    validPass = true;
    setBadPassword('')
   }

   return validAddress && validPass && validCompany && validName && validPhone && validEmail
}



  return (
<>

  { !accountCreated ?
    <ScrollView>
    <View style={{flex:1,backgroundColor:BG_COLOR,alignItems:'center',marginBottom:moderateVerticalScale(10)}}>

      <Image source={require('../../images/studying.png')} style={{height:moderateVerticalScale(70),width:moderateScale(70),marginTop:verticalScale(30)}}/>
      <Text style={styles.heading}> Create Account</Text>

      

      <CustomTextInput value={name} onChangeText={txt =>setName(txt)} title={'Name'} placeholder="xyz"   bad={badname !=='' ? true :false }/>
      {badname!=="" && <Text style={styles.errorMessage}>{badname}</Text> }


      <CustomTextInput title={"Contact"} placeholder="+91 7878787"
      value={phone} onChangeText={txt =>setPhone(txt)}  bad={badPhone !=='' ? true :false }
      />
      {badPhone!=="" && <Text style={styles.errorMessage}>{badPhone}</Text> }


      <CustomTextInput title={"Company Name"} placeholder="MicroSoft"
      value={companyName} onChangeText={txt =>setCompanyName(txt)}  bad={badCompanyName !=='' ? true :false }
      />
      {badCompanyName!=="" && <Text style={styles.errorMessage}>{badCompanyName}</Text> }


      <CustomTextInput title={'Address'} placeholder="123, Newyork"
      value={address} onChangeText={txt =>setAddress(txt)}  bad={badAddress !=='' ? true :false }
      />
      {badAddress!=="" && <Text style={styles.errorMessage}>{badAddress}</Text> }


      <CustomTextInput title={'Email'} placeholder="xyz@gmail.com"
      value={email} onChangeText={txt =>setEmail(txt)}   bad={badEmail !=='' ? true :false }
      />
      {badEmail!=="" && <Text style={styles.errorMessage}>{badEmail}</Text> }


      <CustomTextInput title={"Password"} placeholder="**********"
      value={password} onChangeText={txt =>setPassword(txt)} bad={badPassword !=='' ? true :false }/>
      {badPassword!=="" && <Text style={styles.errorMessage}>{badPassword}</Text> }


<CustomSoliButton title={"SignUp"} onClick={()=>{

  if(validate()){
    // Alert.alert('ready to send data',"Gettin ready")
    registerUser();
  }
 
}}/>

<CustomBorderButton  title={"LogIn"} onClick={()=>navigation.goBack()}/>
    </View>
    <Loader loading={loading}/>
    </ScrollView> : 
    <View style={{justifyContent:'center',alignItems:'center',flex:1,padding:moderateScale(24)}}>
      <Image source={require('../../images/check.png')} style={{height:moderateVerticalScale(100),width:moderateScale(100)}}/>
    <Text style={{color:'blue',fontSize:26 ,fontWeight:'600'}}>You have created your accouont successfully.</Text>
    </View>}
    
    </> )
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
,
errorMessage:{
  color:'red',
  marginLeft:moderateScale(40),alignSelf:'flex-start',
  fontSize:moderateScale(12)
}
})