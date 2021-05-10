import React, { useState, useEffect } from "react";
import "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
  Modal,
  Dimensions,
  ImageBackground,
} from "react-native";
import ProgressCircle from "react-native-progress-circle";
import ProgressBar from "react-native-progress/Bar";
import MenuDrawer from "react-native-side-drawer";
import { Picker } from "@react-native-picker/picker";
import { Input } from "react-native-elements";

const mainMenuPage = ({ navigation }) => {
  const [drawer, setDrawer] = useState(false);
  const [showSession, setShowSession] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [show, setShow] = useState(false);

  //change reminder
  const [time, setTime] = useState(1050);
  const [timeString, setTimeString] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [amOrpm, setAmOrPm] = useState("");
  const [tempHour, setTempHour] = useState("");
  const [tempMinute, setTempMinute] = useState("");
  const [tempAmOrPm, setTempAmOrPm] = useState("");

  //change client data
  const [name, setName] = useState("testingtesting");
  const [email, setEmail] = useState("abc@gamil.com");
  const [phNo, setPhNo] = useState("321");
  const [password, setPassword] = useState("32131");

  //for session
  const [audioListened, setAudioListened] = useState(true);
  const [articleRead, setArticleRead] = useState(true);
  const [percent, setPercent] = useState(0);
  const [session, setSession] = useState(1);

  //survey
  const [firstSurvey, setFirstSurvey] = useState(false);
  const [secondSurvey, setSecondSurvey] = useState(false);
  const [thirdSurvey, setThirdSurvey] = useState(false);
  const [survey, setSurvey] = useState(false);

  useEffect(() => {
    if (articleRead && audioListened) {
      setPercent(100);
    } else if (articleRead && !audioListened) {
      setPercent(50);
    } else if (!articleRead && audioListened) {
      setPercent(50);
    } else {
      setPercent(0);
    }
  });

  const showTimePicker = () => {
    setTempTime();
    setShow(true);
  };

  useEffect(() => {
    if (time > 720) {
      setAmOrPm("pm");
    } else {
      setAmOrPm("am");
    }

    if (Math.floor(time / 60) > 12) {
      if (Math.floor(time / 60) == 13) {
        setHour("01");
      } else if (Math.floor(time / 60) == 14) {
        setHour("02");
      } else if (Math.floor(time / 60) == 15) {
        setHour("03");
      } else if (Math.floor(time / 60) == 16) {
        setHour("04");
      } else if (Math.floor(time / 60) == 17) {
        setHour("05");
      } else if (Math.floor(time / 60) == 18) {
        setHour("06");
      } else if (Math.floor(time / 60) == 19) {
        setHour("07");
      } else if (Math.floor(time / 60) == 20) {
        setHour("08");
      } else if (Math.floor(time / 60) == 21) {
        setHour("09");
      } else {
        setHour(Math.floor(time / 60 - 12).toString());
      }
    } else {
      if (Math.floor(time / 60) == 0) {
        setHour("12");
      } else if (Math.floor(time / 60) == 1) {
        setHour("01");
      } else if (Math.floor(time / 60) == 2) {
        setHour("02");
      } else if (Math.floor(time / 60) == 3) {
        setHour("03");
      } else if (Math.floor(time / 60) == 4) {
        setHour("04");
      } else if (Math.floor(time / 60) == 5) {
        setHour("05");
      } else if (Math.floor(time / 60) == 6) {
        setHour("06");
      } else if (Math.floor(time / 60) == 7) {
        setHour("07");
      } else if (Math.floor(time / 60) == 8) {
        setHour("08");
      } else if (Math.floor(time / 60) == 9) {
        setHour("09");
      } else {
        setHour(Math.floor(time / 60).toString());
      }
    }

    if (time % 60 == 0) {
      setMinute("00");
    } else if (time % 60 == 1) {
      setMinute("01");
    } else if (time % 60 == 2) {
      setMinute("02");
    } else if (time % 60 == 3) {
      setMinute("03");
    } else if (time % 60 == 4) {
      setMinute("04");
    } else if (time % 60 == 5) {
      setMinute("05");
    } else if (time % 60 == 6) {
      setMinute("06");
    } else if (time % 60 == 7) {
      setMinute("07");
    } else if (time % 60 == 8) {
      setMinute("08");
    } else if (time % 60 == 9) {
      setMinute("09");
    } else {
      setMinute((time % 60).toString());
    }
  }, [time]);

  const setTempTime = () => {
    setTempHour(hour);
    setTempMinute(minute);
    setTempAmOrPm(amOrpm);
  };

  useEffect(() => {
    if (session == 6 && articleRead && audioListened && !firstSurvey) {
      setFirstSurvey(true);
      setSurvey(true);
    }

    if (session == 12 && articleRead && audioListened && !secondSurvey) {
      setSecondSurvey(true);
      setSurvey(true);
    }

    //after 1 month after 12th session, survey again
  });
  const DrawerContent = () => {
    return (
      <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <View
          style={{
            marginTop: 20,
            marginLeft: 20,
            marginRight: 20,
            marginBottom: 30,
          }}
        >
          <TouchableOpacity onPress={() => setDrawer(false)}>
            <Text style={{ fontSize: 20 }}>Tutup Menu</Text>
          </TouchableOpacity>

          <Text style={{ marginTop: 20, fontSize: 25, fontWeight: "bold" }}>
            Menu
          </Text>

          <View style={{ marginLeft: 10, marginTop: 20 }}>
            <Text style={{ fontSize: 20 }}>Vincent</Text>
            <Text style={{ fontSize: 15 }}>vincenttee1996@gmail.com</Text>

            <View
              style={{
                marginTop: 15,
                borderBottomWidth: 1,
                borderColor: "rgba(0,0,0,0.2)",
              }}
            />

            <View style={{ marginTop: 15 }}>
              <TouchableOpacity onPress={() => setShowSession()}>
                <Text style={{ fontSize: 15 }}>{"Sesi Anda"}</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                marginTop: 15,
                borderBottomWidth: 1,
                borderColor: "rgba(0,0,0,0.2)",
              }}
            />

            <View style={{ marginTop: 15 }}>
              <TouchableOpacity onPress={() => showTimePicker()}>
                <Text style={{ fontSize: 15 }}>{"Penukaran Peringatan"}</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                marginTop: 15,
                borderBottomWidth: 1,
                borderColor: "rgba(0,0,0,0.2)",
              }}
            />

            <View style={{ marginTop: 15 }}>
              <TouchableOpacity onPress={() => setShowDetails()}>
                <Text style={{ fontSize: 15 }}>
                  {"Borang Maklumat dan Keizinan Peserta"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <MenuDrawer
        open={drawer}
        drawerContent={DrawerContent()}
        drawerPercentage={65}
        animationTime={200}
        position="right"
        overlay={true}
        opacity={1}
      >
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
          <ImageBackground
            source={require("../assets/background.png")}
            style={styles.background}
          >
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ flex: 1 }}
            >
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
                      Tukar masa yang{"\n"}anda gemar
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
                      <Text style={{ fontWeight: "bold", marginTop: 16 }}>
                        :
                      </Text>
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
                        style={styles.buttonStyle2}
                        onPress={() => {
                          setTimeString(
                            tempHour + ":" + tempMinute + " " + tempAmOrPm
                          );
                          setShow(false);
                        }}
                      >
                        <Text style={[styles.buttonText, { color: "white" }]}>
                          Tukar
                        </Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={[styles.buttonStyle2, { marginTop: 15 }]}
                        onPress={() => setShow(false)}
                      >
                        <Text style={[styles.buttonText, { color: "#FFFFFF" }]}>
                          Kembali
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Modal>

              <Modal
                animationType="fade"
                transparent={true}
                visible={showDetails}
                onRequestClose={() => {
                  setShowDetails(false);
                }}
              >
                <ScrollView
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: "center",
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
                        borderRadius: 20,
                      }}
                    >
                      <View
                        style={{
                          marginTop: 20,
                          marginLeft: 45,
                          marginRight: 45,
                          marginBottom: 30,
                        }}
                      >
                        <Text style={styles.description}>Maklumat anda</Text>

                        <Input
                          placeholder={name}
                          onChangeText={(text) => setName(text)}
                          value={name}
                          leftIcon={{
                            type: "antdesign",
                            name: "user",
                          }}
                        />

                        <Input
                          placeholder={email}
                          onChangeText={(text) => setEmail(text)}
                          value={email}
                          leftIcon={{
                            type: "zocial",
                            name: "email",
                          }}
                        />

                        <Input
                          placeholder={phNo}
                          onChangeText={(text) =>
                            setPhNo(
                              text.replace(/([-.*#+?^=!:${}()|\[\]\/\\])/g, "")
                            )
                          }
                          value={phNo}
                          keyboardType="number-pad"
                          leftIcon={{
                            type: "fontawesome",
                            name: "phone",
                          }}
                        />

                        <Input
                          placeholder={password}
                          onChangeText={(text) => setPassword(text)}
                          value={password}
                          leftIcon={{
                            type: "fontawesome",
                            name: "lock",
                          }}
                          secureTextEntry={true}
                        />

                        <View style={{ alignItems: "center", marginTop: 25 }}>
                          <TouchableOpacity
                            style={styles.buttonStyle2}
                            onPress={() => setShowDetails(false)}
                          >
                            <Text
                              style={[styles.buttonText, { color: "#FFFFFF" }]}
                            >
                              Tukar maklumat
                            </Text>
                          </TouchableOpacity>

                          <TouchableOpacity
                            style={[styles.buttonStyle2, { marginTop: 15 }]}
                            onPress={() => setShowDetails(false)}
                          >
                            <Text
                              style={[styles.buttonText, { color: "#FFFFFF" }]}
                            >
                              Kembali
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>
                </ScrollView>
              </Modal>

              <Modal
                animationType="fade"
                transparent={true}
                visible={showSession}
                onRequestClose={() => {
                  setShowSession(false);
                }}
              >
                <ScrollView
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: "center",
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      paddingTop: 30,
                      paddingBottom: 30,
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "rgba(0,0,0,0.4)",
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "white",
                        borderRadius: 20,
                      }}
                    >
                      <View
                        style={{
                          marginTop: 20,
                          marginLeft: 20,
                          marginRight: 20,
                          marginBottom: 30,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 25,
                            fontWeight: "bold",
                            textAlign: "center",
                          }}
                        >
                          Sesi anda
                        </Text>

                        <Text
                          style={{
                            fontSize: 20,
                            textAlign: "center",
                            marginTop: 15,
                            marginBottom: 10,
                          }}
                        >
                          Sesi 1
                        </Text>
                        <View style={{ flexDirection: "row" }}>
                          <View style={{ justifyContent: "center" }}>
                            {session == 1 ? (
                              <ProgressCircle
                                percent={percent}
                                radius={25}
                                borderWidth={6}
                                color="#F19A57"
                              >
                                <Text style={{ fontSize: 15 }}>
                                  {percent + "%"}
                                </Text>
                              </ProgressCircle>
                            ) : session > 1 ? (
                              <View
                                style={{
                                  width: 50,
                                  height: 50,
                                  borderRadius: 50,
                                  backgroundColor: "#F19A57",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              ></View>
                            ) : (
                              <ProgressCircle
                                percent={0}
                                radius={25}
                                borderWidth={6}
                                color="#F19A57"
                              ></ProgressCircle>
                            )}
                          </View>
                          <TouchableOpacity
                            style={[
                              styles.buttonStyle,
                              {
                                backgroundColor: "#E98C53",
                                width: 225,
                                marginLeft: 15,
                              },
                            ]}
                            disabled={session >= 1 ? false : true}
                            onPress={() => {
                              setShowSession(false);
                              session >= 1
                                ? navigation.navigate("articlePage", {
                                    Session: 1,
                                  })
                                : null;
                            }}
                          >
                            <Text
                              style={[styles.buttonText, { color: "white" }]}
                            >
                              {session >= 1 ? "PERuT®" : "Incoming"}
                            </Text>
                          </TouchableOpacity>
                        </View>

                        <Text
                          style={{
                            fontSize: 20,
                            textAlign: "center",
                            marginTop: 15,
                            marginBottom: 10,
                          }}
                        >
                          Sesi 2
                        </Text>
                        <View style={{ flexDirection: "row" }}>
                          <View style={{ justifyContent: "center" }}>
                            {session == 2 ? (
                              <ProgressCircle
                                percent={percent}
                                radius={25}
                                borderWidth={6}
                                color="#F19A57"
                              >
                                <Text style={{ fontSize: 15 }}>
                                  {percent + "%"}
                                </Text>
                              </ProgressCircle>
                            ) : session > 2 ? (
                              <View
                                style={{
                                  width: 50,
                                  height: 50,
                                  borderRadius: 50,
                                  backgroundColor: "#F19A57",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              ></View>
                            ) : (
                              <ProgressCircle
                                percent={0}
                                radius={25}
                                borderWidth={6}
                                color="#F19A57"
                              ></ProgressCircle>
                            )}
                          </View>
                          <TouchableOpacity
                            style={[
                              styles.buttonStyle,
                              {
                                backgroundColor: "#E98C53",
                                width: 225,
                                marginLeft: 15,
                              },
                            ]}
                            disabled={session >= 2 ? false : true}
                            onPress={() => {
                              setShowSession(false);
                              session >= 2
                                ? navigation.navigate("articlePage", {
                                    Session: 2,
                                  })
                                : null;
                            }}
                          >
                            <Text
                              style={[styles.buttonText, { color: "white" }]}
                            >
                              {session >= 2 ? "Kembung Perut" : "Incoming"}
                            </Text>
                          </TouchableOpacity>
                        </View>
                        <Text
                          style={{
                            fontSize: 20,
                            textAlign: "center",
                            marginTop: 15,
                            marginBottom: 10,
                          }}
                        >
                          Sesi 3
                        </Text>
                        <View style={{ flexDirection: "row" }}>
                          <View style={{ justifyContent: "center" }}>
                            {session == 3 ? (
                              <ProgressCircle
                                percent={percent}
                                radius={25}
                                borderWidth={6}
                                color="#F19A57"
                              >
                                <Text style={{ fontSize: 15 }}>
                                  {percent + "%"}
                                </Text>
                              </ProgressCircle>
                            ) : session > 3 ? (
                              <View
                                style={{
                                  width: 50,
                                  height: 50,
                                  borderRadius: 50,
                                  backgroundColor: "#F19A57",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              ></View>
                            ) : (
                              <ProgressCircle
                                percent={0}
                                radius={25}
                                borderWidth={6}
                                color="#F19A57"
                              ></ProgressCircle>
                            )}
                          </View>
                          <TouchableOpacity
                            style={[
                              styles.buttonStyle,
                              {
                                backgroundColor: "#E98C53",
                                width: 225,
                                marginLeft: 15,
                              },
                            ]}
                            disabled={session >= 3 ? false : true}
                            onPress={() => {
                              setShowSession(false);
                              session >= 3
                                ? navigation.navigate("articlePage", {
                                    Session: 3,
                                  })
                                : null;
                            }}
                          >
                            <Text
                              style={[styles.buttonText, { color: "white" }]}
                            >
                              {session >= 3
                                ? "Punca-Punca Perut Kembung"
                                : "Incoming"}
                            </Text>
                          </TouchableOpacity>
                        </View>
                        <Text
                          style={{
                            fontSize: 20,
                            textAlign: "center",
                            marginTop: 15,
                            marginBottom: 10,
                          }}
                        >
                          Sesi 4
                        </Text>
                        <View style={{ flexDirection: "row" }}>
                          <View style={{ justifyContent: "center" }}>
                            {session == 4 ? (
                              <ProgressCircle
                                percent={percent}
                                radius={25}
                                borderWidth={6}
                                color="#F19A57"
                              >
                                <Text style={{ fontSize: 15 }}>
                                  {percent + "%"}
                                </Text>
                              </ProgressCircle>
                            ) : session > 4 ? (
                              <View
                                style={{
                                  width: 50,
                                  height: 50,
                                  borderRadius: 50,
                                  backgroundColor: "#F19A57",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              ></View>
                            ) : (
                              <ProgressCircle
                                percent={0}
                                radius={25}
                                borderWidth={6}
                                color="#F19A57"
                              ></ProgressCircle>
                            )}
                          </View>
                          <TouchableOpacity
                            style={[
                              styles.buttonStyle,
                              {
                                backgroundColor: "#E98C53",
                                width: 225,
                                marginLeft: 15,
                              },
                            ]}
                            disabled={session >= 4 ? false : true}
                            onPress={() => {
                              setShowSession(false);
                              session >= 4
                                ? navigation.navigate("articlePage", {
                                    Session: 4,
                                  })
                                : null;
                            }}
                          >
                            <Text
                              style={[styles.buttonText, { color: "white" }]}
                            >
                              {session >= 4
                                ? "Kenali Sistem Penghadaman Anda"
                                : "Incoming"}
                            </Text>
                          </TouchableOpacity>
                        </View>

                        <Text
                          style={{
                            fontSize: 20,
                            textAlign: "center",
                            marginTop: 15,
                            marginBottom: 10,
                          }}
                        >
                          Sesi 5
                        </Text>
                        <View style={{ flexDirection: "row" }}>
                          <View style={{ justifyContent: "center" }}>
                            {session == 5 ? (
                              <ProgressCircle
                                percent={percent}
                                radius={25}
                                borderWidth={6}
                                color="#F19A57"
                              >
                                <Text style={{ fontSize: 15 }}>
                                  {percent + "%"}
                                </Text>
                              </ProgressCircle>
                            ) : session > 5 ? (
                              <View
                                style={{
                                  width: 50,
                                  height: 50,
                                  borderRadius: 50,
                                  backgroundColor: "#F19A57",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              ></View>
                            ) : (
                              <ProgressCircle
                                percent={0}
                                radius={25}
                                borderWidth={6}
                                color="#F19A57"
                              ></ProgressCircle>
                            )}
                          </View>
                          <TouchableOpacity
                            style={[
                              styles.buttonStyle,
                              {
                                backgroundColor: "#E98C53",
                                width: 225,
                                marginLeft: 15,
                              },
                            ]}
                            disabled={session >= 5 ? false : true}
                            onPress={() => {
                              setShowSession(false);
                              session >= 5
                                ? navigation.navigate("articlePage", {
                                    Session: 5,
                                  })
                                : null;
                            }}
                          >
                            <Text
                              style={[styles.buttonText, { color: "white" }]}
                            >
                              {session >= 5 ? "Incoming" : "Incoming"}
                            </Text>
                          </TouchableOpacity>
                        </View>

                        <Text
                          style={{
                            fontSize: 20,
                            textAlign: "center",
                            marginTop: 15,
                            marginBottom: 10,
                          }}
                        >
                          Sesi 6
                        </Text>
                        <View style={{ flexDirection: "row" }}>
                          <View style={{ justifyContent: "center" }}>
                            {session == 6 ? (
                              <ProgressCircle
                                percent={percent}
                                radius={25}
                                borderWidth={6}
                                color="#F19A57"
                              >
                                <Text style={{ fontSize: 15 }}>
                                  {percent + "%"}
                                </Text>
                              </ProgressCircle>
                            ) : session > 6 ? (
                              <View
                                style={{
                                  width: 50,
                                  height: 50,
                                  borderRadius: 50,
                                  backgroundColor: "#F19A57",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              ></View>
                            ) : (
                              <ProgressCircle
                                percent={0}
                                radius={25}
                                borderWidth={6}
                                color="#F19A57"
                              ></ProgressCircle>
                            )}
                          </View>
                          <TouchableOpacity
                            style={[
                              styles.buttonStyle,
                              {
                                backgroundColor: "#E98C53",
                                width: 225,
                                marginLeft: 15,
                              },
                            ]}
                            disabled={session >= 6 ? false : true}
                            onPress={() => {
                              setShowSession(false);
                              session >= 6
                                ? navigation.navigate("articlePage", {
                                    Session: 6,
                                  })
                                : null;
                            }}
                          >
                            <Text
                              style={[styles.buttonText, { color: "white" }]}
                            >
                              {session >= 6 ? "Incoming" : "Incoming"}
                            </Text>
                          </TouchableOpacity>
                        </View>

                        <Text
                          style={{
                            fontSize: 20,
                            textAlign: "center",
                            marginTop: 15,
                            marginBottom: 10,
                          }}
                        >
                          Sesi 7
                        </Text>
                        <View style={{ flexDirection: "row" }}>
                          <View style={{ justifyContent: "center" }}>
                            {session == 7 ? (
                              <ProgressCircle
                                percent={percent}
                                radius={25}
                                borderWidth={6}
                                color="#F19A57"
                              >
                                <Text style={{ fontSize: 15 }}>
                                  {percent + "%"}
                                </Text>
                              </ProgressCircle>
                            ) : session > 7 ? (
                              <View
                                style={{
                                  width: 50,
                                  height: 50,
                                  borderRadius: 50,
                                  backgroundColor: "#F19A57",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              ></View>
                            ) : (
                              <ProgressCircle
                                percent={0}
                                radius={25}
                                borderWidth={6}
                                color="#F19A57"
                              ></ProgressCircle>
                            )}
                          </View>
                          <TouchableOpacity
                            style={[
                              styles.buttonStyle,
                              {
                                backgroundColor: "#E98C53",
                                width: 225,
                                marginLeft: 15,
                              },
                            ]}
                            disabled={session >= 7 ? false : true}
                            onPress={() => {
                              setShowSession(false);
                              session >= 7
                                ? navigation.navigate("articlePage", {
                                    Session: 7,
                                  })
                                : null;
                            }}
                          >
                            <Text
                              style={[styles.buttonText, { color: "white" }]}
                            >
                              {session >= 7 ? "Incoming" : "Incoming"}
                            </Text>
                          </TouchableOpacity>
                        </View>

                        <Text
                          style={{
                            fontSize: 20,
                            textAlign: "center",
                            marginTop: 15,
                            marginBottom: 10,
                          }}
                        >
                          Sesi 8
                        </Text>
                        <View style={{ flexDirection: "row" }}>
                          <View style={{ justifyContent: "center" }}>
                            {session == 8 ? (
                              <ProgressCircle
                                percent={percent}
                                radius={25}
                                borderWidth={6}
                                color="#F19A57"
                              >
                                <Text style={{ fontSize: 15 }}>
                                  {percent + "%"}
                                </Text>
                              </ProgressCircle>
                            ) : session > 8 ? (
                              <View
                                style={{
                                  width: 50,
                                  height: 50,
                                  borderRadius: 50,
                                  backgroundColor: "#F19A57",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              ></View>
                            ) : (
                              <ProgressCircle
                                percent={0}
                                radius={25}
                                borderWidth={6}
                                color="#F19A57"
                              ></ProgressCircle>
                            )}
                          </View>
                          <TouchableOpacity
                            style={[
                              styles.buttonStyle,
                              {
                                backgroundColor: "#E98C53",
                                width: 225,
                                marginLeft: 15,
                              },
                            ]}
                            disabled={session >= 8 ? false : true}
                            onPress={() => {
                              setShowSession(false);
                              session >= 8
                                ? navigation.navigate("articlePage", {
                                    Session: 8,
                                  })
                                : null;
                            }}
                          >
                            <Text
                              style={[styles.buttonText, { color: "white" }]}
                            >
                              {session >= 8 ? "Incoming" : "Incoming"}
                            </Text>
                          </TouchableOpacity>
                        </View>

                        <Text
                          style={{
                            fontSize: 20,
                            textAlign: "center",
                            marginTop: 15,
                            marginBottom: 10,
                          }}
                        >
                          Sesi 9
                        </Text>
                        <View style={{ flexDirection: "row" }}>
                          <View style={{ justifyContent: "center" }}>
                            {session == 9 ? (
                              <ProgressCircle
                                percent={percent}
                                radius={25}
                                borderWidth={6}
                                color="#F19A57"
                              >
                                <Text style={{ fontSize: 15 }}>
                                  {percent + "%"}
                                </Text>
                              </ProgressCircle>
                            ) : session > 9 ? (
                              <View
                                style={{
                                  width: 50,
                                  height: 50,
                                  borderRadius: 50,
                                  backgroundColor: "#F19A57",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              ></View>
                            ) : (
                              <ProgressCircle
                                percent={0}
                                radius={25}
                                borderWidth={6}
                                color="#F19A57"
                              ></ProgressCircle>
                            )}
                          </View>
                          <TouchableOpacity
                            style={[
                              styles.buttonStyle,
                              {
                                backgroundColor: "#E98C53",
                                width: 225,
                                marginLeft: 15,
                              },
                            ]}
                            disabled={session >= 9 ? false : true}
                            onPress={() => {
                              setShowSession(false);
                              session >= 9
                                ? navigation.navigate("articlePage", {
                                    Session: 9,
                                  })
                                : null;
                            }}
                          >
                            <Text
                              style={[styles.buttonText, { color: "white" }]}
                            >
                              {session >= 9 ? "Incoming" : "Incoming"}
                            </Text>
                          </TouchableOpacity>
                        </View>

                        <Text
                          style={{
                            fontSize: 20,
                            textAlign: "center",
                            marginTop: 15,
                            marginBottom: 10,
                          }}
                        >
                          Sesi 10
                        </Text>
                        <View style={{ flexDirection: "row" }}>
                          <View style={{ justifyContent: "center" }}>
                            {session == 10 ? (
                              <ProgressCircle
                                percent={percent}
                                radius={25}
                                borderWidth={6}
                                color="#F19A57"
                              >
                                <Text style={{ fontSize: 15 }}>
                                  {percent + "%"}
                                </Text>
                              </ProgressCircle>
                            ) : session > 10 ? (
                              <View
                                style={{
                                  width: 50,
                                  height: 50,
                                  borderRadius: 50,
                                  backgroundColor: "#F19A57",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              ></View>
                            ) : (
                              <ProgressCircle
                                percent={0}
                                radius={25}
                                borderWidth={6}
                                color="#F19A57"
                              ></ProgressCircle>
                            )}
                          </View>
                          <TouchableOpacity
                            style={[
                              styles.buttonStyle,
                              {
                                backgroundColor: "#E98C53",
                                width: 225,
                                marginLeft: 15,
                              },
                            ]}
                            disabled={session >= 10 ? false : true}
                            onPress={() => {
                              setShowSession(false);
                              session >= 10
                                ? navigation.navigate("articlePage", {
                                    Session: 10,
                                  })
                                : null;
                            }}
                          >
                            <Text
                              style={[styles.buttonText, { color: "white" }]}
                            >
                              {session >= 10 ? "Incoming" : "Incoming"}
                            </Text>
                          </TouchableOpacity>
                        </View>

                        <Text
                          style={{
                            fontSize: 20,
                            textAlign: "center",
                            marginTop: 15,
                            marginBottom: 10,
                          }}
                        >
                          Sesi 11
                        </Text>
                        <View style={{ flexDirection: "row" }}>
                          <View style={{ justifyContent: "center" }}>
                            {session == 11 ? (
                              <ProgressCircle
                                percent={percent}
                                radius={25}
                                borderWidth={6}
                                color="#F19A57"
                              >
                                <Text style={{ fontSize: 15 }}>
                                  {percent + "%"}
                                </Text>
                              </ProgressCircle>
                            ) : session > 11 ? (
                              <View
                                style={{
                                  width: 50,
                                  height: 50,
                                  borderRadius: 50,
                                  backgroundColor: "#F19A57",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              ></View>
                            ) : (
                              <ProgressCircle
                                percent={0}
                                radius={25}
                                borderWidth={6}
                                color="#F19A57"
                              ></ProgressCircle>
                            )}
                          </View>
                          <TouchableOpacity
                            style={[
                              styles.buttonStyle,
                              {
                                backgroundColor: "#E98C53",
                                width: 225,
                                marginLeft: 15,
                              },
                            ]}
                            disabled={session >= 11 ? false : true}
                            onPress={() => {
                              setShowSession(false);
                              session >= 11
                                ? navigation.navigate("articlePage", {
                                    Session: 11,
                                  })
                                : null;
                            }}
                          >
                            <Text
                              style={[styles.buttonText, { color: "white" }]}
                            >
                              {session >= 11 ? "Incoming" : "Incoming"}
                            </Text>
                          </TouchableOpacity>
                        </View>

                        <Text
                          style={{
                            fontSize: 20,
                            textAlign: "center",
                            marginTop: 15,
                            marginBottom: 10,
                          }}
                        >
                          Sesi 12
                        </Text>
                        <View style={{ flexDirection: "row" }}>
                          <View style={{ justifyContent: "center" }}>
                            {session == 12 ? (
                              <ProgressCircle
                                percent={percent}
                                radius={25}
                                borderWidth={6}
                                color="#F19A57"
                              >
                                <Text style={{ fontSize: 15 }}>
                                  {percent + "%"}
                                </Text>
                              </ProgressCircle>
                            ) : session > 12 ? (
                              <View
                                style={{
                                  width: 50,
                                  height: 50,
                                  borderRadius: 50,
                                  backgroundColor: "#F19A57",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              ></View>
                            ) : (
                              <ProgressCircle
                                percent={0}
                                radius={25}
                                borderWidth={6}
                                color="#F19A57"
                              ></ProgressCircle>
                            )}
                          </View>
                          <TouchableOpacity
                            style={[
                              styles.buttonStyle,
                              {
                                backgroundColor: "#E98C53",
                                width: 225,
                                marginLeft: 15,
                              },
                            ]}
                            disabled={session >= 12 ? false : true}
                            onPress={() => {
                              setShowSession(false);
                              session >= 12
                                ? navigation.navigate("articlePage", {
                                    Session: 12,
                                  })
                                : null;
                            }}
                          >
                            <Text
                              style={[styles.buttonText, { color: "white" }]}
                            >
                              {session >= 12 ? "Incoming" : "Incoming"}
                            </Text>
                          </TouchableOpacity>
                        </View>

                        <View style={{ alignItems: "center", marginTop: 50 }}>
                          <TouchableOpacity
                            style={styles.buttonStyle2}
                            onPress={() => setShowSession(false)}
                          >
                            <Text
                              style={[styles.buttonText, { color: "#FFFFFF" }]}
                            >
                              Kembali
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>
                </ScrollView>
              </Modal>

              <Modal animationType="fade" transparent={true} visible={survey}>
                <ScrollView
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: "center",
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      paddingLeft: 20,
                      paddingRight: 20,
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "rgba(0,0,0,0.4)",
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "white",
                        borderRadius: 20,
                      }}
                    >
                      <View
                        style={{
                          marginTop: 20,
                          marginLeft: 30,
                          marginRight: 30,
                          marginBottom: 30,
                        }}
                      >
                        <Text style={{ fontSize: 20, textAlign: "center" }}>
                          Anda diminta untuk menjawab soal selidik kerana{" "}
                          {firstSurvey
                            ? "telah tamat sesi 6."
                            : secondSurvey
                            ? "telah tamat sesi 12."
                            : thirdSurvey
                            ? "sudah satu bulan tamatkan sesi 12."
                            : null}
                        </Text>
                        <View style={{ alignItems: "center", marginTop: 25 }}>
                          <TouchableOpacity
                            style={styles.buttonStyle2}
                            onPress={() => {
                              setSurvey(false);
                              firstSurvey
                                ? setFirstSurvey(true)
                                : secondSurvey
                                ? setSecondSurvey(true)
                                : thirdSurvey
                                ? setThirdSurvey(true)
                                : null;
                              Linking.openURL("https://www.google.com");
                            }}
                          >
                            <Text
                              style={[styles.buttonText, { color: "#FFFFFF" }]}
                            >
                              Jawab soal selidik
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>
                </ScrollView>
              </Modal>

              <View
                style={{
                  backgroundColor: "rgba(255,255,255,0.5)",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  paddingRight: 40,
                  paddingTop: 5,
                  paddingBottom: 5,
                  borderBottomRightRadius: 20,
                  borderBottomLeftRadius: 20,
                }}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate("chatPage")}
                >
                  <Image
                    source={require("../assets/chat.png")}
                    style={{ width: 45, height: 45, marginRight: 10 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setDrawer(true)}>
                  <Image
                    source={require("../assets/menu.png")}
                    style={{ width: 45, height: 45 }}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  marginTop: 20,
                  marginLeft: 40,
                  marginRight: 40,
                  marginBottom: 30,
                }}
              >
                <Text style={styles.bigTitle}>PERuT</Text>
                <View
                  style={{
                    backgroundColor: "rgba(255,255,255,0.5)",
                    marginTop: 10,
                    borderRadius: 20,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 15,
                      marginLeft: 15,
                      marginRight: 15,
                      justifyContent: "space-between",
                    }}
                  >
                    <View>
                      {session == 1 ? (
                        <ProgressCircle
                          percent={percent}
                          radius={25}
                          borderWidth={6}
                          color="#F19A57"
                        >
                          <Text style={{ fontSize: 15 }}>{percent + "%"}</Text>
                        </ProgressCircle>
                      ) : session > 1 ? (
                        <View
                          style={{
                            width: 50,
                            height: 50,
                            borderRadius: 50,
                            backgroundColor: "#F19A57",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        ></View>
                      ) : (
                        <ProgressCircle
                          percent={0}
                          radius={25}
                          borderWidth={6}
                          color="#F19A57"
                        ></ProgressCircle>
                      )}
                      <Text style={{ fontSize: 20, textAlign: "center" }}>
                        1st
                      </Text>
                    </View>
                    <View>
                      {session == 2 ? (
                        <ProgressCircle
                          percent={percent}
                          radius={25}
                          borderWidth={6}
                          color="#F19A57"
                        >
                          <Text style={{ fontSize: 15 }}>{percent + "%"}</Text>
                        </ProgressCircle>
                      ) : session > 2 ? (
                        <View
                          style={{
                            width: 50,
                            height: 50,
                            borderRadius: 50,
                            backgroundColor: "#F19A57",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        ></View>
                      ) : (
                        <ProgressCircle
                          percent={0}
                          radius={25}
                          borderWidth={6}
                          color="#F19A57"
                        ></ProgressCircle>
                      )}
                      <Text style={{ fontSize: 20, textAlign: "center" }}>
                        2nd
                      </Text>
                    </View>

                    <View>
                      {session == 3 ? (
                        <ProgressCircle
                          percent={percent}
                          radius={25}
                          borderWidth={6}
                          color="#F19A57"
                        >
                          <Text style={{ fontSize: 15 }}>{percent + "%"}</Text>
                        </ProgressCircle>
                      ) : session > 3 ? (
                        <View
                          style={{
                            width: 50,
                            height: 50,
                            borderRadius: 50,
                            backgroundColor: "#F19A57",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        ></View>
                      ) : (
                        <ProgressCircle
                          percent={0}
                          radius={25}
                          borderWidth={6}
                          color="#F19A57"
                        ></ProgressCircle>
                      )}
                      <Text style={{ fontSize: 20, textAlign: "center" }}>
                        3rd
                      </Text>
                    </View>

                    <View>
                      {session == 4 ? (
                        <ProgressCircle
                          percent={percent}
                          radius={25}
                          borderWidth={6}
                          color="#F19A57"
                        >
                          <Text style={{ fontSize: 15 }}>{percent + "%"}</Text>
                        </ProgressCircle>
                      ) : session > 4 ? (
                        <View
                          style={{
                            width: 50,
                            height: 50,
                            borderRadius: 50,
                            backgroundColor: "#F19A57",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        ></View>
                      ) : (
                        <ProgressCircle
                          percent={0}
                          radius={25}
                          borderWidth={6}
                          color="#F19A57"
                        ></ProgressCircle>
                      )}
                      <Text style={{ fontSize: 20, textAlign: "center" }}>
                        4th
                      </Text>
                    </View>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 15,
                      marginLeft: 15,
                      marginRight: 15,
                      justifyContent: "space-between",
                    }}
                  >
                    <View>
                      {session == 5 ? (
                        <ProgressCircle
                          percent={percent}
                          radius={25}
                          borderWidth={6}
                          color="#F19A57"
                        >
                          <Text style={{ fontSize: 15 }}>{percent + "%"}</Text>
                        </ProgressCircle>
                      ) : session > 5 ? (
                        <View
                          style={{
                            width: 50,
                            height: 50,
                            borderRadius: 50,
                            backgroundColor: "#F19A57",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        ></View>
                      ) : (
                        <ProgressCircle
                          percent={0}
                          radius={25}
                          borderWidth={6}
                          color="#F19A57"
                        ></ProgressCircle>
                      )}
                      <Text style={{ fontSize: 20, textAlign: "center" }}>
                        5th
                      </Text>
                    </View>
                    <View>
                      {session == 6 ? (
                        <ProgressCircle
                          percent={percent}
                          radius={25}
                          borderWidth={6}
                          color="#F19A57"
                        >
                          <Text style={{ fontSize: 15 }}>{percent + "%"}</Text>
                        </ProgressCircle>
                      ) : session > 6 ? (
                        <View
                          style={{
                            width: 50,
                            height: 50,
                            borderRadius: 50,
                            backgroundColor: "#F19A57",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        ></View>
                      ) : (
                        <ProgressCircle
                          percent={0}
                          radius={25}
                          borderWidth={6}
                          color="#F19A57"
                        ></ProgressCircle>
                      )}
                      <Text style={{ fontSize: 20, textAlign: "center" }}>
                        6th
                      </Text>
                    </View>

                    <View>
                      {session == 7 ? (
                        <ProgressCircle
                          percent={percent}
                          radius={25}
                          borderWidth={6}
                          color="#F19A57"
                        >
                          <Text style={{ fontSize: 15 }}>{percent + "%"}</Text>
                        </ProgressCircle>
                      ) : session > 7 ? (
                        <View
                          style={{
                            width: 50,
                            height: 50,
                            borderRadius: 50,
                            backgroundColor: "#F19A57",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        ></View>
                      ) : (
                        <ProgressCircle
                          percent={0}
                          radius={25}
                          borderWidth={6}
                          color="#F19A57"
                        ></ProgressCircle>
                      )}
                      <Text style={{ fontSize: 20, textAlign: "center" }}>
                        7th
                      </Text>
                    </View>

                    <View>
                      {session == 8 ? (
                        <ProgressCircle
                          percent={percent}
                          radius={25}
                          borderWidth={6}
                          color="#F19A57"
                        >
                          <Text style={{ fontSize: 15 }}>{percent + "%"}</Text>
                        </ProgressCircle>
                      ) : session > 8 ? (
                        <View
                          style={{
                            width: 50,
                            height: 50,
                            borderRadius: 50,
                            backgroundColor: "#F19A57",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        ></View>
                      ) : (
                        <ProgressCircle
                          percent={0}
                          radius={25}
                          borderWidth={6}
                          color="#F19A57"
                        ></ProgressCircle>
                      )}
                      <Text style={{ fontSize: 20, textAlign: "center" }}>
                        8th
                      </Text>
                    </View>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 15,
                      marginLeft: 15,
                      marginRight: 15,
                      marginBottom: 15,
                      justifyContent: "space-between",
                    }}
                  >
                    <View>
                      {session == 9 ? (
                        <ProgressCircle
                          percent={percent}
                          radius={25}
                          borderWidth={6}
                          color="#F19A57"
                        >
                          <Text style={{ fontSize: 15 }}>{percent + "%"}</Text>
                        </ProgressCircle>
                      ) : session > 9 ? (
                        <View
                          style={{
                            width: 50,
                            height: 50,
                            borderRadius: 50,
                            backgroundColor: "#F19A57",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        ></View>
                      ) : (
                        <ProgressCircle
                          percent={0}
                          radius={25}
                          borderWidth={6}
                          color="#F19A57"
                        ></ProgressCircle>
                      )}
                      <Text style={{ fontSize: 20, textAlign: "center" }}>
                        9th
                      </Text>
                    </View>
                    <View>
                      {session == 10 ? (
                        <ProgressCircle
                          percent={percent}
                          radius={25}
                          borderWidth={6}
                          color="#F19A57"
                        >
                          <Text style={{ fontSize: 15 }}>{percent + "%"}</Text>
                        </ProgressCircle>
                      ) : session > 10 ? (
                        <View
                          style={{
                            width: 50,
                            height: 50,
                            borderRadius: 50,
                            backgroundColor: "#F19A57",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        ></View>
                      ) : (
                        <ProgressCircle
                          percent={0}
                          radius={25}
                          borderWidth={6}
                          color="#F19A57"
                        ></ProgressCircle>
                      )}
                      <Text style={{ fontSize: 20, textAlign: "center" }}>
                        10th
                      </Text>
                    </View>

                    <View>
                      {session == 11 ? (
                        <ProgressCircle
                          percent={percent}
                          radius={25}
                          borderWidth={6}
                          color="#F19A57"
                        >
                          <Text style={{ fontSize: 15 }}>{percent + "%"}</Text>
                        </ProgressCircle>
                      ) : session > 11 ? (
                        <View
                          style={{
                            width: 50,
                            height: 50,
                            borderRadius: 50,
                            backgroundColor: "#F19A57",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        ></View>
                      ) : (
                        <ProgressCircle
                          percent={0}
                          radius={25}
                          borderWidth={6}
                          color="#F19A57"
                        ></ProgressCircle>
                      )}
                      <Text style={{ fontSize: 20, textAlign: "center" }}>
                        11th
                      </Text>
                    </View>

                    <View>
                      {session == 12 ? (
                        <ProgressCircle
                          percent={percent}
                          radius={25}
                          borderWidth={6}
                          color="#F19A57"
                        >
                          <Text style={{ fontSize: 15 }}>{percent + "%"}</Text>
                        </ProgressCircle>
                      ) : session > 12 ? (
                        <View
                          style={{
                            width: 50,
                            height: 50,
                            borderRadius: 50,
                            backgroundColor: "#F19A57",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        ></View>
                      ) : (
                        <ProgressCircle
                          percent={0}
                          radius={25}
                          borderWidth={6}
                          color="#F19A57"
                        ></ProgressCircle>
                      )}
                      <Text style={{ fontSize: 20, textAlign: "center" }}>
                        12th
                      </Text>
                    </View>
                  </View>
                </View>

                {session == 13 ? (
                  <View>
                    <Text
                      style={{
                        fontSize: 20,
                        color: "#FFFFFF",
                        marginTop: 20,
                      }}
                    >
                      Sesi 12 daripada 12
                    </Text>

                    <ProgressBar
                      progress={12 / 12}
                      width={Dimensions.get("window").width - 80}
                      color={"#34433C"}
                      style={{ marginTop: 10 }}
                    />
                  </View>
                ) : (
                  <View>
                    <Text
                      style={{
                        fontSize: 20,
                        color: "#FFFFFF",
                        marginTop: 20,
                      }}
                    >
                      Sesi {session} daripada 12
                    </Text>

                    <ProgressBar
                      progress={session / 12}
                      width={Dimensions.get("window").width - 80}
                      color={"#34433C"}
                      style={{ marginTop: 10 }}
                    />
                  </View>
                )}

                <View style={{ alignItems: "center", marginTop: 30 }}>
                  <TouchableOpacity
                    style={[styles.buttonStyle, { backgroundColor: "#34433C" }]}
                    onPress={() =>
                      session == 13
                        ? navigation.navigate("articlePage", { Session: 12 })
                        : navigation.navigate("articlePage", {
                            Session: session,
                          })
                    }
                  >
                    <Text style={[styles.buttonText, { color: "white" }]}>
                      1. {session == 1 ? "PERuT®" : null}
                      {session == 2 ? "Kembung Perut" : null}
                      {session == 3 ? "Punca-Punca Perut Kembung" : null}
                      {session == 4 ? "Kenali Sistem Penghadaman Anda" : null}
                      {session == 5 ? "Incoming" : null}
                      {session == 6 ? "Incoming" : null}
                      {session == 7 ? "Incoming" : null}
                      {session == 8 ? "Incoming" : null}
                      {session == 9 ? "Incoming" : null}
                      {session == 10 ? "Incoming" : null}
                      {session == 11 ? "Incoming" : null}
                      {session == 12 ? "Incoming" : null}
                      {session == 13 ? "Incoming" : null}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={{ alignItems: "center", marginTop: 20 }}>
                  <TouchableOpacity
                    style={[styles.buttonStyle, { backgroundColor: "#34433C" }]}
                    onPress={() =>
                      navigation.navigate("audioPage", {
                        VideoID: videoId,
                        Session: session,
                      })
                    }
                  >
                    <Text style={[styles.buttonText, { color: "white" }]}>
                      2. Audio Kembung Perut
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </ImageBackground>
        </ScrollView>
      </MenuDrawer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  bigTitle: {
    fontWeight: "bold",
    fontSize: 35,
    color: "#383838",
  },
  buttonStyle: {
    width: 250,
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
  },
  pickerStyle: {
    width: 90,
    height: 50,
    fontWeight: "bold",
  },
  description: {
    fontSize: 20,
    paddingBottom: 20,
    color: "#E98C53",
    textAlign: "center",
  },
  buttonStyle2: {
    alignItems: "center",
    width: 225,
    padding: 10,
    borderRadius: 30,
    backgroundColor: "#E98C53",
  },
});

export default mainMenuPage;
