import React, { useState, useEffect } from "react";
import "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { firebase } from "./firebase/config";

const greetingPage = ({ navigation }) => {
  const userid = firebase.auth().currentUser.uid;
  const [name, setName] = useState("-");

  useEffect(() => {
    firebase
      .database()
      .ref("/Users/" + userid + "/")
      .once("value", (snapshot) => {
        const firebasedata = snapshot.val();
        setName(firebasedata["Name"]);
      });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require("../assets/background.png")}
          style={styles.background}
        >
          <View style={{ flex: 80 }}>
            <LinearGradient
              colors={["#000000", "#FFFFFF"]}
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={[styles.top, { flex: 1 }]}
            >
              <View style={{ marginTop: 50, marginLeft: 40, marginRight: 40 }}>
                <Text style={{ color: "#FFFFFF", fontSize: 20 }}>
                  Hi, {name}!
                </Text>
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontWeight: "bold",
                    fontSize: 35,
                    marginTop: 40,
                  }}
                >
                  Pihak kami sangat mengalu-alukan penyertaan anda
                </Text>
                <Text style={{ color: "#FFFFFF", fontSize: 25, marginTop: 40 }}>
                  Sebelum kita bermula, anda diminta untuk menjawab beberapa
                  soalan.
                </Text>
              </View>
            </LinearGradient>
          </View>
          <View style={{ flex: 20 }}>
            <View
              style={{
                marginTop: 40,
                marginLeft: 30,
                marginRight: 30,
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={[styles.buttonStyle, { backgroundColor: "#34433C" }]}
                onPress={() => navigation.navigate("firstQuestionPage")}
              >
                <Text style={[styles.buttonText, { color: "white" }]}>Ok!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  top: {
    borderBottomLeftRadius: 55,
    borderBottomRightRadius: 55,
  },
  buttonStyle: {
    alignItems: "center",
    width: 150,
    padding: 10,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 20,
  },
});

export default greetingPage;
