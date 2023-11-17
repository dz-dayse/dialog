import React from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
 const [email, setEmail] = React.useState('');
 const [code, setCode] = React.useState('');

 const handleAvancar = () => {
   Alert.alert('Email inserido:', email);
   Alert.alert('Código inserido:', code);
 };

 return (
    <View style={styles.container}>
      <Text style={styles.title}>DIALOG</Text>
      <Text style={styles.welcome}>Enviamos um código para seu email.</Text>
     
      <TextInput
        style={styles.input}
        placeholder="Digite o código"
        onChangeText={setCode}
        value={code}
      />
      <Button title="Avançar" color="#880088" onPress={handleAvancar} />
      <Text style={styles.privacyText}>Reenviar código</Text>
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