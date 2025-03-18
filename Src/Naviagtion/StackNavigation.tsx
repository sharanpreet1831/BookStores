import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import LandingPage from '../Screen/LandingPage'
import Wishlist from '../Screen/Wishlist'
import Cart from '../Screen/Cart'
import Login_signup from '../Screen/Login_signup'



const stack = createStackNavigator();
const StackNavigation = () => {

  return (
   <NavigationContainer>
    <stack.Navigator 
    initialRouteName='Login_signup'
    screenOptions={{
      headerShadowVisible : false,
      headerShown : false 
    }}
    >
      <stack.Screen name='Login_signup' component={Login_signup} />
      <stack.Screen name='LandingPage' component={LandingPage} />
      <stack.Screen name='Wishlist' component={Wishlist} />
      <stack.Screen name='Cart' component={Cart} />
      

    </stack.Navigator>
   </NavigationContainer>
  )
}

export default StackNavigation

const styles = StyleSheet.create({})