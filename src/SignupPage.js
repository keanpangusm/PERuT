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
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
import { useNavigation } from "@react-navigation/native";

const signUpPage = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <ScrollView
        style={{ flex: 1, marginLeft: 30, marginRight: 30 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flex: 1, marginTop: 40 }}>
          <Text style={styles.bigTitle}>
            Daftar untuk mulakan{"\n"}terapi anda
          </Text>
        </View>

        <View style={styles.detailsContainer}>
          <Details />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Details = () => {
  const navigation = useNavigation();
  const signUp = () => {
    if (validation()) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((response) => {
          const uid = response.user.uid;
          const data = {
            Id: uid,
            Email: email,
            Name: name,
            Phone: phNo,
            First: "yes",
          };
          const usersRef = firebase.database().ref("Users/" + uid);
          usersRef
            .set(data)
            .then(() => {
              alert("Congratulation! You have registered!");
              navigation.navigate("signInPage");
            })
            .catch((error) => {
              alert(error);
            });
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  const validation = () => {
    if (name.length == 0) {
      alert("Your name cannot be empty!");
      return false;
    }
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(email) === false) {
      alert("Your email is invalid!");
      return false;
    }
    if (phNo.length < 10 || phNo.length > 11) {
      alert("Your phone number is invalid!");
      return false;
    }
    if (password.length < 8) {
      alert("Your password must have at least 8 digits!");
      return false;
    }
    if (!isSelected) {
      alert("Please accept the terms and conditions!");
      return false;
    }
    return true;
  };

  const [isSelected, setSelection] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phNo, setPhNo] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <Text style={styles.description}>Masukkan maklumat anda</Text>

      <Input
        placeholder="Nama"
        onChangeText={(text) => setName(text)}
        value={name}
        leftIcon={{
          type: "antdesign",
          name: "user",
        }}
      />

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
        placeholder="Telephone Bimbit"
        onChangeText={(text) =>
          setPhNo(text.replace(/([-.*#+?^=!:${}()|\[\]\/\\])/g, ""))
        }
        value={phNo}
        keyboardType="number-pad"
        leftIcon={{
          type: "fontawesome",
          name: "phone",
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

      <View style={{ flexDirection: "row" }}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={{
            transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
            paddingTop: 40,
          }}
        />
        <Text style={styles.termAndCondition}>
          {"Saya terima, "}
          <Text style={{ color: "#1DAD58" }}>
            {"syarat "}
            <Text style={{ color: "black" }}>
              {"& "}
              <Text style={{ color: "#1DAD58" }}>
                {"\n"}
                {"polisi pengumpulan data"}
              </Text>
            </Text>
          </Text>
        </Text>
      </View>

      <View style={{ alignItems: "center", marginTop: 25 }}>
        <TouchableOpacity style={styles.buttonStyle} onPress={signUp}>
          <Text style={styles.buttonText}>Daftar akaun</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    marginTop: 50,
    marginLeft: 15,
    marginRight: 15,
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

export default signUpPage;
