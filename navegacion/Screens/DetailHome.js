import { View, Text, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function DetailHome() {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: 'pink', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: 'black' }}>DetailHome</Text>
      <Button 
        title="MAS DETALLES" 
        onPress={() => navigation.navigate('AnotherDetailHome')}
        color="blue" // Color del botón
      />
    </View>
  );
}
