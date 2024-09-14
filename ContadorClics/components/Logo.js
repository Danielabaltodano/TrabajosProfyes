import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const Logo = () => {
  return (
    <View style={styles.contenedorLogo}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedorLogo: {
    flex: 0.5,  
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3a86ff', 
    width: '100%',
    paddingVertical: 5, 
  },
  logo: {
    width: 300,  
    height: 60,
    resizeMode: 'contain',
  },
});

export default Logo;
