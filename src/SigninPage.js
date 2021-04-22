import React, { useState } from "react";
import "react-native-gesture-handler";
import { firebase } from './firebase/config'
import { Input } from "react-native-elements";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";

const signupPage = ({navigation}) => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const signIn = () =>{
    firebase.auth().signInWithEmailAndPassword(email, password).then((response) => {
      const uid = response.user.uid
      const usersRef = firebase.database().ref('Users/'+uid)
      usersRef.get().then(firebaseDocument => {
        if (!firebaseDocument.exists) {
            alert("User does not exist anymore.")
            return;
        }
        navigation.navigate('homePage')
      })
      .catch(error => {
          alert("error"+error)
      });
    })
    .catch(error => {
        alert(error)
    })
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <ScrollView
        style={{ flex: 1, paddingLeft: 30, paddingRight: 30, marginBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flex: 1, marginTop: 40 }}>
          <Text style={styles.bigTitle}>
            Log masuk
          </Text>
        </View>

        <View style={styles.detailsContainer}>
          <View>
            <Text style={styles.description}>Masukkan maklumat anda</Text>

            <Input
              placeholder="Emel"
              onChangeText={(text) => setEmail(text)}
              value={email}
              leftIcon={{
                type: "zocial",
                name: "email",
              }}
            />

            <Input
              placeholder="Password"
              onChangeText={(text) => setPassword(text)}
              value={password}
              leftIcon={{
                type: "fontawesome",
                name: "lock",
              }}
              secureTextEntry={true}
            />

            <View style={{ alignItems: "center", marginTop: 25 }}>
              <TouchableOpacity style={styles.buttonStyle} onPress={signIn}>
                <Text style={styles.buttonText}>Log masuk</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bigTitle: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
  detailsContainer: {
    flex: 4,
    marginTop: 30,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,
    paddingBottom: 30,
  },
  description: {
    fontSize: 20,
    paddingBottom: 20,
    color: "#1DAD58",
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
    backgroundColor: "#E98C53",
  },
  buttonText: {
    fontSize: 20,
    color: "white",
  },
});

export default signupPage;
