import React from "react";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import firstPage from "./src/FirstPage";
import signupPage from "./src/SignupPage";
import homePage from "./src/HomePage";
import greetingPage from "./src/GreetingPage";
import firstQuestionPage from "./src/FirstQuestionPage";
import thirdQuestionPage from "./src/ThirdQuestionPage";
import guidePage from "./src/GuidePage";
import setReminderPage from "./src/SetReminderPage";

const app = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen
            name="firstPage"
            component={firstPage}
            options={{ headerShown: false }}
          /> */}
          {/* <Stack.Screen
            name="signupPage"
            component={signupPage}
            options={{ headerShown: false }}
          /> */}
          {/* <Stack.Screen
            name="homePage"
            component={homePage}
            options={{ headerShown: false }}
          /> */}
          {/* <Stack.Screen
            name="greetingPage"
            component={greetingPage}
            options={{ headerShown: false }}
          /> */}
          {/* <Stack.Screen
            name="firstQuestionPage"
            component={firstQuestionPage}
            options={{ headerShown: false }}
          /> */}
          {/* <Stack.Screen
            name="thirdQuestionPage"
            component={thirdQuestionPage}
            options={{ headerShown: false }}
          /> */}
          {/* <Stack.Screen
            name="guidePage"
            component={guidePage}
            options={{ headerShown: false }}
          /> */}
          <Stack.Screen
            name="setReminderPage"
            component={setReminderPage}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const Stack = createStackNavigator();

export default app;
