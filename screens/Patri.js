import React, {useState,useCallback, useEffect} from "react";
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView} from 'react-native';
import { useFonts } from 'expo-font'; 
import FlatPatri from '../components/Flatlist/FlatPatri';
import HistModule from '../components/Flatlist/HistModule';

export default function Patri({navigation}){
   
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
          <View style={styles.container}>
                <View style={styles.header}>
                    <Image style={{width:"100%",height:"100%"}} source={require('../src/patri.png')}/>
                </View>
                <View style={{marginVertical:20}}>
                    <Text style={{fontFamily:'Poppins_400Regular',paddingHorizontal:15,paddingTop:15,fontSize:17}}>Explore os modelos do passado:</Text>
                    <FlatPatri />
                </View>
                <View  style={{marginVertical:20}}>
                    <Text style={{fontFamily:'Poppins_400Regular',paddingHorizontal:15,paddingTop:15,fontSize:17}}>Saiba mais sobre nossos Patrimônios:</Text>
                    <HistModule />
                </View>
          </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
      },
      header:{
        width:'100%',
        height:200,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:'#fff'
      },
    
  });