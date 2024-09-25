import { View, Text, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: 'green', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: 'white' }}>Home</Text>
      <Button 
        title="GO DETAILS" 
        onPress={() => navigation.navigate('DetailHome')}
        color="blue" // Color del botón
      />
    </View>
  );
}
