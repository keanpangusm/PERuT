import React, { useState, useEffect, useRef } from "react";
import "react-native-gesture-handler";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  Image,
  Dimensions,
  TextInput,
} from "react-native";
import { firebase } from "./firebase/config";

const chatPage = ({ navigation }) => {
  const scroll = useRef();
  const [newChat, setNewChat] = useState(true);
  const userid = firebase.auth().currentUser.uid;
  const [chats, setChats] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    firebase
      .database()
      .ref("/Chats/" + userid)
      .on("value", (snapshot) => {
        const firebasedata = snapshot.val();
        try {
          if (firebasedata.length > 0) {
            setNewChat(false);
            setChats(firebasedata);
          }
        } catch (err) {
          console.log(err);
        }
      });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <View style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={require("../assets/background3.png")}
          style={styles.background}
        >
          <View
            style={{
              backgroundColor: "#E98C53",
              paddingLeft: 20,
              paddingRight: 20,
              paddingBottom: 15,
              paddingTop: 15,
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={require("../assets/back_white.png")}
                style={{ width: 30, height: 30 }}
              />
            </TouchableOpacity>
            <View
              style={{
                position: "absolute",
                top: 15,
                left: 0,
                right: 0,
                bottom: 0,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 25,
                  color: "#FFFFFF",
                  fontWeight: "bold",
                }}
              >
                PERuT
              </Text>
            </View>

            {newChat ? (
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    textAlign: "center",
                    color: "#FFFFFF",
                    marginTop: 20,
                  }}
                >
                  Ada sebarang pertanyaan?
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    textAlign: "center",
                    color: "#FFFFFF",
                    marginTop: 20,
                  }}
                >
                  Kami akan jawab dengan secepat mungkin
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    textAlign: "center",
                    color: "#FFFFFF",
                    marginTop: 20,
                  }}
                >
                  Mulakan perbincangan
                </Text>
              </View>
            ) : null}
          </View>

          <ScrollView
            ref={scroll}
            onContentSizeChange={() => {
              scroll.current.scrollToEnd({ animated: false });
            }}
          >
            {chats.map((chat, index) =>
              chat["Sender"] ? (
                <View style={{ alignItems: "flex-end" }}>
                  <View style={styles.sender}>
                    <Text style={{ fontSize: 17, color: "#FFFFFF" }}>
                      {chat["Text"]}
                    </Text>
                  </View>
                </View>
              ) : (
                <View style={{ alignItems: "flex-start" }}>
                  <View style={styles.receiver}>
                    <Text style={{ fontSize: 17 }}>{chat["Text"]}</Text>
                  </View>
                </View>
              )
            )}
          </ScrollView>
          <View style={{ flexDirection: "row", bottom: 0, marginTop: 10 }}>
            <TextInput
              onChangeText={setMessage}
              value={message}
              multiline={true}
              placeholder="Masukkan message"
              style={{
                backgroundColor: "#FFFFFF",
                marginBottom: 7,
                marginLeft: 7,
                paddingLeft: 25,
                paddingRight: 25,
                paddingBottom: 7,
                paddingTop: 7,
                fontSize: 17,
                borderRadius: 40,
                width: Dimensions.get("window").width - 70,
              }}
            />
            <TouchableOpacity
              onPress={() => {
                if (message != "") {
                  firebase
                    .database()
                    .ref("/Chats/" + userid + "/" + String(chats.length))
                    .set({
                      Sender: true,
                      Text: message,
                    });
                  setMessage("");
                } else {
                  alert("You cannot send empty message!");
                }
              }}
            >
              <Image
                source={require("../assets/sending.png")}
                style={{ width: 40, height: 40, marginLeft: 10 }}
              />
            </TouchableOpacity>
          </View>
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
  sender: {
    backgroundColor: "#E98C53",
    marginTop: 10,
    marginLeft: 7,
    marginRight: 7,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 10,
  },
  receiver: {
    backgroundColor: "#FFFFFF",
    marginTop: 10,
    marginLeft: 7,
    marginRight: 7,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 10,
  },
});

export default chatPage;
