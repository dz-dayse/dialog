import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
 return (
    <View style={styles.container}>
      <Text style={styles.title}>Dialog</Text>
      <Text style={styles.welcome}>Seja bem vindo(a)</Text>
      <Text style={styles.welcome}>Você deseja:</Text>
      <View style={styles.buttonContainer}>
        <Button title="Fazer Cadastro" color="#880088" onPress={() => Alert.alert('Fazer Cadastro')} />
        <Button title="Fazer Login" color="#880088" onPress={() => Alert.alert('Fazer Login')} />
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