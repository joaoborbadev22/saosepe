import React, { useEffect, useState } from "react";
import {StyleSheet,FlatList, View, Dimensions,Text, Pressable, Image,} from 'react-native';
const {width} = Dimensions.get('window');
import { NavigationContainer } from '@react-navigation/native';
import SoundPlayer from '../assets/SoundPlayer';

const MapFlat = ({navigation}) => {
    const [showModal, setShowModal] = useState(false)
    const [isLoading, setLoading] = useState(false);
    let [option, setOption] = React.useState(0);
    const [maps, setMaps] = useState([]);
    getMaps = () => {
        fetch('http://env-9593657.jelastic.saveincloud.net/hist')
          .then((response) => response.json())
          .then((json) => setMaps(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
    }
    useEffect(() => {
        setLoading(true);
        getMaps();
        }, []);
    const modalfr = (i) => {;
        setOption(i);
        setShowModal(true);
    };
    return (
      <View>
        {isLoading ? <Text>Loading...</Text> :
        (
          <FlatList
            data={maps}
            keyExtractor={item => String(item)}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToAlignment={'start'}
            snapToOffsets={[ ... Array(maps.length)].map((x,i) => i * (width * 0.8 - 40) + (i - 1) * 40)}
            decelerationRate='fast'
            style={{marginTop:0}}
            scrollEventThrottle={16}
            renderItem={({item})=> 
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
                  marginVertical:20
                  }}
                  >
                  <Pressable onPress={() => navigation.navigate('Pontos históricos',{city:item.descri})} style={{height:'100%',justifyContent:'center',alignItems:'center',position:'relative'}}><Image style={{width:"100%",height:"100%",borderRadius: 12,}} source={require(`../../src/${'point2'}.jpg`)}/></Pressable>
                </View>
              ) 
            }
          />
        )}
      </View>
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
export default MapFlat;