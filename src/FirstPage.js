import React from "react";
import "react-native-gesture-handler";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  Image,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const firstPage = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />

      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require("../assets/background.png")}
          style={styles.background}
        >
          <View style={{ flex: 20 }} />
          <View style={{ flex: 60 }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.bigTitle}>Selamat Datang{"\n"}ke PERuT!</Text>
              <View>
                <LoginAndSignupButton />
              </View>
            </View>
          </View>
          <View style={{ flex: 20 }} />
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const LoginAndSignupButton = () => {
  const navigation = useNavigation();

  return (
    <View style={{ alignItems: "center" }}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <TouchableOpacity
        style={[styles.buttonStyle, { backgroundColor: "#34433C" }]}
        onPress={() => navigation.navigate("signUpPage")}
      >
        <Text style={[styles.buttonText, { color: "white" }]}>
          Daftar akaun baru
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.buttonStyle,
          {
            marginTop: 20,
            backgroundColor: "#FFFFFF",
          },
        ]}
        onPress={() => navigation.navigate("signInPage")}
      >
        <Text style={styles.buttonText}>Sudah mempunyai akaun?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  logo: {
    width: 85,
    height: 110,
    marginTop: 10,
    marginBottom: 10,
  },
  bigTitle: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 35,
    color: "#383838",
  },
  buttonStyle: {
    alignItems: "center",
    width: 300,
    padding: 15,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 20,
  },
});

export default firstPage;
