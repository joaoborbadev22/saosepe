import React from "react";
import {StyleSheet,FlatList, View, Dimensions,Text} from 'react-native';
import { useFonts } from 'expo-font'; 
import { Entypo } from '@expo/vector-icons'; 
import SoundPlayer from '../assets/SoundPlayer';

const {width} = Dimensions.get('window');
const MenuFlat = ({data}) => {
    let [fontsLoaded] = useFonts({
        'Inter_600SemiBold': require('../../node_modules/@expo-google-fonts/inter/Inter_600SemiBold.ttf'),
        'Inter_900Black': require('../../node_modules/@expo-google-fonts/inter/Inter_900Black.ttf'),
        'Inter_400Regular': require('../../node_modules/@expo-google-fonts/inter/Inter_400Regular.ttf'),
        'Roboto_300Light': require('../../node_modules/@expo-google-fonts/roboto/Roboto_300Light.ttf'),
        'Poppins_400Regular': require('../../node_modules/@expo-google-fonts/poppins/Poppins_400Regular.ttf'),
        'Poppins_600Regular': require('../../node_modules/@expo-google-fonts/poppins/Poppins_600SemiBold.ttf')
    
      });

      return (
          <>
            <FlatList
              data={data}
              keyExtractor={index => String(index)}
              horizontal
              showsHorizontalScrollIndicator={false}
              snapToAlignment={'start'}
              snapToOffsets={[ ... Array(data.length)].map((x,i) => i * (width * 0.8 - 40) + (i - 1) * 40)}
              decelerationRate='fast'
              style={{marginTop:0}}
              scrollEventThrottle={16}
              renderItem={({index})=> 
                (
                  <View style={{
                    backgroundColor:"#fff",
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.23,
                    shadowRadius: 2.62,

                    elevation: 4,
                    height: width/2.6,
                    width:width * 0.8 - 20,
                    marginHorizontal: 10,
                    borderRadius: 12,
                    padding:10,
                    marginVertical:20
                    }}
                  >
                  <Text style={styles.EducationTitle}>{index.title}</Text>
                  
                  <Text style={styles.EducationDescription}>{index.text}</Text>
                  </View>
                ) 
              }
            />
          </>
      );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      paddingLeft:15,
      paddingRight:15,
    },
    header:{
      lignSelf: 'stretch',
      width:'100%',
      height:"7%",
      flexDirection:'row',
      justifyContent: 'center',
      alignItems:'center',
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
      justifyContent: 'flex-end'
    },
    img:{
      width:40,
      height:40,
      backgroundColor:"#D9D9D9",
      borderRadius:50,
    },
    Education:{
      width:"100%",
      maxHeight:100,
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
      color: "#222",
      fontFamily:'Inter_600SemiBold'
    },
    EducationDescription:{
      fontFamily:'Roboto_300Light',
      fontSize: 11,
      lineHeight: 13,
      letterSpacing: 1,
      color: "#222",
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
export default MenuFlat;