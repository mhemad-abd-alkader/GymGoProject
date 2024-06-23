import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// Import screen components
import WelcomePage from './Componets/WelcomPage';
import LogIn from './Componets/LogIn';
import SignUp from './Componets/SignUp';

const Stack = createNativeStackNavigator();

// Define custom fonts


export default function App() {
  
  return (
    <SafeAreaProvider>
      <View style={styles.container} >
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='WelcomePage'>
            <Stack.Screen name="WelcomePage" component={WelcomePage} />
            <Stack.Screen name='LogIn' component={LogIn} />
            <Stack.Screen name='SignUp' component={SignUp} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
