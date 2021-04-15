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
  Modal,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

const setReminderPage = () => {
  const [show, setShow] = useState(false);
  const [time, setTime] = useState("05:30 pm");
  const [hour, setHour] = useState("05");
  const [minute, setMinute] = useState("30");
  const [amOrpm, setAmOrPm] = useState("pm");
  const [tempHour, setTempHour] = useState("");
  const [tempMinute, setTempMinute] = useState("");
  const [tempAmOrPm, setTempAmOrPm] = useState("");

  const showTimePicker = () => {
    setTempTime();
    setShow(true);
  };

  useEffect(() => {
    setHour(time.substring(0, 2));
    setMinute(time.substring(3, 5));
    setAmOrPm(time.substring(6));
  }, [time]);

  const setTempTime = () => {
    setTempHour(hour);
    setTempMinute(minute);
    setTempAmOrPm(amOrpm);
    console.log("2." + tempHour + ":" + tempMinute + " " + tempAmOrPm);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={show}
          onRequestClose={() => {
            setShow(false);
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0,0,0,0.4)",
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                padding: 20,
                borderRadius: 20,
              }}
            >
              <Text style={{ textAlign: "center", fontSize: 20 }}>
                Tetapkan masa yang{"\n"}anda gemar
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 5,
                }}
              >
                <Picker
                  style={styles.pickerStyle}
                  selectedValue={hour}
                  onValueChange={(value) => {
                    setTempHour(value);
                  }}
                >
                  <Picker.Item label="01" value="01" />
                  <Picker.Item label="02" value="02" />
                  <Picker.Item label="03" value="03" />
                  <Picker.Item label="04" value="04" />
                  <Picker.Item label="05" value="05" />
                  <Picker.Item label="06" value="06" />
                  <Picker.Item label="07" value="07" />
                  <Picker.Item label="08" value="08" />
                  <Picker.Item label="09" value="09" />
                  <Picker.Item label="10" value="10" />
                  <Picker.Item label="11" value="11" />
                  <Picker.Item label="12" value="12" />
                </Picker>
                <Text style={{ fontWeight: "bold", marginTop: 16 }}>:</Text>
                <Picker
                  style={styles.pickerStyle}
                  selectedValue={minute}
                  onValueChange={(value) => {
                    setTempMinute(value);
                  }}
                >
                  <Picker.Item label="00" value="00" />
                  <Picker.Item label="01" value="01" />
                  <Picker.Item label="02" value="02" />
                  <Picker.Item label="03" value="03" />
                  <Picker.Item label="04" value="04" />
                  <Picker.Item label="05" value="05" />
                  <Picker.Item label="06" value="06" />
                  <Picker.Item label="07" value="07" />
                  <Picker.Item label="08" value="08" />
                  <Picker.Item label="09" value="09" />
                  <Picker.Item label="10" value="10" />
                  <Picker.Item label="11" value="11" />
                  <Picker.Item label="12" value="12" />
                  <Picker.Item label="13" value="13" />
                  <Picker.Item label="14" value="14" />
                  <Picker.Item label="15" value="15" />
                  <Picker.Item label="16" value="16" />
                  <Picker.Item label="17" value="17" />
                  <Picker.Item label="18" value="18" />
                  <Picker.Item label="19" value="19" />
                  <Picker.Item label="20" value="20" />
                  <Picker.Item label="21" value="21" />
                  <Picker.Item label="22" value="22" />
                  <Picker.Item label="23" value="23" />
                  <Picker.Item label="24" value="24" />
                  <Picker.Item label="25" value="25" />
                  <Picker.Item label="26" value="26" />
                  <Picker.Item label="27" value="27" />
                  <Picker.Item label="28" value="28" />
                  <Picker.Item label="29" value="29" />
                  <Picker.Item label="30" value="30" />
                  <Picker.Item label="31" value="31" />
                  <Picker.Item label="32" value="32" />
                  <Picker.Item label="33" value="33" />
                  <Picker.Item label="34" value="34" />
                  <Picker.Item label="35" value="35" />
                  <Picker.Item label="36" value="36" />
                  <Picker.Item label="37" value="37" />
                  <Picker.Item label="38" value="38" />
                  <Picker.Item label="39" value="39" />
                  <Picker.Item label="40" value="40" />
                  <Picker.Item label="41" value="41" />
                  <Picker.Item label="42" value="42" />
                  <Picker.Item label="43" value="43" />
                  <Picker.Item label="44" value="44" />
                  <Picker.Item label="45" value="45" />
                  <Picker.Item label="46" value="46" />
                  <Picker.Item label="47" value="47" />
                  <Picker.Item label="48" value="48" />
                  <Picker.Item label="49" value="49" />
                  <Picker.Item label="50" value="50" />
                  <Picker.Item label="51" value="51" />
                  <Picker.Item label="52" value="52" />
                  <Picker.Item label="53" value="53" />
                  <Picker.Item label="54" value="54" />
                  <Picker.Item label="55" value="55" />
                  <Picker.Item label="56" value="56" />
                  <Picker.Item label="57" value="57" />
                  <Picker.Item label="58" value="58" />
                  <Picker.Item label="59" value="59" />
                </Picker>
                <Picker
                  style={styles.pickerStyle}
                  selectedValue={amOrpm}
                  onValueChange={(value) => {
                    setTempAmOrPm(value);
                  }}
                >
                  <Picker.Item label="am" value="am" />
                  <Picker.Item label="pm" value="pm" />
                </Picker>
              </View>
              <View
                style={{
                  marginTop: 10,
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  style={[
                    styles.buttonStyle,
                    { backgroundColor: "#E98C53", width: 150 },
                  ]}
                  onPress={() => {
                    setTime(tempHour + ":" + tempMinute + " " + tempAmOrPm);
                    setShow(false);
                  }}
                >
                  <Text style={[styles.buttonText, { color: "white" }]}>
                    Tetapkan
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
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
                onPress={() => setTime("07:30 am")}
              >
                <Text style={styles.time}>Pagi</Text>
                <Text style={styles.specificTime}>07:30 am</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => setTime("12:30 pm")}
              >
                <Text style={styles.time}>Tengah hari</Text>
                <Text style={styles.specificTime}>12:30 pm</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.horizontalViewContaier, { marginTop: 20 }]}>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => setTime("06:00 pm")}
              >
                <Text style={styles.time}>Petang</Text>
                <Text style={styles.specificTime}>06:00 pm</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => setTime("08:30 pm")}
              >
                <Text style={styles.time}>Malam</Text>
                <Text style={styles.specificTime}>08:30 pm</Text>
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
            <TouchableOpacity
              style={{ marginTop: 10 }}
              onPress={() => showTimePicker()}
            >
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
  pickerStyle: {
    width: 90,
    height: 50,
    fontWeight: "bold",
  },
});

export default setReminderPage;
