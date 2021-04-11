import React from "react";
import "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import ProgressBar from "react-native-progress/Bar";

const thirdQuestionPage = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <View style={{ flex: 1 }}>
        <View style={{ marginTop: 30, marginLeft: 40, marginRight: 40 }}>
          <View style={{ alignItems: "center" }}>
            <ProgressBar progress={1} width={275} color={"#1DAD58"} />
          </View>
          <View style={{ marginTop: 40 }}>
            <Text style={{ fontSize: 20, textAlign: "center" }}>
              Tiada masalah! Pastikan anda telah bincang degan seorang doktor
              sebelum menggunakan app ini.
            </Text>
            <Text style={{ fontSize: 20, marginTop: 30, textAlign: "center" }}>
              Terdapat penyakit lain yang mungkin menyebabkan perut kembung.
            </Text>
            <View style={{ alignItems: "center", marginTop: 35 }}>
              <TouchableOpacity
                style={[styles.buttonStyle, { backgroundColor: "#70D789" }]}
                /* onPress={() => */
              >
                <Text style={[styles.buttonText, { color: "white" }]}>Ok!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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

export default thirdQuestionPage;
