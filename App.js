import React from "react";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import firstPage from "./src/FirstPage";
import signUpPage from "./src/SignupPage";
import signInPage from "./src/SigninPage";
import homePage from "./src/HomePage";
import greetingPage from "./src/GreetingPage";
import firstQuestionPage from "./src/FirstQuestionPage";
import secondQuestionPage from "./src/SecondQuestionPage";
import thirdQuestionPage from "./src/ThirdQuestionPage";
import guidePage from "./src/GuidePage";
import setReminderPage from "./src/SetReminderPage";
import mulaProgramPage from "./src/MulaProgramPage";
import introPage from "./src/IntroPage";
import audioPage from "./src/AudioPage";
import feedBackPage from "./src/FeedBackPage";
import mainMenuPage from "./src/MainMenuPage";
import articlePage from "./src/ArticlePage";
import chatPage from "./src/ChatPage";

const app = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="firstPage"
            component={firstPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="signUpPage"
            component={signUpPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="signInPage"
            component={signInPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="homePage"
            component={homePage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="greetingPage"
            component={greetingPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="firstQuestionPage"
            component={firstQuestionPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="secondQuestionPage"
            component={secondQuestionPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="thirdQuestionPage"
            component={thirdQuestionPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="guidePage"
            component={guidePage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="setReminderPage"
            component={setReminderPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="mulaProgramPage"
            component={mulaProgramPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="introPage"
            component={introPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="audioPage"
            component={audioPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="feedBackPage"
            component={feedBackPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="mainMenuPage"
            component={mainMenuPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="articlePage"
            component={articlePage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="chatPage"
            component={chatPage}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const Stack = createStackNavigator();

export default app;
