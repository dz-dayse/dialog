import React from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
 const [email, setEmail] = React.useState('');

 return (
    <View style={styles.container}>
      <Text style={styles.title}>DIALOG</Text>
      <Text style={styles.welcome}>Digite seu endereço de email para iniciar:</Text>
      <TextInput
        style={styles.input}
        placeholder="Seu email"
        onChangeText={setEmail}
        value={email}
      />
      <Button title="Avançar" color="#880088" onPress={() => Alert.alert('Email inserido:', email)} />
      <Text style={styles.privacyText}>Veja nossa declaração de privacidade</Text>
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
 input: {
    borderColor: 'black',
    borderWidth: 1,
    width: '80%',
    marginBottom: 10,
    paddingHorizontal: 5,
 },
 privacyText: {
    color: '#880088',
    marginTop: 20,
 },
});