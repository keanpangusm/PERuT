import React, { useState, useEffect } from "react";
import "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
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
        <View style={[styles.top, { flex: 80 }]}>
          <View style={{ marginTop: 50, marginLeft: 40, marginRight: 40 }}>
            <Text style={{ color: "white", fontSize: 20 }}>Hi, {name}!</Text>
            <Text style={{ fontWeight: "bold", fontSize: 35, marginTop: 40 }}>
              Pihak kami sangat mengalu-alukan penyertaan anda
            </Text>
            <Text style={{ fontSize: 25, marginTop: 40 }}>
              Sebelum kita bermula, anda diminta untuk menjawab beberapa soalan.
            </Text>
          </View>
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
              style={[styles.buttonStyle, { backgroundColor: "#E98C53" }]}
              onPress={() => navigation.navigate("firstQuestionPage")}
            >
              <Text style={[styles.buttonText, { color: "white" }]}>Ok!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  top: {
    borderBottomLeftRadius: 55,
    borderBottomRightRadius: 55,
    backgroundColor: "#70D789",
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
