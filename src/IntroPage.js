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
} from "react-native";

const introPage = ({ navigation }) => {
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
                marginBottom: 40,
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
                Pendahuluan
              </Text>
              <Text
                style={[
                  styles.textStyle,
                  { fontWeight: "bold", marginTop: 40 },
                ]}
              >
                Apakah itu Perut Kembung?
              </Text>
              <Text style={styles.textStyle}>Angin? Senak? Kembung?</Text>
              <Text style={styles.textStyle}>
                Kembung perut boleh diertikan sebagai perasaan yang tidak selesa
                pada perut.
              </Text>
              <Text style={styles.textStyle}>
                Perasaan ini merupakan masalah yang lazim dialami. Sebanyak
                10-25% masyarakat yang sihat pernah mengalaminya.
              </Text>
              <Text style={styles.textStyle}>
                Terdapat pelbagai faktor yang menyebabkan anda berasa kembung.
              </Text>
              <Text style={styles.textStyle}>
                Masalah ini mungkin datang bersama gejala yang lain.
                Walaubagaimanapun, ketika pemeriksaan, tiada sebarang masalah
                masalah pada (badan) dan masalah mental (psikiatrik) ditemui.
                Keadaan ini digelar sebagai perut kembung secara “berfungsi”.
              </Text>
              <Text
                style={[
                  styles.textStyle,
                  { fontWeight: "bold", marginTop: 40 },
                ]}
              >
                {"Hubungan antara usus & otak (Gut-Brain Axis)"}
              </Text>
              <Text style={styles.textStyle}>
                Perut kembung berfungsi berkait rapat dengan masalah antara
                saluran pencernaan dan fungsi otak. Hal ini akan menyebabkan
                gangguan kepada pegerakan perut dan usus (motility) serta
                menyebabkan perut anda menjadi lebih “sensitif”
                (hypersensitivity).
              </Text>
              <Text
                style={[
                  styles.textStyle,
                  { fontWeight: "bold", marginTop: 40 },
                ]}
              >
                Applikasi ini
              </Text>
              <Text style={styles.textStyle}>
                Applikasi ini bertujuan untuk memberi informasi tentang masalah
                perut kembung melalui video, gambar dan bahan bacaan.
              </Text>
              <Text style={styles.textStyle}>
                Applikasi ini juga menyediakan rawatan bagi mengurangkan gejala
                kembung anda.
              </Text>
              <Text style={styles.textStyle}>
                Applikasi ini juga boleh mencatat tahap perubahan gejala anda.
              </Text>
              <Text style={styles.textStyle}>
                Anda boleh berhubung dan berinteraksi bersama para penyelidik
                melalui applikasi ini.
              </Text>
              <View style={{ alignItems: "center", marginTop: 40 }}>
                <TouchableOpacity
                  style={[styles.buttonStyle, { backgroundColor: "#34433C" }]}
                  onPress={() => navigation.navigate("audioPage")}
                >
                  <Text style={[styles.buttonText, { color: "white" }]}>
                    Teruskan
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
    marginTop: 20,
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

export default introPage;
