import React from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
 const [password, setPassword] = React.useState('');
 const [confirmPassword, setConfirmPassword] = React.useState('');
 const [acceptedTerms, setAcceptedTerms] = React.useState(false);

 const handleCreateAccount = () => {
   if (password.length < 8) {
     Alert.alert('A senha deve ter no mínimo 8 caracteres');
   } else if (password !== confirmPassword) {
     Alert.alert('As senhas não correspondem');
   } else if (!acceptedTerms) {
     Alert.alert('Aceite os termos de privacidade para continuar');
   } else {
     Alert.alert('Conta criada com sucesso!');
   }
 };

 return (
    <View style={styles.container}>
      <Text style={styles.title}>CRIE SUA CONTA</Text>
      <TextInput
        style={styles.input}
        placeholder="Crie uma senha"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Digite senha novamente"
        onChangeText={setConfirmPassword}
        value={confirmPassword}
        secureTextEntry
      />
      <Button title="Crie sua conta" color="#880088" onPress={handleCreateAccount} />
      <Text style={styles.privacyText}>
        Ao criar uma conta, você concorda com os{' '}
        <Text style={styles.acceptedTerms} onPress={() => setAcceptedTerms(!acceptedTerms)}>
          termos de privacidade
        </Text>
      </Text>
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
 acceptedTerms: {
    color: '#880088',
    textDecorationLine: 'underline',
 },
});