import React, { useState } from "react";
import "react-native-gesture-handler";
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

const signupPage = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <ScrollView
        style={{ flex: 1, paddingLeft: 30, paddingRight: 30 }}
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
  const [isSelected, setSelection] = useState(false);

  return (
    <View>
      <Text style={styles.description}>Masukkan maklumat anda</Text>

      <Input
        placeholder="Nama"
        leftIcon={{
          type: "antdesign",
          name: "user",
        }}
      />

      <Input
        placeholder="Emel"
        leftIcon={{
          type: "zocial",
          name: "email",
        }}
      />

      <Input
        placeholder="Telephone Bimbit"
        leftIcon={{
          type: "fontawesome",
          name: "phone",
        }}
      />

      <Input
        placeholder="Password"
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
        <TouchableOpacity style={styles.buttonStyle}>
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
