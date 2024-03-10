import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { BG_COLOR } from '../../utils/Colors'
import MyJobs from './tabs/MyJobs'
import SearchCandidate from './tabs/SearchCandidate'
import AddJob from './tabs/AddJob'
import Chat from './tabs/Chat'
import Profile from './tabs/Profile'
import { useNavigation } from '@react-navigation/native'

const DashboardForCompany = () => {
const navigation = useNavigation();

const [selectedTab,setSelectedTab] = useState(0)


  return (
    <View style={{flex:1}}>
{selectedTab == 0 ? <MyJobs/>:selectedTab==1?<SearchCandidate/>: selectedTab ==2?<Chat/>:selectedTab==3?<Profile/> :null}

    <View style={styles.bottomView}>
<Pressable style={[styles.bottomTab,{borderTopWidth:selectedTab==0?1:0,borderColor:'red'}]}
onPress={()=>setSelectedTab(0)}
>
<Image source={require('../../images/home.png')} style={[styles.icon,{tintColor:selectedTab == 0 ?'red':null }]}/>
</Pressable>

<Pressable style={[styles.bottomTab,{borderTopWidth:selectedTab==1?1:0,borderColor:'red'}]} onPress={()=>setSelectedTab(1)}>
<Image source={require('../../images/icon2.png')}  style={[styles.icon,{tintColor:selectedTab == 1 ?'red':null}]}/>
</Pressable>


<Pressable style={[styles.bottomTab]} onPress={()=>navigation.navigate('AddJob')}>
<Image source={require('../../images/addition.png')}  style={[styles.icon,]}/>
</Pressable>


<Pressable  style={[styles.bottomTab,{borderTopWidth:selectedTab==2?1:0,borderColor:'red'}]} onPress={()=>setSelectedTab(2)}>
<Image source={require('../../images/messenger.png')}  style={[styles.icon,{tintColor:selectedTab == 2 ?'red':null}]}/>
</Pressable>


<Pressable style={[styles.bottomTab,{borderTopWidth:selectedTab==3?1:0,borderColor:'red'}]}  onPress={()=>setSelectedTab(3)}>
<Image source={require('../../images/contact.png')}  style={[styles.icon,{tintColor:selectedTab == 3 ?'red':null}]}/>
</Pressable>


    </View>
    

    </View>
  )
}

export default DashboardForCompany

const styles = StyleSheet.create({
bottomView:{
width:'100%',
height:verticalScale(50),
backgroundColor:BG_COLOR,
shadowColor:'rgba(0,0,0,0.9)',
shadowOpacity:.6,
shadowOffset:{x:0,y:1}
,position:'absolute',bottom:0,flexDirection:'row',
justifyContent:'space-evenly',alignItems:'center',

},bottomTab:{
    width:'20%'
    ,height:'100%',
    justifyContent:'center',alignItems:'center'
},icon:{
    height:scale(20),
    width:scale(20)
}

})