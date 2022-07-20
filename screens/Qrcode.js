import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';


export default function Qrcode(){
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    useEffect(() => {
        (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
        })();
    }, []);
    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };
    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View style={styles.container}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
          <View style={{padding:30}}>
             {scanned &&<TouchableOpacity
                style={styles.button}
                onPress={() => setScanned(false)}
            >
                <Text style={{color:'#fff'}}>Scanear novamente</Text>
            </TouchableOpacity>}
          </View>
          
        </View>
      );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'flex-end',
      flexDirection:'column'
    },
    button: {
        alignItems: "center",
        backgroundColor: "#222",
        color:'#FFF',
        borderRadius:15,
        padding: 10
      },
  });