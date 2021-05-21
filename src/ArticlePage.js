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
  Image,
  Dimensions,
  ImageBackground,
} from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";

const articlePage = ({ navigation, route }) => {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <View showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <ImageBackground
          source={require("../assets/background.png")}
          style={styles.background}
        >
          <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
            <View
              style={{
                marginBottom: 30,
              }}
            >
              {route.params["Session"] == 1 ? (
                <View>
                  <Image
                    source={require("../assets/slide6.png")}
                    style={{
                      width: Dimensions.get("window").height,
                      height: Dimensions.get("window").height * 1.311,
                    }}
                  />
                </View>
              ) : null}

              {route.params["Session"] == 2 ? (
                <View>
                  <Image
                    source={require("../assets/slide8.png")}
                    style={{
                      width: Dimensions.get("window").height,
                      height: Dimensions.get("window").height * 1.318,
                    }}
                  />
                  <Image
                    source={require("../assets/slide9.png")}
                    style={{
                      width: Dimensions.get("window").height,
                      height: Dimensions.get("window").height * 1.325,
                    }}
                  />
                </View>
              ) : null}

              {route.params["Session"] == 3 ? (
                <View>
                  <Image
                    source={require("../assets/slide11.png")}
                    style={{
                      width: Dimensions.get("window").height,
                      height: Dimensions.get("window").height * 1.31,
                    }}
                  />
                  <Image
                    source={require("../assets/slide12.png")}
                    style={{
                      width: Dimensions.get("window").height,
                      height: Dimensions.get("window").height * 1.319,
                    }}
                  />
                </View>
              ) : null}

              {route.params["Session"] == 4 ? (
                <View>
                  <Image
                    source={require("../assets/slide13.png")}
                    style={{
                      width: Dimensions.get("window").height,
                      height: Dimensions.get("window").height * 1.292,
                    }}
                  />
                  <Image
                    source={require("../assets/slide14.png")}
                    style={{
                      width: Dimensions.get("window").height,
                      height: Dimensions.get("window").height * 1.293,
                    }}
                  />
                  <Image
                    source={require("../assets/slide15.png")}
                    style={{
                      width: Dimensions.get("window").height,
                      height: Dimensions.get("window").height * 1.333,
                    }}
                  />
                </View>
              ) : null}
              {route.params["Session"] == 5 ? (
                <View>
                  <Image
                    source={require("../assets/slide17.png")}
                    style={{
                      width: Dimensions.get("window").height,
                      height: Dimensions.get("window").height * 1.316,
                    }}
                  />
                  <Image
                    source={require("../assets/slide18.png")}
                    style={{
                      width: Dimensions.get("window").height,
                      height: Dimensions.get("window").height * 1.223,
                    }}
                  />
                  <Image
                    source={require("../assets/slide19.png")}
                    style={{
                      width: Dimensions.get("window").height,
                      height: Dimensions.get("window").height * 1.385,
                    }}
                  />
                </View>
              ) : null}
              {route.params["Session"] == 6 ? (
                <View>
                  <Image
                    source={require("../assets/slide20.png")}
                    style={{
                      width: Dimensions.get("window").height,
                      height: Dimensions.get("window").height * 1.369,
                    }}
                  />
                  <Image
                    source={require("../assets/slide21.png")}
                    style={{
                      width: Dimensions.get("window").height,
                      height: Dimensions.get("window").height * 1.331,
                    }}
                  />
                  <Image
                    source={require("../assets/slide22.png")}
                    style={{
                      width: Dimensions.get("window").height,
                      height: Dimensions.get("window").height * 1.35,
                    }}
                  />
                </View>
              ) : null}
              {route.params["Session"] == 7 ? (
                <View>
                  <Image
                    source={require("../assets/slide24.png")}
                    style={{
                      width: Dimensions.get("window").height,
                      height: Dimensions.get("window").height * 1.373,
                    }}
                  />
                  <Image
                    source={require("../assets/slide25.png")}
                    style={{
                      width: Dimensions.get("window").height,
                      height: Dimensions.get("window").height * 1.344,
                    }}
                  />
                  <Image
                    source={require("../assets/slide26.png")}
                    style={{
                      width: Dimensions.get("window").height,
                      height: Dimensions.get("window").height * 1.324,
                    }}
                  />
                </View>
              ) : null}
              {route.params["Session"] == 8 ? (
                <View>
                  <Image
                    source={require("../assets/slide27.png")}
                    style={{
                      width: Dimensions.get("window").height,
                      height: Dimensions.get("window").height * 1.345,
                    }}
                  />
                  <Image
                    source={require("../assets/slide28.png")}
                    style={{
                      width: Dimensions.get("window").height,
                      height: Dimensions.get("window").height * 1.368,
                    }}
                  />
                  <Image
                    source={require("../assets/slide29.png")}
                    style={{
                      width: Dimensions.get("window").height,
                      height: Dimensions.get("window").height * 1.389,
                    }}
                  />
                </View>
              ) : null}
              {route.params["Session"] == 9 ? (
                <View>
                  <Image
                    source={require("../assets/slide31.png")}
                    style={{
                      width: Dimensions.get("window").height,
                      height: Dimensions.get("window").height * 1.334,
                    }}
                  />
                  <Image
                    source={require("../assets/slide32.png")}
                    style={{
                      width: Dimensions.get("window").height,
                      height: Dimensions.get("window").height * 1.372,
                    }}
                  />
                </View>
              ) : null}
              {route.params["Session"] == 10 ? (
                <View>
                  <Image
                    source={require("../assets/slide34.png")}
                    style={{
                      width: Dimensions.get("window").height,
                      height: Dimensions.get("window").height * 1.421,
                    }}
                  />
                  <Image
                    source={require("../assets/slide35.png")}
                    style={{
                      width: Dimensions.get("window").height,
                      height: Dimensions.get("window").height * 1.322,
                    }}
                  />
                  <Image
                    source={require("../assets/slide36.png")}
                    style={{
                      width: Dimensions.get("window").height,
                      height: Dimensions.get("window").height * 1.383,
                    }}
                  />
                  <Image
                    source={require("../assets/slide37.png")}
                    style={{
                      width: Dimensions.get("window").height,
                      height: Dimensions.get("window").height * 1.343,
                    }}
                  />
                </View>
              ) : null}
              {route.params["Session"] == 11 ? (
                <View>
                  <Image
                    source={require("../assets/slide38.png")}
                    style={{
                      width: Dimensions.get("window").height,
                      height: Dimensions.get("window").height * 1.375,
                    }}
                  />
                  <Image
                    source={require("../assets/slide39.png")}
                    style={{
                      width: Dimensions.get("window").height,
                      height: Dimensions.get("window").height * 1.276,
                    }}
                  />
                  <Image
                    source={require("../assets/slide40.png")}
                    style={{
                      width: Dimensions.get("window").height,
                      height: Dimensions.get("window").height * 1.296,
                    }}
                  />
                </View>
              ) : null}
              {route.params["Session"] == 12 ? (
                <View>
                  <Image
                    source={require("../assets/slide41.png")}
                    style={{
                      width: Dimensions.get("window").height,
                      height: Dimensions.get("window").height * 1.462,
                    }}
                  />
                  <Image
                    source={require("../assets/slide42.png")}
                    style={{
                      width: Dimensions.get("window").height,
                      height: Dimensions.get("window").height * 1.207,
                    }}
                  />
                  <Image
                    source={require("../assets/slide43.png")}
                    style={{
                      width: Dimensions.get("window").height,
                      height: Dimensions.get("window").height * 1.327,
                    }}
                  />
                  <Image
                    source={require("../assets/slide44.png")}
                    style={{
                      width: Dimensions.get("window").height,
                      height: Dimensions.get("window").height * 1.289,
                    }}
                  />
                  <Image
                    source={require("../assets/slide45.png")}
                    style={{
                      width: Dimensions.get("window").height,
                      height: Dimensions.get("window").height * 1.339,
                    }}
                  />
                  <Image
                    source={require("../assets/slide46.png")}
                    style={{
                      width: Dimensions.get("window").height,
                      height: Dimensions.get("window").height * 1.429,
                    }}
                  />
                  <Image
                    source={require("../assets/slide47.png")}
                    style={{
                      width: Dimensions.get("window").height,
                      height: Dimensions.get("window").height * 1.352,
                    }}
                  />
                </View>
              ) : null}
              <View
                style={{
                  alignItems: "center",
                  marginTop: 35,
                }}
              >
                <TouchableOpacity
                  style={[styles.buttonStyle, { backgroundColor: "#34433C" }]}
                  onPress={() => {
                    ScreenOrientation.lockAsync(
                      ScreenOrientation.OrientationLock.PORTRAIT
                    );
                    navigation.navigate("mainMenuPage");
                  }}
                >
                  <Text style={[styles.buttonText, { color: "white" }]}>
                    Kembali
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
    width: Dimensions.get("window").height,
    height: Dimensions.get("window").width,
  },
  bigTitle: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#383838",
  },
  text: {
    fontSize: 20,
    color: "#FFFFFF",
  },
  viewContainer: {
    marginTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 20,
    backgroundColor: "#F19A57",
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

export default articlePage;
