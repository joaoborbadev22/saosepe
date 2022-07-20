
import  React, {useState,useEffect,useCallback} from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, View, Text , Button, Pressable, ScrollView,Modal,Image, TouchableOpacity} from 'react-native';
import { useFonts } from 'expo-font'; 
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Entypo } from '@expo/vector-icons'; 
import CuriFlat from './components/Flatlist/CuriFlat';
import SoundPlayer from './components/assets/SoundPlayer';
import { 
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black 
} from '@expo-google-fonts/inter';
import { 
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic 
} from '@expo-google-fonts/roboto';
import { 
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic 
} from '@expo-google-fonts/poppins';
import Hist from './screens/Hist';
import Fontes from './screens/Fontes';
import Patri from './screens/Patri';
import Personas from './screens/Perso';
import Fotografias from './screens/Foto';
import Museu from './screens/Museu';
import Leitor from './screens/Qrcode';
import Map from './screens/Map';

const Point = [
  {
    key:'1',
    url:'point2',
    title:'São sepé - local 43'
  },
  {
    key:'2',
    url:'a',
    title:'São sepé - local 12'
  },
  {
    key:'3',
    url:'a',
    title:'São sepé - local 3'
  },
]
const Point2 = [
  {
    key:'1',
    url:'point2',
    title:'São sepé - local 1'
  },
  {
    key:'2',
    url:'a',
    title:'São sepé - local 2'
  },
  {
    key:'3',
    url:'a',
    title:'São sepé - local 3'
  },
  {
    key:'4',
    url:'a',
    title:'São sepé - local 3'
  },
  {
    key:'5',
    url:'a',
    title:'São sepé - local 3'
  },
]

