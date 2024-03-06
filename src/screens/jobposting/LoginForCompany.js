import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { BG_COLOR, TEXT_COLOR } from '../../utils/Colors'
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters'
import CustomTextInput from '../../common/CustomTextInput'
import CustomSoliButton from '../../common/CustomSoliButton'
import CustomBorderButton from '../../common/CustomBorderButton'
import { useNavigation } from '@react-navigation/native'

const LoginForCompany = () => {
  const navigation = useNavigation();

  const [email,setEmail] = useState('')
const [badEmail,setBadEmail] = useState('')

  const [password,setPassword] = useState('')
  const [badPassword,setBadPassword] = useState('')
  



/////////////////////////////



const validate =()=>{
   let validEmail = true;
   let validPass = true;

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

   return validPass && validEmail
}





////////////////////////



  return (
    <View style={{flex:1,backgroundColor:BG_COLOR,alignItems:'center'}}>

      <Image source={require('../../images/studying.png')} style={{height:moderateVerticalScale(70),width:moderateScale(70),marginTop:verticalScale(30)}}/>
      <Text style={styles.heading}>Login</Text>

      <CustomTextInput title={'Email'} placeholder="xyz@gmail.com"
      value={email} onChangeText={txt =>setEmail(txt)}   bad={badEmail !=='' ? true :false }
      />
      {badEmail!=="" && <Text style={styles.errorMessage}>{badEmail}</Text> }


   
      <CustomTextInput title={"Password"} placeholder="**********"
      value={password} onChangeText={txt =>setPassword(txt)} bad={badPassword !=='' ? true :false }/>
      {badPassword!=="" && <Text style={styles.errorMessage}>{badPassword}</Text> }



<CustomSoliButton title={"LogIn"} onClick={()=>{
  if(validate()){
    
  }
}
}/>
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
},errorMessage:{
  color:'red',
  marginLeft:moderateScale(40),alignSelf:'flex-start',
  fontSize:moderateScale(12)
}

})