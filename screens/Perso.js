import React, {useState,useCallback, useEffect} from "react";
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView} from 'react-native';
import { useFonts } from 'expo-font'; 
import Persona from '../components/Flatlist/Persona';
import HistModule from '../components/Flatlist/HistModule';



export default function Perso({navigation}){
   
    let [fontsLoaded] = useFonts({
        'Inter_600SemiBold': require('../node_modules/@expo-google-fonts/inter/Inter_600SemiBold.ttf'),
        'Inter_900Black': require('../node_modules/@expo-google-fonts/inter/Inter_900Black.ttf'),
        'Inter_400Regular': require('../node_modules/@expo-google-fonts/inter/Inter_400Regular.ttf'),
        'Roboto_300Light': require('../node_modules/@expo-google-fonts/roboto/Roboto_300Light.ttf'),
        'Poppins_400Regular': require('../node_modules/@expo-google-fonts/poppins/Poppins_400Regular.ttf'),
        'Poppins_600SemiBold': require('../node_modules/@expo-google-fonts/poppins/Poppins_600SemiBold.ttf')
     });
    return(
      <ScrollView>
        <SafeAreaView   style={styles.container}>
            <View style={styles.header}>
                <Image style={{width:"100%",height:"100%"}} source={require('../src/persona.png')}/>
            </View>
            <View>
              <View style={{justifyContent:'flex-start',padding:10}}>
                <Text style={{fontSize:23,fontFamily:'Poppins_600SemiBold',}}>Personalidades marcantes</Text>
              </View>
              <Persona/>
            </View>
            <View>
              <View style={{justifyContent:'flex-start',padding:10}}>
                <Text style={{fontSize:19,fontFamily:'Poppins_600SemiBold',}}>Mais sobre</Text>
              </View>
              <HistModule />
            </View>
        </SafeAreaView>
      </ScrollView>
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