function HomeScreen({navigation}) {
  let [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic 
  });
  const [appIsReady, setAppIsReady] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModalS, setShowModalS] = useState(false);

  
  
  
  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <ScrollView onLayout={onLayoutRootView}>
        <View style={styles.container}>
          <View style={styles.header}>
              <View style={styles.contentWelcome}>
                  <Text style={styles.textMenu}>Bem vindo ao,</Text>
                  <Text style={{fontFamily: 'Inter_900Black'}}>Município de São Sepé</Text>
              </View>
              <View style={styles.contentMenu}>
                  <Pressable onPress={() => setShowModal(true)} style={styles.img}></Pressable>
              </View>
          </View>
          
          <TouchableOpacity style={styles.Education} onPress={() => setShowModalS(true)}>
            <View style={styles.EducationBox}>
                <Text style={styles.EducationTitle}>Área educacional</Text>
                <Text style={styles.EducationDescription}>Louvre ou Museu do Louvre é o maior museu de arte do mundo e um monumento histórico em Paris, França.</Text>
                <Text style={styles.more}>+ Detalhes</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.ExploreContent}>
            <Text style={styles.TitleApp}>Explorar o app</Text>
            <View style={styles.Menu}>
                <Pressable onPress={() => navigation.navigate('Histórico da Cidade')} style={styles.IndvMenu}><Text style={{fontFamily: 'Poppins_400Regular', fontSize: 13, lineHeight: 19.5, color: "#000000" }}>Histórico da Cidade</Text></Pressable>
                <Pressable onPress={() => navigation.navigate('Fontes Históricas')} style={styles.IndvMenu}><Text style={{fontFamily: 'Poppins_400Regular', fontSize: 13, lineHeight: 19.5, color: "#000000" }}>Fontes Históricas</Text></Pressable>
                <Pressable onPress={() => navigation.navigate('Patrimônios materiais')} style={styles.IndvMenu}><Text style={{fontFamily: 'Poppins_400Regular', fontSize: 13, lineHeight: 19.5, color: "#000000" }}>Patrimônios materiais</Text></Pressable>
                <Pressable onPress={() => navigation.navigate('Personalidades')} style={styles.IndvMenu}><Text style={{fontFamily: 'Poppins_400Regular', fontSize: 13, lineHeight: 19.5, color: "#000000" }}>Personalidades</Text></Pressable>
                <Pressable onPress={() => navigation.navigate('Fotografias históricas')} style={styles.IndvMenu}><Text style={{fontFamily: 'Poppins_400Regular', fontSize: 13, lineHeight: 19.5, color: "#000000" }}>Fotografias históricas</Text></Pressable>
                <Pressable onPress={() => navigation.navigate('Museu municipal')} style={styles.IndvMenu}><Text style={{fontFamily: 'Poppins_400Regular', fontSize: 13, lineHeight: 19.5, color: "#000000" }}>Museu municipal</Text></Pressable>
                <Pressable onPress={() => navigation.navigate('Leitor de Qr code')} style={styles.IndvMenu}><Text style={{fontFamily: 'Poppins_400Regular', fontSize: 13, lineHeight: 19.5, color: "#000000" }}>Leitor de Qr code</Text></Pressable>
            </View>
          </View>
          <Modal animationType="slide" visible={showModal} onRequestClose={() => setShowModal(false)}>
          <ScrollView>
              <View style={{width:'100%',padding:14, alignItems:'center',justifyContent:'center',backgroundColor:'#fff',shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,}}>
                  <Text style={{fontFamily:'Inter_600SemiBold',fontSize:19,}}>Bem vindo</Text></View>
              <View style={{lignSelf: 'stretch',
        width:'100%',
        padding:25,
        justifyContent: 'center',
        alignItems:'center',}}>
                <View style={{width:'100%',justifyContent:'center',alignItems:'center'}}><Pressable style={{width:250,
        height:250,
        backgroundColor:"#D9D9D9",
        borderRadius:200,}}></Pressable></View>
                <View style={{width:'50%',justifyContent:'center',alignItems:'center',marginVertical:20}}><Text style={{fontFamily:'Inter_900Black',fontSize:13}}>Joaoborba@gmail.com</Text></View>
                <View style={{width:'50%',justifyContent:'center',alignItems:'center',marginVertical:0}}><Text style={{fontFamily:'Poppins_400Regular',fontSize:13}}>João Borba Nascimento</Text></View>
              </View>
              <View>
                <View style={{padding:15}}><Text style={{fontSize:15,fontFamily:'Poppins_400Regular'}}>Coisas que você também pode gostar:</Text></View>
                <CuriFlat  data={Point2}/>
              </View>
            </ScrollView>
          </Modal>
        </View>
        <Modal animationType="slide" visible={showModalS} onRequestClose={() => setShowModalS(false)}>
          <ScrollView>
              <View style={{width:'100%',padding:15,justifyContent:'center',minHeight:90,alignItems:'center'}}>
                  <Text style={{fontSize:18,fontFamily:'Inter_600SemiBold'}}>Área educacional</Text>
                  <Text style={{fontSize:12,color:'#ccc'}}>22/11/2022</Text>
              </View>
              <SoundPlayer mp3={require('./assets/audio.mp3')}/>
              <View style={{padding:15}}>
                <Text style={{fontSize:13,fontFamily:'Poppins_400Regular'}}>Ao longo de mais de dois séculos, o Louvre conseguiu manter sua importância e é hoje o museu mais conhecido e visitado de todo o mundo. Também é casa de algumas das principais obras de arte do Ocidente, entre elas Mona Lisa e Vênus de Milo. O Museu do Louvre é o mais conhecido e visitado do mundo. Em 2019, antes da pandemia, recebeu 9,6 milhões de visitantes, ou 40 visitantes por minuto. Em seus 6 hectares de área estão expostas 38 mil obras de arte – de um total de 615 mil no acervo completo.</Text>
                <Text style={{fontSize:13,fontFamily:'Poppins_400Regular'}}>Ao longo de mais de dois séculos, o Louvre conseguiu manter sua importância e é hoje o museu mais conhecido e visitado de todo o mundo. Também é casa de algumas das principais obras de arte do Ocidente, entre elas Mona Lisa e Vênus de Milo. O Museu do Louvre é o mais conhecido e visitado do mundo. Em 2019, antes da pandemia, recebeu 9,6 milhões de visitantes, ou 40 visitantes por minuto. Em seus 6 hectares de área estão expostas 38 mil obras de arte – de um total de 615 mil no acervo completo.</Text>
              </View>
              
          </ScrollView> 
        </Modal>
        <StatusBar  barStyle="dark" />
      </ScrollView>
      
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName='Home' >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name='Histórico da Cidade' component={Hist}/>
        <Stack.Screen name='Fontes Históricas' component={Fontes}/>
        <Stack.Screen name='Patrimônios materiais' component={Patri}/>
        <Stack.Screen name='Personalidades' component={Personas}/>
        <Stack.Screen name='Fotografias históricas' component={Fotografias}/>
        <Stack.Screen name='Museu municipal' component={Museu}/>
        <Stack.Screen name='Leitor de Qr code' component={Leitor}/>
        <Stack.Screen name='Pontos históricos' component={Map}/>
      </Stack.Navigator>
    </NavigationContainer>
    
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
    height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    justifyContent: 'center',
    alignItems:'center'
  }
  
});

export default App;