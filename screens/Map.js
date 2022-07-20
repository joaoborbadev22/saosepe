import React, {useState,useEffect,useRef,StyleSheet} from 'react';
import { View, Text,Modal } from "react-native";
import MapView from 'react-native-maps';
export default function Map({route}){
    const {city} = route.params;
    return (
        <React.Fragment>
             <MapView style={{height: '60%', width: '100%'}} /> 
            <View style={{height:'40%',backgroundColor:'#fff'}}>
                <Text style={{padding:15, fontSize:18,fontFamily:'Inter_600SemiBold'}}>Titulo Teste - local </Text>
                <View style={{padding:15}}>
                    <Text style={{fontFamily:'Poppins_400Regular',fontSize:13}}>Ao aceitares os nossos cookies, estás a ajudar-nos diretamente a cumprir a nossa promessa para o planeta. Só este ano, o WeTransfer comprometeu-se a plantar mais de 175 000 árvores, e estamos apenas no início. Irás ter um impacto positivo para o planeta só através das nossas publicidades premiadas.</Text>
                </View>
            </View>
        </React.Fragment>
    );
}