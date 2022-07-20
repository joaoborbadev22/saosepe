import React, { useEffect, useState } from 'react';
import {StyleSheet, View, Text, FlatList, Dimensions,Image, Pressable,Modal,ScrollView,Button } from 'react-native';
const {width} = Dimensions.get('window');
import { Audio } from 'expo-av';
import Slider from '@react-native-community/slider';
import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import SoundPlayer from '../assets/SoundPlayer';

const Users = props => {
    const [sound, setSound] = React.useState();
    const [showModal, setShowModal] = useState(false)
    const [isLoading, setLoading] = useState(false);
    let [option, setOption] = React.useState(0);
    const [users, setUsers] = useState([]);
    React.useEffect(() => {
        return sound
        ? () => {
            console.log('Unloading Sound');
            sound.unloadAsync(); }
        : undefined;
    }, [sound]);
    getUsers = () => {
        fetch('http://env-9593657.jelastic.saveincloud.net/hist')
          .then((response) => response.json())
          .then((json) => setUsers(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
    }
    useEffect(() => {
        setLoading(true);
        getUsers();
        }, []);
    const modalfr = (i) => {
        setOption(i);
        setShowModal(true);
    };
    return(
        <View>
            {isLoading ? <Text>Loading...</Text> :
            (
                    <FlatList
                        data={users}
                        keyExtractor={item => String(item)}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        snapToAlignment={'start'}
                        snapToOffsets={[ ... Array(users.length)].map((x,i) => i * (width * 0.8 - 40) + (i - 1) * 40)}
                        decelerationRate='fast'
                        style={{marginTop:0}}
                        scrollEventThrottle={16}
                        renderItem={({item})=>
                            (
                                <>
                                    <Pressable onPress={()=> modalfr(item.id)} style={{
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
                                        padding:10,
                                        borderRadius: 12,
                                        marginVertical:20
                                        }}
                                    ><Text style={styles.EducationTitle}>{item.title}</Text>
                                    <Text numberOfLines={7}  style={styles.EducationDescription}>{item.text}</Text>
                                    </Pressable>
                                
                            </>
                            ) 
                        }
                    />
            )}
            <Modal animationType="slide" visible={showModal} onRequestClose={() => setShowModal(false)}>
                <ScrollView>
                    <View style={styles.header}>
                        <Image style={{width:"100%",height:"100%"}} source={require('../../src/sepe.jpg')}/>
                    </View>
                    <View style={{width:'100%',padding:15,justifyContent:'center',minHeight:90,alignItems:'center'}}>
                        {users.map(a=>{
                            return option === a.id && <Text style={{fontSize:18,fontFamily:'Inter_600SemiBold'}}>{a.title}</Text>
                        })}
                        
                        <Text style={{fontSize:12,color:'#ccc'}}>22/11/2022</Text>
                    </View>
              <SoundPlayer mp3={require('../../assets/audio.mp3')}/>

                    <View style={{padding:15}}>
                        <View style={{paddingVertical:20}}>
                            {users.map(a=>{
                                return option === a.id && <Text style={{fontSize:13,fontFamily:'Poppins_400Regular'}}>{a.text}</Text>
                            })}
                        </View>
                         
                    </View>
                </ScrollView> 
            </Modal>
        </View>
    );
};
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
      height:200,
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
export default Users;