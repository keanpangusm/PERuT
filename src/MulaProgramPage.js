import React, { useState, useEffect } from "react";
import "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
  ImageBackground,
  Dimensions,
} from "react-native";
import { firebase } from "./firebase/config";

const mulaProgramPage = ({ navigation }) => {
  const [videoId, setVideoID] = useState(1);

  useEffect(() => {
    firebase
      .database()
      .ref("/Admin/Video/")
      .once("value", (snapshot) => {
        const firebasedata = snapshot.val();
        setVideoID(firebasedata);
      });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <ImageBackground
          source={require("../assets/background.png")}
          style={styles.background}
        >
          <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            <View
              style={{
                marginTop: 30,
                marginLeft: 40,
                marginRight: 40,
                marginBottom: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 30,
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#383838",
                }}
              >
                Mulakan{"\n"}program ini!
              </Text>
              <Text style={styles.textStyle}>
                Anda akan diminta untuk membuat beberapa perkara selama 1 bulan.
              </Text>
              <Text style={styles.textStyle}>
                Antaranya termasuklah, mengikuti audio yang disediakan dan
                membaca bahan yang disediakan.
              </Text>
              <Text style={styles.textStyle}>
                Mulakan dengan menekan bahan di bawah:
              </Text>
              <View style={{ alignItems: "center", marginTop: 20 }}>
                <TouchableOpacity
                  style={[styles.buttonStyle, { backgroundColor: "#34433C" }]}
                  onPress={() => navigation.navigate("introPage")}
                >
                  <Text style={[styles.buttonText, { color: "white" }]}>
                    1. Selamat datang! Pendahuluan
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ alignItems: "center", marginTop: 15 }}>
                <TouchableOpacity
                  style={[styles.buttonStyle, { backgroundColor: "#34433C" }]}
                  onPress={() =>
                    navigation.navigate("audioPage", {
                      VideoID: videoId,
                    })
                  }
                >
                  <Text style={[styles.buttonText, { color: "white" }]}>
                    2. Audio Pengurangan Kembung Perut
                  </Text>
                </TouchableOpacity>
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
  textStyle: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
    color: "#FFFFFF",
  },
  buttonStyle: {
    alignItems: "center",
    width: 250,
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
  },
});

export default mulaProgramPage;
