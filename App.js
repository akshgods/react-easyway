/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// createSwitchNavigator
//   createStackNavigator
// we are gooing to create blank header, each header we are going to design diffrently
//   screens 1:
//     Welcome Screen
//     SignIn
//     SignUp

//   screen 2:
//   HomeScreen
//   selectDateScreen
  

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createSwitchNavigator,createStackNavigator } from "react-navigation";
import AuthLodingSreen from './screens/AuthLodingSreen';
import WelcomeScreen from './screens/WelcomeScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';

const AuthNav=createStackNavigator(
  {
  Welcome:WelcomeScreen,
  SignIn:SignInScreen,
  SignUp:SignUpScreen,
})

const HomeNav=createStackNavigator({
  Home:HomeScreen
},
{
  /* The header config from HomeScreen is now here */
  navigationOptions: {
    header:null
  },
}
)

export default createSwitchNavigator({
  AuthLoding:AuthLodingSreen,
  Auth:AuthNav,
  HomeNav:HomeNav
})