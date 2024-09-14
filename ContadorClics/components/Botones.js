import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Botones = ({ incrementar, decrementar, reiniciar }) => {
  return (
    <View style={styles.botones}>
      <TouchableOpacity style={[styles.boton, styles.botonAzul]} onPress={incrementar}>
        <Text style={styles.textoBoton}>Clic</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.boton, styles.botonVerde]} onPress={reiniciar}>
        <Text style={styles.textoBoton}>Reiniciar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.boton, styles.botonRojo]} onPress={decrementar}>
        <Text style={styles.textoBoton}>Disminuir</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  botones: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
  },
  boton: {
    width: '80%', 
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 5, 
  },
  botonAzul: {
    backgroundColor: '#3a86ff',
  },
  botonVerde: {
    backgroundColor: '#2ec4b6',
  },
  botonRojo: {
    backgroundColor: '#ef233c',
  },
  textoBoton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Botones;
