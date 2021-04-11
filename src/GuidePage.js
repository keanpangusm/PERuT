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

const guidePage = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={{ marginTop: 30, marginLeft: 40, marginRight: 40 }}>
          <Text style={{ fontSize: 25, textAlign: "center" }}>
            Perkara yang anda perlu lakukan
          </Text>
          <View style={[styles.viewContainer, { marginTop: 10 }]}>
            <Text style={styles.viewTitle}>1. Dengar dan ikuti</Text>
            <Text style={styles.viewText}>
              Anda perlu dengar and ikuti arahan yang diberi dalam audio yang
              bertujuan untuk mengurangkan gejala perut kembung anda.
            </Text>
          </View>
          <View style={styles.viewContainer}>
            <Text style={styles.viewTitle}>2. Isi dan rekod</Text>
            <Text style={styles.viewText}>
              Anda perlu mengisi borang soal selidik untuk mencatat keberkesanan
              terapi tersebut. Soal selidik perlu diisi sebelum intervensi,
              intervensi kali ke-6, intervensi kali ke-12, dan 1 bulan selepas
              intervensi.
            </Text>
          </View>
          <View style={styles.viewContainer}>
            <Text style={styles.viewTitle}>3. Baca dan memahami</Text>
            <Text style={styles.viewText}>
              Bahan rujukan, artikel serta informasi mengenai perut kembung akan
              dilampirkan pada applikasi ini. Anda diminta untuk membaca dan
              memahaminya bagi tujuan pengurangan gejala anda.
            </Text>
          </View>
          <View style={styles.viewContainer}>
            <Text style={styles.viewText}>
              Jika anda mempunyai sebarang masalah, anda boleh menghubungi pihak
              kami melalui rangkaian yang disediakan atau menghubungi pihak
              penyelidik
            </Text>
          </View>
          <View
            style={{ alignItems: "center", marginTop: 35, marginBottom: 40 }}
          >
            <TouchableOpacity
              style={[styles.buttonStyle, { backgroundColor: "#70D789" }]}
              /* onPress={() => */
            >
              <Text style={[styles.buttonText, { color: "white" }]}>
                Teruskan
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    marginTop: 15,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    paddingBottom: 30,
    borderRadius: 20,
    backgroundColor: "#F1E7D1",
  },
  viewTitle: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    color: "#1DAD58",
  },
  viewText: {
    fontSize: 20,
    textAlign: "center",
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
