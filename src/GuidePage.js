import React from "react";
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
  Image,
} from "react-native";

const guidePage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <View style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={require("../assets/background.png")}
          style={styles.background}
        >
          <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            <View style={{ marginTop: 30, marginLeft: 40, marginRight: 40 }}>
              <Text
                style={{ fontSize: 25, textAlign: "center", color: "#383838" }}
              >
                Perkara yang anda perlu lakukan
              </Text>
              <View style={[styles.viewContainer, { marginTop: 10 }]}>
                <View style={{ alignItems: "center" }}>
                  <Image
                    source={require("../assets/dengar.png")}
                    style={{
                      width: 100,
                      height: 100,
                      marginTop: 10,
                      marginBottom: 10,
                    }}
                  />
                </View>
                <Text style={styles.viewText}>
                  Anda perlu dengar and ikuti arahan yang diberi dalam audio
                  yang bertujuan untuk mengurangkan gejala perut kembung anda.
                </Text>
              </View>
              <View style={styles.viewContainer}>
                <View style={{ alignItems: "center" }}>
                  <Image
                    source={require("../assets/rekod.png")}
                    style={{
                      width: 100,
                      height: 100,
                      marginTop: 10,
                      marginBottom: 10,
                    }}
                  />
                </View>
                <Text style={styles.viewText}>
                  Anda perlu mengisi borang soal selidik untuk mencatat
                  keberkesanan terapi tersebut. Soal selidik perlu diisi sebelum
                  intervensi, intervensi kali ke-6, intervensi kali ke-12, dan 1
                  bulan selepas intervensi.
                </Text>
              </View>
              <View style={styles.viewContainer}>
                <View style={{ alignItems: "center" }}>
                  <Image
                    source={require("../assets/baca.png")}
                    style={{
                      width: 100,
                      height: 100,
                      marginTop: 10,
                      marginBottom: 10,
                    }}
                  />
                </View>
                <Text style={styles.viewText}>
                  Bahan rujukan, artikel serta informasi mengenai perut kembung
                  akan dilampirkan pada applikasi ini. Anda diminta untuk
                  membaca dan memahaminya bagi tujuan pengurangan gejala anda.
                </Text>
              </View>
              <View style={styles.viewContainer}>
                <Text style={styles.viewText}>
                  Jika anda mempunyai sebarang masalah, anda boleh menghubungi
                  pihak kami melalui rangkaian yang disediakan atau menghubungi
                  pihak penyelidik
                </Text>
              </View>
              <View
                style={{
                  alignItems: "center",
                  marginTop: 35,
                  marginBottom: 40,
                }}
              >
                <TouchableOpacity
                  style={[styles.buttonStyle, { backgroundColor: "#34433C" }]}
                  onPress={() => navigation.navigate("setReminderPage")}
                >
                  <Text style={[styles.buttonText, { color: "white" }]}>
                    Teruskan
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
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
  viewContainer: {
    marginTop: 15,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    paddingBottom: 30,
    borderRadius: 20,
    backgroundColor: "#F19A57",
  },
  viewTitle: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    color: "#FFFFFF",
  },
  viewText: {
    fontSize: 20,
    textAlign: "center",
    color: "#FFFFFF",
  },
  buttonStyle: {
    alignItems: "center",
    width: 250,
    padding: 10,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 20,
  },
});

export default guidePage;
