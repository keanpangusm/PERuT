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
import ProgressBar from "react-native-progress/Bar";
import { Input } from "react-native-elements";

const firstQuestionPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <ImageBackground
          source={require("../assets/background.png")}
          style={styles.background}
        >
          <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
            <View
              style={{
                marginTop: 30,
                marginLeft: 40,
                marginRight: 40,
                marginBottom: 20,
              }}
            >
              <View style={{ alignItems: "center" }}>
                <ProgressBar progress={0.33} width={275} color={"#34433C"} />
              </View>
              <View style={{ marginTop: 40 }}>
                <Text
                  style={{
                    fontSize: 20,
                    textAlign: "center",
                    color: "#FFFFFF",
                  }}
                >
                  Adakah anda dirujuk oleh seorang doktor?
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    marginTop: 20,
                    textAlign: "center",
                    color: "#FFFFFF",
                  }}
                >
                  Jika ya, sila nyatakan maklumatnya
                </Text>
                <View style={{ marginTop: 20 }}>
                  <Input
                    placeholder="Nama"
                    placeholderTextColor="#FFFFFF"
                    inputStyle={{ color: "#FFFFFF" }}
                    inputContainerStyle={{ borderBottomColor: "#FFFFFF" }}
                    leftIcon={{
                      type: "antdesign",
                      name: "user",
                      color: "#FFFFFF",
                    }}
                  />
                  <Input
                    placeholder="Hospital/Klinik"
                    placeholderTextColor="#FFFFFF"
                    inputStyle={{ color: "#FFFFFF" }}
                    inputContainerStyle={{ borderBottomColor: "#FFFFFF" }}
                    leftIcon={{
                      type: "materialicons",
                      name: "local-hospital",
                      color: "#FFFFFF",
                    }}
                  />
                </View>
                <View style={{ alignItems: "center", marginTop: 5 }}>
                  <TouchableOpacity
                    style={[styles.buttonStyle, { backgroundColor: "#34433C" }]}
                    onPress={() => navigation.navigate("thirdQuestionPage")}
                  >
                    <Text style={[styles.buttonText, { color: "white" }]}>
                      Teruskan
                    </Text>
                  </TouchableOpacity>
                </View>
                <Text
                  style={{
                    fontSize: 20,
                    marginTop: 50,
                    textAlign: "center",
                    color: "#FFFFFF",
                  }}
                >
                  Jika tidak, sila tekan butang bawah untuk menjawab soal
                  selidik
                </Text>
                <View style={{ alignItems: "center", marginTop: 20 }}>
                  <TouchableOpacity
                    style={[styles.buttonStyle, { backgroundColor: "#34433C" }]}
                    onPress={() => navigation.navigate("secondQuestionPage")}
                  >
                    <Text style={[styles.buttonText, { color: "white" }]}>
                      Jawab soal selidik
                    </Text>
                  </TouchableOpacity>
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

export default firstQuestionPage;
