import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error logging out: ', error);
    }
  };

  return (
    <ImageBackground source={require('../assets/appbackground.png')} style={styles.background}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>LOGO HERE</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.headline}>Welcome to my React Test App</Text>
        <Text style={styles.paragraph}>
          I am testing different functionalities of React-Native App, like Database Stuff, Authentications and other Shenanigans
        </Text>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Products')}
          style={styles.viewDataButton}
          labelStyle={styles.buttonLabel}
        >
          View Data
        </Button>
        <Button
          mode="contained"
          onPress={handleLogout}
          style={styles.logoutButton}
          labelStyle={styles.buttonLabel}
        >
          Logout
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
  logoContainer: {
    position: 'absolute',
    top: 50,
    alignItems: 'center',
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 100,
  },
  headline: {
    fontSize: 28,
    marginBottom: 20,
    color: '#fff',
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 40,
    color: '#fff',
    textAlign: 'center',
  },
  viewDataButton: {
    borderRadius: 12,
    padding: 10,
    width: '80%',
    backgroundColor: '#4CAF50',
    marginBottom: 20,
  },
  logoutButton: {
    borderRadius: 12,
    padding: 10,
    width: '80%',
    backgroundColor: '#FF6347', // Tomato color for the logout button
  },
  buttonLabel: {
    fontSize: 18,
    color: '#fff',
  },
});

export default HomeScreen;
