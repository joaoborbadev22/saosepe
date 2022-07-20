import React, {useState,useCallback, useEffect} from "react";
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView} from 'react-native';
import { useFonts } from 'expo-font'; 
import MenuFont from '../components/Flatlist/MenuFlat'
import ExploreContent from '../components/Flatlist/ExploreFont'


export default function Hist({navigation}){
   
    let [fontsLoaded] = useFonts({
        'Inter_600SemiBold': require('../node_modules/@expo-google-fonts/inter/Inter_600SemiBold.ttf'),
        'Inter_900Black': require('../node_modules/@expo-google-fonts/inter/Inter_900Black.ttf'),
        'Inter_400Regular': require('../node_modules/@expo-google-fonts/inter/Inter_400Regular.ttf'),
        'Roboto_300Light': require('../node_modules/@expo-google-fonts/roboto/Roboto_300Light.ttf'),
        'Poppins_400Regular': require('../node_modules/@expo-google-fonts/poppins/Poppins_400Regular.ttf'),
        'Poppins_600SemiBold': require('../node_modules/@expo-google-fonts/poppins/Poppins_600SemiBold.ttf')
     });
    return(
        
        <SafeAreaView style={styles.container}>
        <ScrollView>
            <View style={styles.header}>
            <Image style={{width:"100%",height:"100%"}} source={require('../src/font.png')}/>
            </View>
            <View style={{marginBottom:50}}>
                <Text style={{fontFamily:'Poppins_400Regular',paddingHorizontal:15,paddingTop:15,fontSize:17}}>Explore nosso passado:</Text>
                <ExploreContent/>
                
            </View>
            <View style={{marginBottom:50}}>
                <Text style={{fontFamily:'Poppins_400Regular',paddingHorizontal:15,paddingTop:15,fontSize:17}}>Ouça as discussoes mais atuais da cultura:</Text>
                <MenuFont/>
                
            </View>
        </ScrollView>
    </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
    header:{
      lignSelf: 'stretch',
      width:'100%',
      height:200,
      flexDirection:'row',
      justifyContent: 'center',
      alignItems:'center',
      backgroundColor:'#fff'
    },
    contentWelcome:{
      width:"50%",
      paddingTop:10,
    },
    textMenu:{
      fontSize: 13,
      fontFamily:'Inter_400Regular',
      color: "#000000",
    },
    subMenu:{
      fontSize: 14,
      fontFamily:'Inter_600SemiBold',
      color: "#000000",
    },
    contentMenu:{
      width:"50%",
      padding:10,
      flexDirection:'row',
      alignItems: 'center',
      justifyContent: 'right'
    },
    img:{
      width:40,
      height:40,
      backgroundColor:"#D9D9D9",
      borderRadius:50,
    },
    Education:{
      width:"100%",
      minHeight:81,
      marginTop:20,
      marginBottom:20,
      justifyContent:'center',
      alignContent:'center',
    },
    EducationBox:{
      width:'100%',
      height:'100%',
      flexDirection:'column',
      backgroundColor:'#000000',
      borderRadius:5,
      padding: 12
    },
    EducationTitle:{
      fontSize: 12,
      color: "#fff",
      fontFamily:'Inter_600SemiBold'
    },
    EducationDescription:{
      fontFamily:'Roboto_300Light',
      fontSize: 11,
      lineHeight: 13,
      letterSpacing: 1,
      color: "#fff",
      marginBottom:5,
      marginTop:5
    },
    ExploreContent:{
      width:'100%',
      paddingTop:30,
    },
    more:{
      fontSize:8,
      fontFamily:'Inter_600SemiBold',
      color:'#fff',
    },
    TitleApp:{
      fontFamily: 'Poppins_400Regular',
      fontSize: 14,
      lineHeight: 21,
      color: "#000000"
    },
    Menu:{
      width:'100%',
      paddingTop: 30,
      paddingBottom: 20,
    },  
    IndvMenu:{
      width:'100%',
      height: 55,
      marginBottom: 21,
      backgroundColor:'#fff',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.30,
      shadowRadius: 4.65,
      elevation: 8,
      justifyContent: 'center',
      alignItems:'center'
    }
    
  });