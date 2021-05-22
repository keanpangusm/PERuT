import React, { useState, useRef } from "react";
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
  ImageBackground,
  Dimensions,
} from "react-native";
import { Video } from "expo-av";
import { firebase } from "./firebase/config";

const audioPage = ({ navigation, route }) => {
  const session = route.params["Session"];
  const video = useRef(null);
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState({});
  const userid = firebase.auth().currentUser.uid;

  const whenVideoFinish = (playBackStatus) => {
    if (playBackStatus.didJustFinish) {
      console.log("video finished");
      firebase
        .database()
        .ref("/Users/" + userid + "/audioListen/")
        .set(true);
      navigation.navigate("feedBackPage");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <View showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <ImageBackground
          source={require("../assets/background.png")}
          style={styles.background}
        >
          <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            <Modal
              animationType="none"
              transparent={true}
              visible={show}
              onRequestClose={() => {
                setShow(false);
              }}
            >
              <View style={{ flex: 1 }}>
                <ImageBackground
                  source={require("../assets/background3.png")}
                  style={styles.background}
                >
                  <View
                    style={{
                      position: "absolute",
                      marginLeft: 40,
                      marginRight: 40,
                      top: "25%",
                    }}
                  >
                    <Text style={[styles.videoText, { fontSize: 30 }]}>
                      {status.isPlaying
                        ? "Audio sedang dimainkan"
                        : "Audio berhenti seketika"}
                    </Text>
                    <Text
                      style={[
                        styles.videoText,
                        { marginTop: 20, color: "#FFFFFF" },
                      ]}
                    >
                      Selepas audio habis dimain, anda akan dibawa ke halaman
                      seterusnya.
                    </Text>
                    <Text
                      style={[
                        styles.videoText,
                        { marginTop: 20, color: "#FFFFFF" },
                      ]}
                    >
                      Tekan skrin untuk pengawal audio jika tidak dilihat
                    </Text>
                  </View>

                  <Video
                    source={
                      route.params["VideoID"] == 1
                        ? {
                            uri: "https://firebasestorage.googleapis.com/v0/b/perut-edf98.appspot.com/o/ImageryTherapy.wav?alt=media&token=f4d19ffb-1d98-4cea-a26a-b91dd28d2ff2",
                          }
                        : {
                            uri: "https://firebasestorage.googleapis.com/v0/b/perut-edf98.appspot.com/o/PMR.wav?alt=media&token=52cf7143-50d6-4d94-a51a-a2ab511956bd",
                          }
                    }
                    useNativeControls={true}
                    resizeMode="contain"
                    ref={video}
                    style={styles.video}
                    shouldPlay
                    onPlaybackStatusUpdate={(playBackStatus) => {
                      setStatus(playBackStatus);
                      whenVideoFinish(playBackStatus);
                    }}
                  />
                </ImageBackground>
              </View>
            </Modal>
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
                Terapi untuk mengurangkan kembung
              </Text>
              <Text style={styles.textStyle}>
                Rakaman ini mengambil masa lebih kurang 10 minit
              </Text>
              <Text style={styles.textStyle}>
                Anda diminta untuk mendengar rakaman yang disediakan dan
                mengikuti arahan tersebut di tempat yang sunyi dan tenang untuk
                mengurangkan gangguan.
              </Text>
              <Text style={styles.textStyle}>
                Anda digalakkan untuk menggunakan “earphone” bagi sesi
                pendengaran ini.
              </Text>
              <View style={{ alignItems: "center", marginTop: 40 }}>
                <TouchableOpacity
                  style={[styles.buttonStyle, { backgroundColor: "#34433C" }]}
                  onPress={() => setShow(true)}
                >
                  <Text style={[styles.buttonText, { color: "white" }]}>
                    Dengar audio
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
  video: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  videoText: {
    fontSize: 20,
    textAlign: "center",
    color: "#383838",
  },
});

export default audioPage;
