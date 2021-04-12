import React, { useState } from "react";
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

const setReminderPage = () => {
  const [time, setTime] = useState("5.30 pm");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={{ marginTop: 30, marginLeft: 20, marginRight: 20 }}>
          <Text
            style={{ fontSize: 30, textAlign: "center", fontWeight: "bold" }}
          >
            Perkara yang anda perlu lakukan
          </Text>
          <Text style={{ marginTop: 20, textAlign: "center", fontSize: 20 }}>
            Menurut kajian, gejala perut kembung kebanyakkan berlaku pada waktu
            pagi (selepas makan) atau petang.
          </Text>
          <Text style={{ marginTop: 20, textAlign: "center", fontSize: 20 }}>
            Sila tetapkan peringatan (notification) untuk mengingatkan sesi
            pendengaran anda
          </Text>
          <View
            style={{
              marginTop: 30,
              paddingTop: 20,
              paddingBottom: 20,
              paddingLeft: 25,
              paddingRight: 25,
              backgroundColor: "#ECEAE6",
              marginLeft: 5,
              marginRight: 5,
              borderRadius: 20,
            }}
          >
            <View style={styles.horizontalViewContaier}>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => setTime("7.30 am")}
              >
                <Text style={styles.time}>Pagi</Text>
                <Text style={styles.specificTime}>07:30am</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => setTime("12.30 pm")}
              >
                <Text style={styles.time}>Tengah hari</Text>
                <Text style={styles.specificTime}>12.30pm</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.horizontalViewContaier, { marginTop: 20 }]}>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => setTime("6.00 pm")}
              >
                <Text style={styles.time}>Petang</Text>
                <Text style={styles.specificTime}>06.00pm</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => setTime("8.30 pm")}
              >
                <Text style={styles.time}>Malam</Text>
                <Text style={styles.specificTime}>08.30pm</Text>
              </TouchableOpacity>
            </View>
            <Text
              style={{
                color: "#1DAD58",
                textAlign: "center",
                fontSize: 20,
                marginTop: 20,
                fontWeight: "bold",
              }}
            >
              {time}
            </Text>
            <TouchableOpacity style={{ marginTop: 10 }}>
              <Text
                style={{ textAlign: "center", fontSize: 15, color: "#929292" }}
              >
                Tukar masa
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{ marginTop: 30, marginBottom: 40, alignItems: "center" }}
          >
            <TouchableOpacity
              style={[styles.buttonStyle, { backgroundColor: "#E98C53" }]}
              /* onPress={() => */
            >
              <Text style={[styles.buttonText, { color: "white" }]}>
                Simpan
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ alignItems: "center", marginTop: 20 }}
              /* onPress={() => */
            >
              <Text style={styles.buttonText}>Abaikan</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  horizontalViewContaier: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  optionButton: {
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 15,
    backgroundColor: "#F1E7D1",
    elevation: 5,
    width: 120,
  },
  time: {
    fontWeight: "bold",
    textAlign: "center",
  },
  specificTime: {
    fontWeight: "bold",
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

export default setReminderPage;
