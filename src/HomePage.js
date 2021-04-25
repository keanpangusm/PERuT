import React from "react";
import "react-native-gesture-handler";
import {
  Linking,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  Dimensions,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const homePage = () => {
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
              <View style={{ alignItems: "center" }}>
                <Image
                  source={require("../assets/logo.png")}
                  style={styles.logo}
                />
              </View>
              <Text style={styles.smallDescription}>
                Sila pilih penggunaan anda
              </Text>
              <View>
                <LoginAndSignupButton />
              </View>
            </View>
          </View>
          <View style={{ flex: 20 }}>
            <View
              style={{
                position: "absolute",
                bottom: 30,
                marginLeft: 10,
                marginRight: 10,
                color: "#383838",
              }}
            >
              <Text>
                {
                  "Applikasi ini disediakan oleh pihak My Gut-Brain Center Hospital Universiti Sains Malaysia, Kubang Kerian "
                }
              </Text>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL("https://www.mygutbraincenter.com");
                }}
              >
                <Text
                  style={{ textDecorationLine: "underline", color: "#F19A57" }}
                >
                  https://www.mygutbraincenter.com
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const LoginAndSignupButton = () => {
  const navigation = useNavigation();
  return (
    <View style={{ alignItems: "center", marginTop: 30 }}>
      <TouchableOpacity
        style={[styles.buttonStyle, { backgroundColor: "#34433C" }]}
        onPress={() => navigation.navigate("greetingPage")}
      >
        <Text style={[styles.buttonText, { color: "white" }]}>
          Perut Kembung
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.buttonStyle,
          { marginTop: 20, backgroundColor: "#FFFFFF" },
        ]}
        onPress={() => Linking.openURL("https://www.google.com/")}
      >
        <Text style={styles.buttonText}>PPBe Diet</Text>
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
  smallDescription: {
    textAlign: "center",
    fontSize: 23,
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

export default homePage;
