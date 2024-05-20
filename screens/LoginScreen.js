import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, Alert } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';  // Import the Firebase auth

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, username, password);
      navigation.navigate('Home');  // Navigate to Home on successful login
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <ImageBackground source={require('../assets/appbackground2.png')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          label="Username"
          value={username}
          onChangeText={text => setUsername(text)}
          style={styles.input}
          mode="outlined"
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          mode="outlined"
          secureTextEntry
        />
        <Button
          mode="contained"
          onPress={handleLogin}
          style={styles.loginButton}
          labelStyle={styles.buttonLabel}
        >
          Login
        </Button>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    color: '#fff',
  },
  input: {
    width: '80%',
    marginBottom: 20,
    borderRadius: 12,
  },
  loginButton: {
    borderRadius: 12,
    padding: 10,
    width: '80%',
    backgroundColor: '#4CAF50',
  },
  buttonLabel: {
    fontSize: 18,
    color: '#fff',
  },
});

export default LoginScreen;
