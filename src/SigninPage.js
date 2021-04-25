import React, { useState } from "react";
import "react-native-gesture-handler";
import { firebase } from "./firebase/config";
import { Input } from "react-native-elements";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  ImageBackground,
} from "react-native";

const signInPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid;
        const usersRef = firebase.database().ref("Users/" + uid + "/First/");
        usersRef
          .get()
          .then((firebaseDocument) => {
            if (!firebaseDocument.exists) {
              alert("User does not exist anymore.");
              return;
            }
            navigation.navigate("homePage", {
              First: JSON.stringify(firebaseDocument),
            });
          })
          .catch((error) => {
            alert("error" + error);
          });
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={require("../assets/background.png")}
          style={styles.background}
        >
          <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            <View style={{ marginTop: "50%", marginLeft: 30, marginRight: 30 }}>
              <View>
                <Text style={styles.bigTitle}>Log masuk</Text>
              </View>

              <View style={styles.detailsContainer}>
                <View>
                  <Text style={styles.description}>Masukkan maklumat anda</Text>

                  <Input
                    placeholder="Emel"
                    placeholderTextColor="#FFFFFF"
                    inputStyle={{ color: "#FFFFFF" }}
                    inputContainerStyle={{ borderBottomColor: "#FFFFFF" }}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    leftIcon={{
                      type: "zocial",
                      name: "email",
                      color: "#FFFFFF",
                    }}
                  />

                  <Input
                    placeholder="Password"
                    placeholderTextColor="#FFFFFF"
                    inputStyle={{ color: "#FFFFFF" }}
                    inputContainerStyle={{ borderBottomColor: "#FFFFFF" }}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    leftIcon={{
                      type: "fontawesome",
                      name: "lock",
                      color: "#FFFFFF",
                    }}
                    secureTextEntry={true}
                  />

                  <View style={{ alignItems: "center", marginTop: 25 }}>
                    <TouchableOpacity
                      style={styles.buttonStyle}
                      onPress={signIn}
                    >
                      <Text style={styles.buttonText}>Log masuk</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  bigTitle: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    color: "#383838",
  },
  detailsContainer: {
    marginTop: 50,
    marginLeft: 15,
    marginRight: 15,
    paddingBottom: 30,
  },
  description: {
    fontSize: 20,
    paddingBottom: 20,
    color: "#FFFFFF",
  },
  termAndCondition: {
    paddingLeft: 15,
    fontSize: 15,
  },
  buttonStyle: {
    alignItems: "center",
    width: 200,
    padding: 10,
    borderRadius: 30,
    backgroundColor: "#34433C",
  },
  buttonText: {
    fontSize: 20,
    color: "white",
  },
});

export default signInPage;
