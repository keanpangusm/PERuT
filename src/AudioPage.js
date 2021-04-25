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
import { LinearGradient } from "expo-linear-gradient";
import { Video } from "expo-av";

const audioPage = ({ navigation }) => {
  const video = useRef(null);
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState({});

  const whenVideoFinish = (playBackStatus) => {
    if (playBackStatus.didJustFinish) {
      console.log("video finished");
      navigation.navigate("feedBackPage");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
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
                <LinearGradient
                  colors={["#000000", "#FFFFFF"]}
                  start={{ x: 1, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  style={{ flex: 1 }}
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
                        ? "audio sedang dimainkan"
                        : "audio berhenti seketika"}
                    </Text>
                    <Text style={[styles.videoText, { marginTop: 20 }]}>
                      Selepas audio habis dimain, anda akan dibawa ke halaman
                      seterusnya.
                    </Text>
                    <Text style={[styles.videoText, { marginTop: 20 }]}>
                      Tekan skrin untuk pengawal audio jika tidak dilihat
                    </Text>
                  </View>

                  <Video
                    source={require("../assets/audio/ImageryTherapy.wav")}
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
                </LinearGradient>
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
  video: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  videoText: {
    fontSize: 20,
    textAlign: "center",
    color: "#FFFFFF",
  },
});

export default audioPage;
