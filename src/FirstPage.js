import React from "react";
import "react-native-gesture-handler";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const firstPage = ({ navigation }) => {
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
            <View style={{ flex: 2 }}>
              <LoginAndSignupButton navigation={{ navigation }} />
            </View>
          </View>
        </View>
        <View style={{ flex: 20 }} />
      </View>
    </SafeAreaView>
  );
};

const LoginAndSignupButton = () => {
  const navigation = useNavigation();

  return (
    <View style={{ alignItems: "center", marginTop: 80 }}>
      <TouchableOpacity
        style={[styles.buttonStyle, { backgroundColor: "#E98C53" }]}
        onPress={() => navigation.navigate("signupPage")}
      >
        <Text style={[styles.buttonText, { color: "white" }]}>
          Daftar akaun baru
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.buttonStyle,
          { borderColor: "black", borderWidth: 1, marginTop: 20 },
        ]}
        onPress={() => navigation.navigate("homePage")}
      >
        <Text style={styles.buttonText}>Sudah mempunyai akaun?</Text>
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
