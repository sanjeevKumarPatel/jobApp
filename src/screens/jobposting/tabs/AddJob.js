import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { moderateScale, moderateVerticalScale, scale,verticalScale } from 'react-native-size-matters';
import { BG_COLOR, TEXT_COLOR } from '../../../utils/Colors';
import CustomTextInput from '../../../common/CustomTextInput';

const AddJob = () => {
  const navigation = useNavigation();

const [jobTitle,setJobTitle] = useState('')
const [badJobTitle,setBadJobTitle] = useState('')

const [jobDescription,setJobDescription] = useState('')
const [badJobDescription,setBadJobDescription] = useState('')

const [exp,setExp] = useState('')
const [badExp,setBadExp] = useState('')

const [badPackage,setBadPackage] = useState('')
const [packages , setPackage] = useState('')


const [company,setCompany] = useState('')
const [badCompany, setBadCompany] = useState('')


const [skills,setSkills] = useState('')
const [badSkills,setBadSkills] = useState('')



  return (
    <View style={{flex:1 ,backgroundColor:BG_COLOR,alignItems:'center'}}>


      <View style={{flexDirection:'row',gap:scale(20),padding:scale(8),width:'100%',justifyContent:'flex-start',alignItems:'center'}}>
        
<Pressable onPress={()=>navigation.goBack()}>

      <Image source={require('../../../images/no.png')} style={{height:moderateVerticalScale(22),width:moderateScale(22),}}/>
</Pressable>

<Text style={{color:TEXT_COLOR,fontSize:scale(20),fontWeight:'600'}}>Add Job</Text>
</View>



      {/* <Pressable onPress={()=>navigation.goBack()} style={{backgroundColor:'red',
    height:scale(24),width:'20%',justifyContent:'center',alignItems:'center'}}>
        
        <Text style={{color:'white'}}>Go Back</Text>

      </Pressable> */}

{/* ///////////////////////////////// */}

      <CustomTextInput title={'Job Title'} placeholder="ex. Frontend Engineer"
      value={jobTitle} onChangeText={txt =>setJobTitle(txt)}   bad={badJobTitle !=='' ? true :false }
      />
      {badJobTitle!=="" && <Text style={styles.errorMessage}>{badJobTitle}</Text> }


      <CustomTextInput title={'Job Description'} placeholder="ex.This is a job for Web Developer "
      value={jobDescription} onChangeText={txt =>setJobDescription(txt)}   bad={badJobDescription !=='' ? true :false }
      />
      {badJobDescription!=="" && <Text style={styles.errorMessage}>{badJobDescription}</Text> }


      <CustomTextInput title={'Job Experience'} placeholder="ex. 6 years "
      value={exp} onChangeText={txt =>setExp(txt)}   bad={badExp !=='' ? true :false } keyboardType={'number-pad'}
      />
      {badExp!=="" && <Text style={styles.errorMessage}>{badExp}</Text> }


    

      <CustomTextInput title={'Package'} placeholder="ex. 6 lacs "
      value={packages} onChangeText={txt =>setPackage(txt)}   bad={badPackage !=='' ? true :false }
      keyboardType={'number-pad'}/>
      {badPackage!=="" && <Text style={styles.errorMessage}>{badPackage}</Text> }


      <CustomTextInput title={'Company'} placeholder="ex. Google "
      value={company} onChangeText={txt =>setCompany(txt)}   bad={badCompany !=='' ? true :false }
      />
      {badCompany!=="" && <Text style={styles.errorMessage}>{badCompany}</Text> }



      <CustomTextInput title={'Skills'} placeholder="ex. React, Node, Java, Springboot "
      value={skills} onChangeText={txt =>setSkills(txt)}   bad={badSkills !=='' ? true :false }
      />
      {badSkills!=="" && <Text style={styles.errorMessage}>{badSkills}</Text> }





    </View>
  )
}

export default AddJob

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
  }})