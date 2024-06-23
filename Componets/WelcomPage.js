import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ButtonWelcome from './ButtonWelcome';

// Import the image directly
const PBKWP = require('../assets/pictueWelcomePage.jpg'); // Assuming it's a JPEG image

const WelcomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={PBKWP} style={styles.imageBackground}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}>GymGo</Text>
        <Text style={styles.subtitle}>Live the Healthy Life</Text>
        <View style={styles.buttonContainer}>
          <ButtonWelcome
            title="Log In with email"
            onPress={() => navigation.navigate("LogIn")}
          />
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>
              Don't have an account ?
              <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                <Text style={styles.signupLink}>Sign Up</Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    marginTop: 50,
  },
  subtitle: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 12,
  },
  signupContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  signupText: {
    fontSize: 12,
    color: "white",
    textAlign: "center",
  },
  signupLink: {
    fontSize: 12,
    color: "white",
    
  },
});
