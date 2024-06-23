import React, { useCallback, useReducer, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TextInput, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import { validateInput } from '../Utils/Actions/FormActions';
import { reducer } from '../Utils/Reducers/FormReducers';

const logosignup = require('../assets/logosingup.webp');
const TestMode = true;

const initialState = {
  inputValues: {
    fullName: TestMode ? "" : "",
    email: TestMode ? "" : "",
    password: TestMode ? "" : ""
  },
  inputValidities: {
    fullName: false,
    email: false,
    password: false
  },
  formIsValid: false
};

const SignUp = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formState, dispatchFormState] = useReducer(reducer, initialState);

  const inputChangedHandler = useCallback((inputId, inputValue) => {
    const result = validateInput(inputId, inputValue);
    dispatchFormState({ inputId, validationResult: result, inputValue });
  }, [dispatchFormState]);

  const signUpHandler = () => {
    console.log('SignUp Button Pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={logosignup} resizeMode='contain' style={styles.logo} />
        <Text style={styles.signupText}>SignUp</Text>
        <Text style={styles.descriptionText}>
          Sign up for free and start meditating, and explore Meadic.
        </Text>
        <View style={styles.formContainer}>
          <View style={styles.inputGroup}>
            <TextInput 
              id='fullName'
              placeholder="Full Name"
              placeholderTextColor='gray'
              style={styles.input}
              value={formState.inputValues.fullName}
              onChangeText={(text) => inputChangedHandler('fullName', text)}
            />
          </View>

          <View style={styles.inputGroup}>
            <TextInput 
              id='email'
              placeholder="Email Address"
              placeholderTextColor='gray'
              style={styles.input}
              value={formState.inputValues.email}
              onChangeText={(text) => inputChangedHandler('email', text)}
            />
          </View>

          <View style={styles.inputGroup}>
            <TextInput 
              id='password'
              placeholder="Password"
              placeholderTextColor='gray'
              style={styles.input}
              secureTextEntry
              value={formState.inputValues.password}
              onChangeText={(text) => inputChangedHandler('password', text)}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={signUpHandler}>
            <Text style={styles.buttonText}>SignUp</Text>
          </TouchableOpacity>

          <View style={styles.bottomContainer}>
            <Text style={styles.bottomText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("LogIn")}>
              <Text style={[styles.bottomText, styles.logInText]}>LogIn</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#444',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 16,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 24,
  },
  signupText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginBottom: 24,
  },
  formContainer: {
    backgroundColor: '#333',
    borderRadius: 12,
    padding: 16,
  },
  inputGroup: {
    marginBottom: 16,
  },
  input: {
    height: 40,
    color: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  button: {
    backgroundColor: '#f0c',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 24,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  bottomText: {
    color: 'white',
    fontSize: 14,
  },
  logInText: {
    marginLeft: 8,
    textDecorationLine: 'underline',
  },
});

export default SignUp;
