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
import { firebase } from "./firebase/config";

const firstQuestionPage = ({ navigation }) => {
  const userid = firebase.auth().currentUser.uid;
  const [klinikName,setKlinikName] = useState('')
  const [doctorName,setDoctorName] = useState('')

  const uploadKlinik = () => {
    if (klinikName != '' && doctorName != ''){
      firebase.database().ref('/Users/'+userid+"/Klinik/Name/").set(klinikName)
      firebase.database().ref('/Users/'+userid+"/Klinik/Doctor/").set(doctorName)
      navigation.navigate("thirdQuestionPage")
    }else{
      alert('Please fill in the information!')
    }
  }
  

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
            <ProgressBar progress={0.33} width={275} color={"#1DAD58"} />
          </View>
          <View style={{ marginTop: 40 }}>
            <Text style={{ fontSize: 20, textAlign: "center" }}>
              Adakah anda dirujuk oleh seorang doktor?
            </Text>
            <Text style={{ fontSize: 20, marginTop: 20, textAlign: "center" }}>
              Jika ya, sila nyatakan maklumatnya
            </Text>
            <View style={{ marginTop: 20 }}>
              <Input
                placeholder="Nama"
                onChangeText={(text) => setKlinikName(text)}
                value={klinikName}
                leftIcon={{
                  type: "antdesign",
                  name: "user",
                }}
              />
              <Input
                placeholder="Hospital/Klinik"
                onChangeText={(text) => setDoctorName(text)}
                value={doctorName}
                leftIcon={{
                  type: "materialicons",
                  name: "local-hospital",
                }}
              />
            </View>
            <View style={{ alignItems: "center", marginTop: 5 }}>
              <TouchableOpacity
                style={[styles.buttonStyle, { backgroundColor: "#70D789" }]}
                onPress={() => uploadKlinik()}
              >
                <Text style={[styles.buttonText, { color: "white" }]}>
                  Teruskan
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 20, marginTop: 50, textAlign: "center" }}>
              Jika tidak, sila tekan butang bawah untuk menjawab soal selidik
            </Text>
            <View style={{ alignItems: "center", marginTop: 20 }}>
              <TouchableOpacity
                style={[styles.buttonStyle, { backgroundColor: "#70D789" }]}
                /* onPress={() => */
              >
                <Text style={[styles.buttonText, { color: "white" }]}>
                  Jawab soal selidik
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
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

export default firstQuestionPage;
