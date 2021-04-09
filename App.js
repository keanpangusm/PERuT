import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer }  from '@react-navigation/native';
import { createStackNavigator }  from '@react-navigation/stack';
import firstPage from './src/FirstPage';
import signupPage from './src/SignupPage';
import homePage from './src/HomePage';

const app  = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="firstPage" component={firstPage} options={{ headerShown: false }}/> */}
        {/* <Stack.Screen name="signupPage" component={signupPage} options={{ headerShown: false }}/> */}
        <Stack.Screen name="homePage" component={homePage} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const Stack = createStackNavigator();

export default app;