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
} from "react-native";

const mulaProgramPage = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          backgroundColor: "#F1E7D1",
          borderTopRightRadius: 60,
          borderTopLeftRadius: 60,
        }}
      >
        <View
          style={{
            marginTop: 30,
            marginLeft: 40,
            marginRight: 40,
            marginBottom: 20,
          }}
        >
          <Text
            style={{ fontSize: 30, textAlign: "center", fontWeight: "bold" }}
          >
            Mulakan{"\n"}program ini!
          </Text>
          <Text style={styles.textStyle}>
            Anda akan diminta untuk membuat beberapa perkara selama 1 bulan.
          </Text>
          <Text style={styles.textStyle}>
            Antaranya termasuklah, mengikuti audio yang disediakan dan membaca
            bahan yang disediakan.
          </Text>
          <Text style={styles.textStyle}>
            Mulakan dengan menekan bahan di bawah:
          </Text>
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <TouchableOpacity
              style={[styles.buttonStyle, { backgroundColor: "#70D789" }]}
              /* onPress={() => */
            >
              <Text style={[styles.buttonText, { color: "white" }]}>
                1. Selamat datang! Pendahuluan
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: "center", marginTop: 15 }}>
            <TouchableOpacity
              style={[styles.buttonStyle, { backgroundColor: "#70D789" }]}
              /* onPress={() => */
            >
              <Text style={[styles.buttonText, { color: "white" }]}>
                2. Audio Pengurangan Kembung Perut
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
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