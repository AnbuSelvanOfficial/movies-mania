import * as React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import SplashScreen from './components/Splash/SplashScreen';
import LoginScreen from './components/Login/LoginScreen';
import HomeScreen from './components/Home/HomeScreen';
import SignupScreen from './components/Signup/SignupScreen';
import AcCreatedSuccessScreen from './components/Success/AcCreatedSuccessScreen';
import RePasswordSuccessScreen from './components/Success/RePasswordSuccessScreen';
import ForgotPasswordScreen from './components/Forgot/ForgotPasswordScreen';
import TrailersScreen from './components/Trailers/TrailersScreen';
import MoviesListScreen from './components/Movies/MoviesListScreen';
import ProfileScreen from './components/Profile/ProfileScreen';
import MoviesDetailsScreen from './components/Movies/MoviesDetailsScreen';
import FavoritesScreen from './components/Favorites/FavoritesScreen';

const Stack = createNativeStackNavigator();

function App({navigation}) {
  const handleLogout = () => {
    AsyncStorage.clear();
    navigation.navigate('Login');
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: true}} >

        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} /> 
        <Stack.Screen name="Login"  component={LoginScreen} options={{ headerShown: false }} /> 
        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} /> 
        <Stack.Screen name="Forgot" component={ForgotPasswordScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AcSuccess" component={AcCreatedSuccessScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ReSuccess" component={RePasswordSuccessScreen} options={{ headerShown: false }} />  

        <Stack.Screen
          name="Home"
          screenOptions={{headerShown: true}}
          component={HomeScreen}
          options={{
            headerTitle: () => (
              <TouchableOpacity>
                <Text style={styles.HeadText}> Home </Text>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity >
                <FontAwesome name="sign-out" size={24} color="black" />
              </TouchableOpacity>
            ),
          }}
        /> 
        
        <Stack.Screen
          name="Trailers"
          screenOptions={{headerShown: true}}
          component={TrailersScreen}
          options={{
            headerTitle: () => (
              <TouchableOpacity>
                <Text style={styles.HeadText}>Watch Latest Trailers </Text>
              </TouchableOpacity>
            ),
          }}
        /> 

         <Stack.Screen
          name="MoviesList"
          screenOptions={{headerShown: true}}
          component={MoviesListScreen}
          options={{
            headerTitle: () => (
              <TouchableOpacity>
                <Text style={styles.HeadText}>  Latest Movies </Text>
              </TouchableOpacity>
            ), 
          }}
        /> 

        <Stack.Screen
          name="Profile"
          screenOptions={{headerShown: true}}
          component={ProfileScreen}
          options={{
            headerTitle: () => (
              <TouchableOpacity>
                <Text style={styles.HeadText}> Your Profile </Text>
              </TouchableOpacity>
            ),
          }}
        />

        <Stack.Screen
          name="MoviesDetails"
          screenOptions={{headerShown: true}}
          component={MoviesDetailsScreen}
          options={{
            headerTitle: () => (
              <TouchableOpacity>
                <Text style={styles.HeadText}>  Details </Text>
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="Favorites"
          screenOptions={{headerShown: true}}
          component={FavoritesScreen}
          options={{
            headerTitle: () => (
              <TouchableOpacity>
                <Text style={styles.HeadText}>  Favorites </Text>
              </TouchableOpacity>
            ),
          }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({ 
  
  HeadText: {
    alignSelf: 'center',
    fontSize: 30,
  },

})  
export default App;