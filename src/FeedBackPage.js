import React,{useState} from "react";
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
import { Input } from "react-native-elements";
import { firebase } from "./firebase/config";

const feedBackPage = ({ navigation }) => {
  const [text,setText] = useState('')
  const userid = firebase.auth().currentUser.uid;
  
  const submitFeedback = () =>{
    if (text != ''){
      firebase.database().ref('/Users/'+userid+"/First/").set(false)
      firebase.database().ref('/Users/'+userid+"/Feedback/Text/").set(text)
      firebase.database().ref('/Users/'+userid+"/Feedback/Time").set(new Date().getTime())
      navigation.navigate("mainMenuPage")
    }else{
      alert('Please provide your feedback!')
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
          <Text
            style={[
              styles.textStyle,
              { color: "#1DAD58", fontSize: 30, textAlign: "center" },
            ]}
          >
            Tahniah!
          </Text>
          <Text
            style={[
              styles.textStyle,
              { fontSize: 30, textAlign: "center", marginTop: 10 },
            ]}
          >
            Anda telah berjaya menghabiskan pendengaran sesi ini
          </Text>
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1,
              marginTop: 20,
            }}
          />
          <Text style={styles.textStyle}>
            Bagaimana anda rasa mengenai sesi ini?
          </Text>
          <Input 
            style={{ marginTop: 20 }} 
            placeholder="Catatan" 
            onChangeText={(text) => setText(text)}
            value={text}
          />
          <View style={{ alignItems: "center", marginTop: 30 }}>
            <TouchableOpacity
              style={[styles.buttonStyle, { backgroundColor: "#70D789" }]}
              onPress={() => submitFeedback()}
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
  textStyle: {
    fontSize: 20,
    marginTop: 20,
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

export default feedBackPage;
