import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { BG_COLOR ,TEXT_COLOR} from '../../utils/Colors'
import { moderateScale, moderateVerticalScale, scale,verticalScale } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'


const Splash = () => {

const navigation = useNavigation()
useEffect(()=>{
setTimeout(()=>{
navigation.navigate('SelectUser')
},500)

},[])

  return (
    <View style={styles.container}>
        <Image source={require('../../images/studying.png')} style={styles.logo} />
      <Text style={styles.name}>Find My Job App</Text>
      <Text style={styles.slogan}>Post & Fing Jobs in One Place</Text>

    </View>
  )
}

export default Splash

const styles = StyleSheet.create({

container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
backgroundColor:BG_COLOR
}
,logo:{
    width:scale(100),
    height:verticalScale(100),borderRadius:18
},
name:{
   fontSize:moderateScale(30),
   fontWeight:'600',marginTop:moderateVerticalScale(10)
   ,color:TEXT_COLOR
},slogan:{
    fontSize:moderateScale(16),fontStyle:'italic'
    ,position:'absolute',
    bottom:moderateVerticalScale(60)
,textDecorationLine:"underline",fontWeight:'600',
color:'#000'
}
})