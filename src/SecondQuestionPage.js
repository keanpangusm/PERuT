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
import ProgressBar from "react-native-progress/Bar";
import { Input } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";

const secondQuestionPage = ({ navigation }) => {
  const [umur, setUmur] = useState("");
  const [jantina, setJantina] = useState("Perempuan");
  const [bangsa, setBangsa] = useState("Melayu");
  const [pekerjaan, setPekerjaan] = useState("Pelajar");
  const [detailPekerjaan, setDetailPekerjaan] = useState("");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
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
            <ProgressBar progress={0.67} width={275} color={"#1DAD58"} />
          </View>

          <View style={{ marginTop: 30 }}>
            <Text
              style={{ fontWeight: "bold", fontSize: 30, textAlign: "center" }}
            >
              Soal Selidik
            </Text>

            <Text style={styles.smallTitle}>Maklumat Am</Text>

            <View style={styles.horizontalView}>
              <Text style={styles.question}>Umur:</Text>
              <Input
                placeholder="Umur"
                style={{ marginTop: 5 }}
                value={umur}
                onChangeText={(text) => setUmur(text)}
              />
            </View>

            <View style={styles.horizontalView}>
              <Text style={styles.question}>Jantina:</Text>
              <Picker
                style={styles.pickerStyle}
                selectedValue={jantina}
                onValueChange={(value) => {
                  setJantina(value);
                }}
              >
                <Picker.Item label="Perempuan" value="Perempuan" />
                <Picker.Item label="Lelaki" value="Lelaki" />
              </Picker>
            </View>

            <View style={styles.horizontalView}>
              <Text style={styles.question}>Bangsa:</Text>
              <Picker
                style={styles.pickerStyle}
                selectedValue={bangsa}
                onValueChange={(value) => {
                  setBangsa(value);
                }}
              >
                <Picker.Item label="Melayu" value="Melayu" />
                <Picker.Item label="Cina" value="Cina" />
                <Picker.Item label="India" value="India" />
                <Picker.Item label="Lain-lain" value="Lain-lain" />
              </Picker>
            </View>

            <Text style={styles.question}>Pekerjaan:</Text>
            <Picker
              style={styles.pickerStyleLong}
              selectedValue={pekerjaan}
              onValueChange={(value) => {
                setPekerjaan(value);
                console.log(value);
              }}
            >
              <Picker.Item label="Pelajar" value="Pelajar" />
              <Picker.Item label="Bekerja" value="Bekerja" />
              <Picker.Item
                label="Suri rumah / tidak bekerja"
                value="Suri rumah / tidak bekerja"
              />
            </Picker>
            {pekerjaan == "Bekerja" ? (
              <Input
                placeholder="Nyatakan"
                style={{ marginTop: 5 }}
                value={detailPekerjaan}
                onChangeText={(text) => setDetailPekerjaan(text)}
              />
            ) : null}
            {/* <DetailPerkerjaan detailPekerjaan={detailPekerjaan} /> */}

            {/* <View
              style={{ flexDirection: "row", marginTop: 10, marginRight: 40 }}
            >
              <Text style={[styles.question, { marginTop: 10 }]}>Umur:</Text>
              <Input placeholder="Umur" style={{ marginTop: 5 }} />
            </View> */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const DetailPerkerjaan = (detailPekerjaan) => {};

const styles = StyleSheet.create({
  smallTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 15,
  },
  horizontalView: {
    flexDirection: "row",
    marginRight: 40,
  },
  question: {
    fontSize: 20,
    marginTop: 10,
  },
  pickerStyle: {
    width: 200,
    height: 50,
  },
  pickerStyleLong: {
    width: 272,
    height: 50,
  },
});

export default secondQuestionPage;
