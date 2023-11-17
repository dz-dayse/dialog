import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
 return (
    <View style={styles.container}>
      <Text style={styles.title}>DIALOG</Text>
      <Text style={styles.welcome}>Acessar como:</Text>
      <View style={styles.buttonContainer}>
        <Button title="Usuário" color="#880088" onPress={() => Alert.alert('Usuário')} />
        <Button title="Responsável" color="#880088" onPress={() => Alert.alert('Responsável')} />
      </View>
    </View>
 );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ADD8E6',
 },
 title: {
    fontSize: 24,
    fontWeight: 'bold',
 },
 welcome: {
    fontSize: 18,
    marginBottom: 10,
 },
 buttonContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
 },
});