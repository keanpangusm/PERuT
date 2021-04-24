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
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const homePage = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <View style={{ flex: 1 }}>
        <View style={{ flex: 20 }} />
        <View style={{ flex: 60 }}>
          <View style={{ flex: 1 }}>
            <Text style={[styles.bigTitle, { flex: 1 }]}>
              Selamat Datang{"\n"}ke PERuT!
            </Text>
            <Text style={styles.smallDescription}>
              Sila pilih penggunaan anda
            </Text>
            <View style={{ flex: 2 }}>
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
                style={{ textDecorationLine: "underline", color: "#007bff" }}
              >
                https://www.mygutbraincenter.com
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const LoginAndSignupButton = () => {
  const navigation = useNavigation();
  return (
    <View style={{ alignItems: "center", marginTop: 30 }}>
      <TouchableOpacity
        style={[styles.buttonStyle, { backgroundColor: "#E98C53" }]}
        onPress={() => navigation.navigate("greetingPage")}
      >
        <Text style={[styles.buttonText, { color: "white" }]}>
          Perut Kembung
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.buttonStyle,
          { borderColor: "black", borderWidth: 1, marginTop: 20 },
        ]}
        onPress={() => Linking.openURL("https://www.google.com/")}
      >
        <Text style={styles.buttonText}>PPBe Diet</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bigTitle: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 35,
  },
  smallDescription: {
    textAlign: "center",
    fontSize: 23,
    marginTop: 50,
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
