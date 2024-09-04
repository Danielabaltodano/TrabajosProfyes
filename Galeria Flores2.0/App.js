import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Flores from './componente/Flores';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulotext}>Galeria de Florecitas</Text>
      <ScrollView>
        <Flores nombre= 'Flores amarillas'
        imagen={require('./imagenes/Flor1.jpeg')}></Flores>
        <Flores nombre= 'Flores bonitas'
        imagen={require('./imagenes/Flor 2.jpeg')}></Flores>
        <Flores nombre= 'Flores de sol'
        imagen={require('./imagenes/Flor 3.jpeg')}></Flores>
        <Flores nombre= 'Flores lindas'
        imagen={require('./imagenes/Flor 4.jpeg')}></Flores>
        <Flores nombre= 'Flores en monton'
        imagen={require('./imagenes/Flor 5.jpeg')}></Flores>
        <Flores nombre= 'Flor solitaria'
        imagen={require('./imagenes/Flor 6.jpeg')}></Flores>
        <Flores nombre= 'Flores varias'
        imagen={require('./imagenes/Flor 7.jpeg')}></Flores>
        <Flores nombre= 'otra flor sola '
        imagen={require('./imagenes/Flor 8.jpeg')}></Flores>
        <Flores nombre= 'Flores en pareja'
        imagen={require('./imagenes/Flor 9.jpeg')}></Flores>
        <Flores nombre= 'muchas flores'
        imagen={require('./imagenes/Flor 10.jpeg')}></Flores>
       </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:30,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  titulotext: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
