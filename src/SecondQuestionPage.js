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
  Dimensions,
  ImageBackground,
  Image,
} from "react-native";
import ProgressBar from "react-native-progress/Bar";
import CheckBox from "@react-native-community/checkbox";
import { Input } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";

const secondQuestionPage = ({ navigation }) => {
  const [umur, setUmur] = useState("");
  const [jantina, setJantina] = useState("Perempuan");
  const [bangsa, setBangsa] = useState("Melayu");
  const [tahapPembelajaran, setTahapPembelajaran] = useState("Sekolah Rendah");
  const [pekerjaan, setPekerjaan] = useState("Pelajar");
  const [detailPekerjaan, setDetailPekerjaan] = useState("");
  const [statusPerkahwinan, setStatusPerkahwinan] = useState("Bujang");
  const [pendapatan, setPendapatan] = useState("RM2500 dan ke bawah");
  const [
    pernahMengalamiKembungPerut,
    setPernahMengalamiKembungPerut,
  ] = useState(false);
  const [waktu, setWaktu] = useState("Pagi");
  const [kaitDenganPemakanan, setKaitDenganPemakanan] = useState(false);
  const [detailPemakanan, setDetailPemakanan] = useState("");
  const [gangguHidup, setGangguHidup] = useState(false);
  const [kurangBeratBadan, setKurangBeratBadan] = useState(false);
  const [simptomLain, setSimptomLain] = useState(false);
  const [detailSimptomLain, setDetailSimptomLain] = useState("");
  const [pengyakitLain, setPengyakitLain] = useState(false);
  const [detailPengyakitLain, setDetailPengyakitLain] = useState("");
  const [ubat, setUbat] = useState("");
  const [tahapGangguHidup, setTahapGangguHidup] = useState("");
  const [tahapKualitiTidur, setTahapKualitiHidup] = useState("");
  const [ahliKeluarga, setAhliKeluarga] = useState("");
  const [tahapStress, setTahapStress] = useState("");
  const [kaitDenganKitaranHaid, setKaitDengankitaranHaid] = useState("");
  const [pembedahan, setPembedahan] = useState(false);
  const [detailPembedahan, setDetailPembedahan] = useState("");
  const [gejala1, setGejala1] = useState(false);
  const [gejala2, setGejala2] = useState(false);
  const [gejala3, setGejala3] = useState(false);
  const [gejala4, setGejala4] = useState(false);
  const [tahapKeterukanSimptom, setTahapKeterukanSimptom] = useState("");
  const [tahapKesakitanPerut, setTahapKesakitanPerut] = useState("");
  const [pernahMengalamiDistensi, setPernahMengalamiDistensi] = useState("Ya");
  const [pernahMengalamiKembung, setPernahMengalamiKembung] = useState("Ya");
  const [jawapanSesuaiKeadaan, setJawapanSesuaiKeadaan] = useState(
    "Saya hanya berasa kembung (merasa ada angin didalam perut, tapi perut tidak naik)"
  );
  const [kekerapan, setKekerapan] = useState("Tidak pernah");
  const [lebih6Bulan, setLebih6Bulan] = useState(false);
  const [masalah1, setMasalah1] = useState(false);
  const [masalah2, setMasalah2] = useState(false);
  const [masalah3, setMasalah3] = useState(false);
  const [masalah4, setMasalah4] = useState(false);
  const [masalah5, setMasalah5] = useState(false);
  const [masalah6, setMasalah6] = useState(false);
  const [masalah7, setMasalah7] = useState(false);
  const [masalah8, setMasalah8] = useState(false);
  const [masalah9, setMasalah9] = useState(false);
  const [masalah10, setMasalah10] = useState(false);
  const [masalah11, setMasalah11] = useState(false);
  const [masalah12, setMasalah12] = useState(false);
  const [masalah13, setMasalah13] = useState(false);
  const [najis1, setNajis1] = useState("");
  const [najis2, setNajis2] = useState("");
  const [najis3, setNajis3] = useState("");
  const [najis4, setNajis4] = useState("");
  const [najis5, setNajis5] = useState("");
  const [najis6, setNajis6] = useState("");
  const [najis7, setNajis7] = useState("");
  const [pedih, setPedih] = useState(false);
  const [kekerapanPedih, setKekerapanPedih] = useState("");
  const [cepatKenyang, setCepatKenyang] = useState(false);
  const [kekerapanCepatKenyang, setKekerapanCepatKenyang] = useState("");
  const [kenyangLepasMakan, setKenyangLepasMakan] = useState(false);
  const [kekerapanKenyangLepasMakan, setKekerapanKenyangLepasMakan] = useState(
    ""
  );
  const [sakitUluHati, setSakitUluHati] = useState(false);
  const [kekerapanSakitUluHati, setKekerapanSakitUluHati] = useState("");
  const [pedihUluHati, setPedihUluHati] = useState(false);
  const [kekerapanPedihUluHati, setKekerapanPedihUluHati] = useState("");
  const [perutKembung, setPerutKembung] = useState(false);
  const [kekerapanPerutKembung, setKekerapanPerutKembung] = useState("");
  const [loya, setLoya] = useState(false);
  const [kekerapanLoya, setKekerapanLoya] = useState("");
  const [muntah, setMuntah] = useState(false);
  const [kekerapanMuntah, setKekerapanMuntah] = useState("");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <ImageBackground
          source={require("../assets/background.png")}
          style={styles.background}
        >
          <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
            <View
              style={{
                marginTop: 30,
                marginLeft: 40,
                marginRight: 40,
                marginBottom: 30,
              }}
            >
              <View style={{ alignItems: "center" }}>
                <ProgressBar progress={0.67} width={275} color={"#34433C"} />
              </View>

              <View style={{ marginTop: 30 }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 30,
                    textAlign: "center",
                    color: "#383838",
                  }}
                >
                  Soal Selidik
                </Text>

                <Text style={styles.smallTitle}>Maklumat Am</Text>

                <View style={styles.horizontalView}>
                  <Text style={styles.question}>Umur:</Text>
                  <Input
                    placeholderTextColor="#FFFFFF"
                    selectionColor="#FFFFFF"
                    inputStyle={{ color: "#FFFFFF" }}
                    inputContainerStyle={{ borderBottomColor: "#FFFFFF" }}
                    style={{ marginTop: 5 }}
                    value={umur}
                    onChangeText={(text) => setUmur(text)}
                  />
                </View>

                <View style={styles.horizontalView}>
                  <Text style={styles.question}>Jantina:</Text>
                  <View style={styles.pickerContainer}>
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
                </View>

                <View style={[styles.horizontalView, { marginTop: 10 }]}>
                  <Text style={styles.question}>Bangsa:</Text>
                  <View style={styles.pickerContainer}>
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
                </View>

                <View style={styles.questionContainer}>
                  <Text style={styles.question}>Tahap pembelajaran:</Text>
                  <View style={styles.pickerContainerLong}>
                    <Picker
                      style={styles.pickerStyleLong}
                      selectedValue={tahapPembelajaran}
                      onValueChange={(value) => {
                        setTahapPembelajaran(value);
                      }}
                    >
                      <Picker.Item
                        label="Sekolah Rendah"
                        value="Sekolah Rendah"
                      />
                      <Picker.Item
                        label="Sekolah Menengah"
                        value="Sekolah Menengah"
                      />
                      <Picker.Item
                        label="STPM / Kolej / Universiti"
                        value="STPM / Kolej / Universiti"
                      />
                    </Picker>
                  </View>
                </View>

                <View style={styles.questionContainer}>
                  <Text style={styles.question}>Pekerjaan:</Text>
                  <View style={styles.pickerContainerLong}>
                    <Picker
                      style={styles.pickerStyleLong}
                      selectedValue={pekerjaan}
                      onValueChange={(value) => {
                        setPekerjaan(value);
                      }}
                    >
                      <Picker.Item label="Pelajar" value="Pelajar" />
                      <Picker.Item label="Bekerja" value="Bekerja" />
                      <Picker.Item
                        label="Suri rumah / tidak bekerja"
                        value="Suri rumah / tidak bekerja"
                      />
                    </Picker>
                  </View>
                  {pekerjaan == "Bekerja" ? (
                    <Input
                      placeholder="Nyatakan"
                      placeholderTextColor="#FFFFFF"
                      selectionColor="#FFFFFF"
                      inputStyle={{ color: "#FFFFFF" }}
                      inputContainerStyle={{ borderBottomColor: "#FFFFFF" }}
                      style={{ marginTop: 10 }}
                      value={detailPekerjaan}
                      onChangeText={(text) => setDetailPekerjaan(text)}
                    />
                  ) : null}
                </View>

                <View style={styles.questionContainer}>
                  <Text style={styles.question}>Status perkahwinan:</Text>
                  <View style={styles.pickerContainerLong}>
                    <Picker
                      style={styles.pickerStyleLong}
                      selectedValue={statusPerkahwinan}
                      onValueChange={(value) => {
                        setStatusPerkahwinan(value);
                      }}
                    >
                      <Picker.Item label="Bujang" value="Bujang" />
                      <Picker.Item label="Bercerai" value="Bercerai" />
                      <Picker.Item label="Berkahwin" value="Berkahwin" />
                    </Picker>
                  </View>
                </View>

                <View style={styles.questionContainer}>
                  <Text style={styles.question}>Pendapatan individu:</Text>
                  <View style={styles.pickerContainerLong}>
                    <Picker
                      style={styles.pickerStyleLong}
                      selectedValue={pendapatan}
                      onValueChange={(value) => {
                        setPendapatan(value);
                      }}
                    >
                      <Picker.Item
                        label="RM2500 dan ke bawah"
                        value="RM2500 dan ke bawah"
                      />
                      <Picker.Item
                        label="RM2500 - RM4849"
                        value="RM2500 - RM4849"
                      />
                      <Picker.Item
                        label="RM4850 - RM10,959"
                        value="RM4850 - RM10,959"
                      />
                      <Picker.Item
                        label="RM10,960 ke atas"
                        value="RM10,960 ke atas"
                      />
                    </Picker>
                  </View>
                </View>

                <Text style={[styles.smallTitle, { marginTop: 40 }]}>
                  Maklumat Kesihatan Diri
                </Text>

                <View style={styles.questionContainer}>
                  <Text style={styles.question}>
                    Adakah anda pernah mengalami kembung perut?
                  </Text>
                  <View style={styles.checkBoxContainer}>
                    <View style={{ flexDirection: "row" }}>
                      <CheckBox
                        value={pernahMengalamiKembungPerut ? false : true}
                        onValueChange={(value) => {
                          value ? setPernahMengalamiKembungPerut(false) : null;
                        }}
                        disabled={pernahMengalamiKembungPerut ? false : true}
                        tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                        tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                        style={{
                          transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                          paddingTop: 40,
                        }}
                      />
                      <Text style={styles.checkBoxText}>Tidak</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <CheckBox
                        value={pernahMengalamiKembungPerut ? true : false}
                        onValueChange={(value) => {
                          value ? setPernahMengalamiKembungPerut(true) : null;
                        }}
                        disabled={pernahMengalamiKembungPerut ? true : false}
                        tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                        tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                        style={{
                          transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                          paddingTop: 40,
                        }}
                      />
                      <Text style={styles.checkBoxText}>Ya</Text>
                    </View>
                  </View>
                  {pernahMengalamiKembungPerut ? (
                    <View style={styles.questionContainer}>
                      <Text style={styles.question}>
                        Bila biasanya ia berlaku:
                      </Text>
                      <View style={styles.pickerContainerLong}>
                        <Picker
                          style={styles.pickerStyleLong}
                          selectedValue={waktu}
                          onValueChange={(value) => {
                            setWaktu(value);
                          }}
                        >
                          <Picker.Item label="Pagi" value="Pagi" />
                          <Picker.Item label="Petang" value="Petang" />
                          <Picker.Item label="Malam" value="Malam" />
                          <Picker.Item
                            label="Tiada waktu khusus"
                            value="Tiada waktu khusus"
                          />
                        </Picker>
                      </View>
                    </View>
                  ) : null}
                </View>

                <View style={styles.questionContainer}>
                  <Text style={styles.question}>
                    Adakah ia berkait dengan pemakanan?
                  </Text>
                  <View style={styles.checkBoxContainer}>
                    <View style={{ flexDirection: "row" }}>
                      <CheckBox
                        value={kaitDenganPemakanan ? false : true}
                        onValueChange={(value) => {
                          value ? setKaitDenganPemakanan(false) : null;
                        }}
                        disabled={kaitDenganPemakanan ? false : true}
                        tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                        tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                        style={{
                          transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                          paddingTop: 40,
                        }}
                      />
                      <Text style={styles.checkBoxText}>Tidak</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <CheckBox
                        value={kaitDenganPemakanan ? true : false}
                        onValueChange={(value) => {
                          value ? setKaitDenganPemakanan(true) : null;
                        }}
                        disabled={kaitDenganPemakanan ? true : false}
                        tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                        tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                        style={{
                          transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                          paddingTop: 40,
                        }}
                      />
                      <Text style={styles.checkBoxText}>Ya</Text>
                    </View>
                  </View>
                  {kaitDenganPemakanan ? (
                    <Input
                      placeholder="Nyatakan"
                      placeholderTextColor="#FFFFFF"
                      selectionColor="#FFFFFF"
                      inputStyle={{ color: "#FFFFFF" }}
                      inputContainerStyle={{ borderBottomColor: "#FFFFFF" }}
                      style={{ marginTop: 10 }}
                      value={detailPemakanan}
                      onChangeText={(text) => setDetailPemakanan(text)}
                    />
                  ) : null}
                </View>

                <View style={styles.questionContainer}>
                  <Text style={styles.question}>
                    Adakah ia mengganggu kualiti hidup?
                  </Text>
                  <View style={styles.checkBoxContainer}>
                    <View style={{ flexDirection: "row" }}>
                      <CheckBox
                        value={gangguHidup ? false : true}
                        onValueChange={(value) => {
                          value ? setGangguHidup(false) : null;
                        }}
                        disabled={gangguHidup ? false : true}
                        tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                        tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                        style={{
                          transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                          paddingTop: 40,
                        }}
                      />
                      <Text style={styles.checkBoxText}>Tidak</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <CheckBox
                        value={gangguHidup ? true : false}
                        onValueChange={(value) => {
                          value ? setGangguHidup(true) : null;
                        }}
                        disabled={gangguHidup ? true : false}
                        tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                        tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                        style={{
                          transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                          paddingTop: 40,
                        }}
                      />
                      <Text style={styles.checkBoxText}>Ya</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.questionContainer}>
                  <Text style={styles.question}>
                    {
                      "Adakah anda pernah mengalami gejala seperti kurang berat badan (>5kg) atau berak berdarah?"
                    }
                  </Text>
                  <View style={styles.checkBoxContainer}>
                    <View style={{ flexDirection: "row" }}>
                      <CheckBox
                        value={kurangBeratBadan ? false : true}
                        onValueChange={(value) => {
                          value ? setKurangBeratBadan(false) : null;
                        }}
                        disabled={kurangBeratBadan ? false : true}
                        tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                        tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                        style={{
                          transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                          paddingTop: 40,
                        }}
                      />
                      <Text style={styles.checkBoxText}>Tidak</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <CheckBox
                        value={kurangBeratBadan ? true : false}
                        onValueChange={(value) => {
                          value ? setKurangBeratBadan(true) : null;
                        }}
                        disabled={kurangBeratBadan ? true : false}
                        tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                        tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                        style={{
                          transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                          paddingTop: 40,
                        }}
                      />
                      <Text style={styles.checkBoxText}>Ya</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.questionContainer}>
                  <Text style={styles.question}>
                    {
                      "Simptom lain semasa kembung perut? (contoh: loya / muntah / pening / cirit-birit / sembelit)"
                    }
                  </Text>
                  <View style={styles.checkBoxContainer}>
                    <View style={{ flexDirection: "row" }}>
                      <CheckBox
                        value={simptomLain ? false : true}
                        onValueChange={(value) => {
                          value ? setSimptomLain(false) : null;
                        }}
                        disabled={simptomLain ? false : true}
                        tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                        tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                        style={{
                          transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                          paddingTop: 40,
                        }}
                      />
                      <Text style={styles.checkBoxText}>Tidak</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <CheckBox
                        value={simptomLain ? true : false}
                        onValueChange={(value) => {
                          value ? setSimptomLain(true) : null;
                        }}
                        disabled={simptomLain ? true : false}
                        tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                        tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                        style={{
                          transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                          paddingTop: 40,
                        }}
                      />
                      <Text style={styles.checkBoxText}>Ya</Text>
                    </View>
                  </View>
                  {simptomLain ? (
                    <Input
                      placeholder="Nyatakan"
                      placeholderTextColor="#FFFFFF"
                      selectionColor="#FFFFFF"
                      inputStyle={{ color: "#FFFFFF" }}
                      inputContainerStyle={{ borderBottomColor: "#FFFFFF" }}
                      style={{ marginTop: 10 }}
                      value={detailSimptomLain}
                      onChangeText={(text) => setDetailSimptomLain(text)}
                    />
                  ) : null}
                </View>

                <View style={styles.questionContainer}>
                  <Text style={styles.question}>
                    {
                      "Adakah anda pernah mengalami penyakit yang lain? (contoh: darah tinggi / kencing manis / sakit jantung)"
                    }
                  </Text>
                  <View style={styles.checkBoxContainer}>
                    <View style={{ flexDirection: "row" }}>
                      <CheckBox
                        value={pengyakitLain ? false : true}
                        onValueChange={(value) => {
                          value ? setPengyakitLain(false) : null;
                        }}
                        disabled={pengyakitLain ? false : true}
                        tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                        tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                        style={{
                          transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                          paddingTop: 40,
                        }}
                      />
                      <Text style={styles.checkBoxText}>Tidak</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <CheckBox
                        value={pengyakitLain ? true : false}
                        onValueChange={(value) => {
                          value ? setPengyakitLain(true) : null;
                        }}
                        disabled={pengyakitLain ? true : false}
                        tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                        tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                        style={{
                          transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                          paddingTop: 40,
                        }}
                      />
                      <Text style={styles.checkBoxText}>Ya</Text>
                    </View>
                  </View>
                  {pengyakitLain ? (
                    <Input
                      placeholder="Nyatakan"
                      placeholderTextColor="#FFFFFF"
                      selectionColor="#FFFFFF"
                      inputStyle={{ color: "#FFFFFF" }}
                      inputContainerStyle={{ borderBottomColor: "#FFFFFF" }}
                      style={{ marginTop: 10 }}
                      value={detailPengyakitLain}
                      onChangeText={(text) => setDetailPengyakitLain(text)}
                    />
                  ) : null}
                </View>

                <View style={styles.questionContainer}>
                  <Text style={styles.question}>
                    {
                      "Adakah anda sedang mengambil ubat / supplement? (contoh: Metformin)"
                    }
                  </Text>
                  <Input
                    placeholder="Nyatakan"
                    placeholderTextColor="#FFFFFF"
                    selectionColor="#FFFFFF"
                    inputStyle={{ color: "#FFFFFF" }}
                    inputContainerStyle={{ borderBottomColor: "#FFFFFF" }}
                    style={{ marginTop: 10 }}
                    value={ubat}
                    onChangeText={(text) => setUbat(text)}
                  />
                </View>

                <View style={styles.questionContainer}>
                  <Text style={styles.question}>
                    {
                      "Dari 0 (tiada), 1 (sedikit) hingga 10 (sangat menggangu), sila kadarkan tahap ia menggangu kualiti hidup? "
                    }
                  </Text>
                  <Input
                    placeholder="Nyatakan"
                    placeholderTextColor="#FFFFFF"
                    selectionColor="#FFFFFF"
                    inputStyle={{ color: "#FFFFFF" }}
                    keyboardType="number-pad"
                    inputContainerStyle={{ borderBottomColor: "#FFFFFF" }}
                    style={{ marginTop: 10 }}
                    value={tahapGangguHidup}
                    onChangeText={(text) => setTahapGangguHidup(text)}
                  />
                </View>

                <View style={styles.questionContainer}>
                  <Text style={styles.question}>
                    {
                      "Sila kadarkan tahap kualiti tidur seharian anda dari skala 1 (kurang bagus) hingga 10 (sangat bagus)"
                    }
                  </Text>
                  <Input
                    placeholder="Nyatakan"
                    placeholderTextColor="#FFFFFF"
                    selectionColor="#FFFFFF"
                    inputStyle={{ color: "#FFFFFF" }}
                    keyboardType="number-pad"
                    inputContainerStyle={{ borderBottomColor: "#FFFFFF" }}
                    style={{ marginTop: 10 }}
                    value={tahapKualitiTidur}
                    onChangeText={(text) => setTahapKualitiHidup(text)}
                  />
                </View>

                <View style={styles.questionContainer}>
                  <Text style={styles.question}>
                    {
                      "Adakah sesiapa dalam kalangan ahli keluarga anda pernah mengalami penyakit seperti kanser atau Sindrom Rengan Usus / Irritable Bowel Syndrome? (contoh: Siapa, penyakit)"
                    }
                  </Text>
                  <Input
                    placeholder="Nyatakan"
                    placeholderTextColor="#FFFFFF"
                    selectionColor="#FFFFFF"
                    inputStyle={{ color: "#FFFFFF" }}
                    inputContainerStyle={{ borderBottomColor: "#FFFFFF" }}
                    style={{ marginTop: 10 }}
                    value={ahliKeluarga}
                    onChangeText={(text) => setAhliKeluarga(text)}
                  />
                </View>

                <View style={styles.questionContainer}>
                  <Text style={styles.question}>
                    {
                      "Sila kadarkan tahap stress yang anda rasa sesuai menggambarkan diri anda kebelakangan ini dari skala 1 (biasa) hingga 10 (sangat teruk)"
                    }
                  </Text>
                  <Input
                    placeholder="Nyatakan"
                    placeholderTextColor="#FFFFFF"
                    selectionColor="#FFFFFF"
                    inputStyle={{ color: "#FFFFFF" }}
                    keyboardType="number-pad"
                    inputContainerStyle={{ borderBottomColor: "#FFFFFF" }}
                    style={{ marginTop: 10 }}
                    value={tahapStress}
                    onChangeText={(text) => setTahapStress(text)}
                  />
                </View>

                {jantina == "Perempuan" ? (
                  <View style={styles.questionContainer}>
                    <Text style={styles.question}>
                      {
                        "Perempuan sahaja: Adakah masalah kembung perut berkait dengan kitaran haid anda?"
                      }
                    </Text>
                    <View style={styles.checkBoxContainer}>
                      <View style={{ flexDirection: "row" }}>
                        <CheckBox
                          value={kaitDenganKitaranHaid ? false : true}
                          onValueChange={(value) => {
                            value ? setKaitDengankitaranHaid(false) : null;
                          }}
                          disabled={kaitDenganKitaranHaid ? false : true}
                          tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          style={{
                            transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                            paddingTop: 40,
                          }}
                        />
                        <Text style={styles.checkBoxText}>Tidak</Text>
                      </View>
                      <View style={{ flexDirection: "row" }}>
                        <CheckBox
                          value={kaitDenganKitaranHaid ? true : false}
                          onValueChange={(value) => {
                            value ? setKaitDengankitaranHaid(true) : null;
                          }}
                          disabled={kaitDenganKitaranHaid ? true : false}
                          tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          style={{
                            transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                            paddingTop: 40,
                          }}
                        />
                        <Text style={styles.checkBoxText}>Ya</Text>
                      </View>
                    </View>
                  </View>
                ) : null}

                <View style={styles.questionContainer}>
                  <Text style={styles.question}>
                    {"Pernahkah anda menjalani pembedahan?"}
                  </Text>
                  <View style={styles.checkBoxContainer}>
                    <View style={{ flexDirection: "row" }}>
                      <CheckBox
                        value={pembedahan ? false : true}
                        onValueChange={(value) => {
                          value ? setPembedahan(false) : null;
                        }}
                        disabled={pembedahan ? false : true}
                        tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                        tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                        style={{
                          transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                          paddingTop: 40,
                        }}
                      />
                      <Text style={styles.checkBoxText}>Tidak</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <CheckBox
                        value={pembedahan ? true : false}
                        onValueChange={(value) => {
                          value ? setPembedahan(true) : null;
                        }}
                        disabled={pembedahan ? true : false}
                        tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                        tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                        style={{
                          transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                          paddingTop: 40,
                        }}
                      />
                      <Text style={styles.checkBoxText}>Ya</Text>
                    </View>
                  </View>
                  {pembedahan ? (
                    <Input
                      placeholder="Nyatakan"
                      placeholderTextColor="#FFFFFF"
                      selectionColor="#FFFFFF"
                      inputStyle={{ color: "#FFFFFF" }}
                      inputContainerStyle={{ borderBottomColor: "#FFFFFF" }}
                      style={{ marginTop: 10 }}
                      value={detailPembedahan}
                      onChangeText={(text) => setDetailPembedahan(text)}
                    />
                  ) : null}
                </View>

                <Text style={{ fontSize: 20, color: "#FFFFFF", marginTop: 15 }}>
                  Nota kaki: Kembung perut boleh diertikan sebagai perasaan
                  tidak selesa pada perut kerana angin sama ada dengan
                  peningkatan saiz perut atau tidak. Nama lain yang biasa
                  digunakan adalah ada angin, senak, sengkok, dan kembung yang
                  mungkin datang bersama symptom lain seperti belahak, sendawa,
                  kentut, loya pening, stress dan sebagainya.
                </Text>

                <Text style={[styles.smallTitle, { marginTop: 40 }]}>
                  Diagnosis Kembung Perut
                </Text>

                <View style={styles.questionContainer}>
                  <Text style={styles.question}>
                    {
                      "Sila tekan pada kotak yang sesuai sebagaimana keadaan perut anda ATAU sekiranya anda pernah mengalami gejala/simptom tersebut:"
                    }
                  </Text>
                  <View style={{ alignItems: "center", marginTop: 5 }}>
                    <Image
                      source={require("../assets/hint.png")}
                      style={{ width: 150, height: 75 }}
                    />
                  </View>
                  <View style={{ marginTop: 5 }}>
                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                      <View style={{ justifyContent: "center" }}>
                        <CheckBox
                          value={gejala1}
                          onValueChange={setGejala1}
                          tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          style={{
                            transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                            paddingTop: 40,
                          }}
                        />
                      </View>
                      <Image
                        source={require("../assets/gejala1.png")}
                        style={{ height: 100, width: 166, marginLeft: 5 }}
                      />
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                      <View style={{ justifyContent: "center" }}>
                        <CheckBox
                          value={gejala2}
                          onValueChange={setGejala2}
                          tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          style={{
                            transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                            paddingTop: 40,
                          }}
                        />
                      </View>
                      <Image
                        source={require("../assets/gejala2.png")}
                        style={{ height: 100, width: 116, marginLeft: 5 }}
                      />
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                      <View style={{ justifyContent: "center" }}>
                        <CheckBox
                          value={gejala3}
                          onValueChange={setGejala3}
                          tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          style={{
                            transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                            paddingTop: 40,
                          }}
                        />
                      </View>
                      <Image
                        source={require("../assets/gejala3.png")}
                        style={{ height: 100, width: 118, marginLeft: 5 }}
                      />
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                      <View style={{ justifyContent: "center" }}>
                        <CheckBox
                          value={gejala4}
                          onValueChange={setGejala4}
                          tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          style={{
                            transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                            paddingTop: 40,
                          }}
                        />
                      </View>
                      <Image
                        source={require("../assets/gejala4.png")}
                        style={{ height: 100, width: 115, marginLeft: 5 }}
                      />
                    </View>
                  </View>
                </View>
                {gejala2 || gejala3 || gejala4 ? (
                  <View style={styles.questionContainer}>
                    <Text style={styles.question}>
                      {
                        "Sila nyatakan tahap keterukan simptom/gejala anda dalam skala dari 1 (sedikit) kepada 10 (sangat teruk)"
                      }
                    </Text>
                    <Input
                      placeholder="Nyatakan"
                      placeholderTextColor="#FFFFFF"
                      selectionColor="#FFFFFF"
                      inputStyle={{ color: "#FFFFFF" }}
                      keyboardType="number-pad"
                      inputContainerStyle={{ borderBottomColor: "#FFFFFF" }}
                      style={{ marginTop: 10 }}
                      value={tahapKeterukanSimptom}
                      onChangeText={(text) => setTahapKeterukanSimptom(text)}
                    />
                  </View>
                ) : null}

                {gejala2 || gejala3 || gejala4 ? (
                  <View style={styles.questionContainer}>
                    <Text style={styles.question}>
                      {
                        "Sila nyatakan tahap keterukan yang paling tepat menggambarkan tahap kesakitan perut anda berkait dengan symptom/gejala di dalam gambar di atas,dari 0 (tidak sakit) kepada 10 (teramat sakit)"
                      }
                    </Text>
                    <Input
                      placeholder="Nyatakan"
                      placeholderTextColor="#FFFFFF"
                      selectionColor="#FFFFFF"
                      inputStyle={{ color: "#FFFFFF" }}
                      keyboardType="number-pad"
                      inputContainerStyle={{ borderBottomColor: "#FFFFFF" }}
                      style={{ marginTop: 10 }}
                      value={tahapKesakitanPerut}
                      onChangeText={(text) => setTahapKesakitanPerut(text)}
                    />
                  </View>
                ) : null}

                <View style={styles.questionContainer}>
                  <Text style={styles.question}>
                    {"Adakah anda pernah mengalami distensi ("}
                    <Text style={{ fontWeight: "bold" }}>
                      perut besar
                      <Text style={{ fontWeight: "normal" }}>
                        {" lebih dari kebiasaan)?"}
                      </Text>
                    </Text>
                  </Text>
                  <View style={{ marginTop: 5 }}>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ justifyContent: "center" }}>
                        <CheckBox
                          value={pernahMengalamiDistensi == "Ya" ? true : false}
                          onValueChange={(value) => {
                            value ? setPernahMengalamiDistensi("Ya") : null;
                          }}
                          disabled={
                            pernahMengalamiDistensi == "Ya" ? true : false
                          }
                          tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          style={{
                            transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                            paddingTop: 40,
                          }}
                        />
                      </View>
                      <Text style={styles.checkBoxText}>Ya</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ justifyContent: "center" }}>
                        <CheckBox
                          value={
                            pernahMengalamiDistensi == "Tidak" ? true : false
                          }
                          onValueChange={(value) => {
                            value ? setPernahMengalamiDistensi("Tidak") : null;
                          }}
                          disabled={
                            pernahMengalamiDistensi == "Tidak" ? true : false
                          }
                          tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          style={{
                            transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                            paddingTop: 40,
                          }}
                        />
                      </View>
                      <Text style={styles.checkBoxText}>Tidak</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ justifyContent: "center" }}>
                        <CheckBox
                          value={
                            pernahMengalamiDistensi ==
                            "Saya tidak faham maksud distensi"
                              ? true
                              : false
                          }
                          onValueChange={(value) => {
                            value
                              ? setPernahMengalamiDistensi(
                                  "Saya tidak faham maksud distensi"
                                )
                              : null;
                          }}
                          disabled={
                            pernahMengalamiDistensi ==
                            "Saya tidak faham maksud distensi"
                              ? true
                              : false
                          }
                          tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          style={{
                            transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                            paddingTop: 40,
                          }}
                        />
                      </View>
                      <Text style={styles.checkBoxText}>
                        Saya tidak faham maksud distensi
                      </Text>
                    </View>
                  </View>
                </View>

                <View style={styles.questionContainer}>
                  <Text style={styles.question}>
                    {"Adakah anda pernah mengalami kembung ("}
                    <Text style={{ fontWeight: "bold" }}>
                      merasa ada angin
                      <Text style={{ fontWeight: "normal" }}>
                        {
                          " didalam perut, tapi perut tidak naik/ besar dari kebiasaan)?"
                        }
                      </Text>
                    </Text>
                  </Text>
                  <View style={{ marginTop: 5 }}>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ justifyContent: "center" }}>
                        <CheckBox
                          value={pernahMengalamiKembung == "Ya" ? true : false}
                          onValueChange={(value) => {
                            value ? setPernahMengalamiKembung("Ya") : null;
                          }}
                          disabled={
                            pernahMengalamiKembung == "Ya" ? true : false
                          }
                          tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          style={{
                            transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                            paddingTop: 40,
                          }}
                        />
                      </View>
                      <Text style={styles.checkBoxText}>Ya</Text>
                      <Text></Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ justifyContent: "center" }}>
                        <CheckBox
                          value={
                            pernahMengalamiKembung == "Tidak" ? true : false
                          }
                          onValueChange={(value) => {
                            value ? setPernahMengalamiKembung("Tidak") : null;
                          }}
                          disabled={
                            pernahMengalamiKembung == "Tidak" ? true : false
                          }
                          tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          style={{
                            transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                            paddingTop: 40,
                          }}
                        />
                      </View>
                      <Text style={styles.checkBoxText}>Tidak</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ justifyContent: "center" }}>
                        <CheckBox
                          value={
                            pernahMengalamiKembung ==
                            "Saya tidak faham maksud kembung"
                              ? true
                              : false
                          }
                          onValueChange={(value) => {
                            value
                              ? setPernahMengalamiKembung(
                                  "Saya tidak faham maksud kembung"
                                )
                              : null;
                          }}
                          disabled={
                            pernahMengalamiKembung ==
                            "Saya tidak faham maksud kembung"
                              ? true
                              : false
                          }
                          tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          style={{
                            transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                            paddingTop: 40,
                          }}
                        />
                      </View>
                      <Text style={styles.checkBoxText}>
                        Saya tidak faham maksud kembung
                      </Text>
                    </View>
                  </View>
                </View>

                <View style={styles.questionContainer}>
                  <Text style={styles.question}>
                    {"Sila pilih satu jawapan yang sesuai dengan keadaan anda:"}
                  </Text>
                  <View style={{ marginTop: 5 }}>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ justifyContent: "center" }}>
                        <CheckBox
                          value={
                            jawapanSesuaiKeadaan ==
                            "Saya hanya berasa kembung (merasa ada angin didalam perut, tapi perut tidak naik)"
                              ? true
                              : false
                          }
                          onValueChange={(value) => {
                            value
                              ? setJawapanSesuaiKeadaan(
                                  "Saya hanya berasa kembung (merasa ada angin didalam perut, tapi perut tidak naik)"
                                )
                              : null;
                          }}
                          disabled={
                            jawapanSesuaiKeadaan ==
                            "Saya hanya berasa kembung (merasa ada angin didalam perut, tapi perut tidak naik)"
                              ? true
                              : false
                          }
                          tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          style={{
                            transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                            paddingTop: 40,
                          }}
                        />
                      </View>
                      <Text style={styles.checkBoxText}>
                        {"Saya hanya berasa "}
                        <Text style={{ fontWeight: "bold" }}>
                          kembung
                          <Text style={{ fontWeight: "normal" }}>
                            {
                              " (merasa ada angin didalam perut, tapi perut tidak naik)"
                            }
                          </Text>
                        </Text>
                      </Text>
                      <Text></Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 5 }}>
                      <View style={{ justifyContent: "center" }}>
                        <CheckBox
                          value={
                            jawapanSesuaiKeadaan ==
                            "Saya hanya melihat peningkatan saiz perut, peningkatan ukur lilit perut, perlu melonggarkan tali pinggang."
                              ? true
                              : false
                          }
                          onValueChange={(value) => {
                            value
                              ? setJawapanSesuaiKeadaan(
                                  "Saya hanya melihat peningkatan saiz perut, peningkatan ukur lilit perut, perlu melonggarkan tali pinggang."
                                )
                              : null;
                          }}
                          disabled={
                            jawapanSesuaiKeadaan ==
                            "Saya hanya melihat peningkatan saiz perut, peningkatan ukur lilit perut, perlu melonggarkan tali pinggang."
                              ? true
                              : false
                          }
                          tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          style={{
                            transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                            paddingTop: 40,
                          }}
                        />
                      </View>
                      <Text style={styles.checkBoxText}>
                        {"Saya hanya melihat peningkatan "}
                        <Text style={{ fontWeight: "bold" }}>
                          saiz perut
                          <Text style={{ fontWeight: "normal" }}>
                            {
                              ", peningkatan ukur lilit perut, perlu melonggarkan tali pinggang."
                            }
                          </Text>
                        </Text>
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 5 }}>
                      <View style={{ justifyContent: "center" }}>
                        <CheckBox
                          value={
                            jawapanSesuaiKeadaan ==
                            "Saya mengalami kedua-dua gejala/simptom di atas, perasaan kembung (merasa ada angin didalam perut, tapi perut tidak naik), dan peningkatan saiz perut/lilitan/perlu melonggarkan tali pinggang."
                              ? true
                              : false
                          }
                          onValueChange={(value) => {
                            value
                              ? setJawapanSesuaiKeadaan(
                                  "Saya mengalami kedua-dua gejala/simptom di atas, perasaan kembung (merasa ada angin didalam perut, tapi perut tidak naik), dan peningkatan saiz perut/lilitan/perlu melonggarkan tali pinggang."
                                )
                              : null;
                          }}
                          disabled={
                            jawapanSesuaiKeadaan ==
                            "Saya mengalami kedua-dua gejala/simptom di atas, perasaan kembung (merasa ada angin didalam perut, tapi perut tidak naik), dan peningkatan saiz perut/lilitan/perlu melonggarkan tali pinggang."
                              ? true
                              : false
                          }
                          tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          style={{
                            transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                            paddingTop: 40,
                          }}
                        />
                      </View>
                      <Text style={styles.checkBoxText}>
                        {"Saya mengalami "}
                        <Text style={{ fontWeight: "bold" }}>
                          kedua-dua
                          <Text style={{ fontWeight: "normal" }}>
                            {
                              " gejala/simptom di atas, perasaan kembung (merasa ada angin didalam perut, tapi perut tidak naik), dan peningkatan saiz perut/lilitan/perlu melonggarkan tali pinggang."
                            }
                          </Text>
                        </Text>
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 5 }}>
                      <View style={{ justifyContent: "center" }}>
                        <CheckBox
                          value={
                            jawapanSesuaiKeadaan ==
                            "Saya tidak mendapat mana-mana satu yang di atas."
                              ? true
                              : false
                          }
                          onValueChange={(value) => {
                            value
                              ? setJawapanSesuaiKeadaan(
                                  "Saya tidak mendapat mana-mana satu yang di atas."
                                )
                              : null;
                          }}
                          disabled={
                            jawapanSesuaiKeadaan ==
                            "Saya tidak mendapat mana-mana satu yang di atas."
                              ? true
                              : false
                          }
                          tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          style={{
                            transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                            paddingTop: 40,
                          }}
                        />
                      </View>
                      <Text style={styles.checkBoxText}>
                        Saya tidak mendapat mana-mana satu yang di atas.
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 5 }}>
                      <View style={{ justifyContent: "center" }}>
                        <CheckBox
                          value={
                            jawapanSesuaiKeadaan ==
                            "Saya tidak faham apa yang ditanya."
                              ? true
                              : false
                          }
                          onValueChange={(value) => {
                            value
                              ? setJawapanSesuaiKeadaan(
                                  "Saya tidak faham apa yang ditanya."
                                )
                              : null;
                          }}
                          disabled={
                            jawapanSesuaiKeadaan ==
                            "Saya tidak faham apa yang ditanya."
                              ? true
                              : false
                          }
                          tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          style={{
                            transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                            paddingTop: 40,
                          }}
                        />
                      </View>
                      <Text style={styles.checkBoxText}>
                        Saya tidak faham apa yang ditanya.
                      </Text>
                    </View>
                  </View>
                </View>

                <Text style={[styles.smallTitle, { marginTop: 40 }]}>
                  Rome Criteria
                </Text>

                <View style={styles.questionContainer}>
                  <Text style={styles.question}>
                    {
                      "Dalam 3 bulan yang lalu, berapa kerapkah anda rasa kembung perut atau mendapati perut anda kelihatan luar biasa besar?"
                    }
                  </Text>
                  <View style={{ marginTop: 5 }}>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ justifyContent: "center" }}>
                        <CheckBox
                          value={kekerapan == "Tidak pernah" ? true : false}
                          onValueChange={(value) => {
                            value ? setKekerapan("Tidak pernah") : null;
                          }}
                          disabled={kekerapan == "Tidak pernah" ? true : false}
                          tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          style={{
                            transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                            paddingTop: 40,
                          }}
                        />
                      </View>
                      <Text style={styles.checkBoxText}>Tidak pernah</Text>
                      <Text></Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 5 }}>
                      <View style={{ justifyContent: "center" }}>
                        <CheckBox
                          value={
                            kekerapan == "Kurang daripada sehari dalam sebulan"
                              ? true
                              : false
                          }
                          onValueChange={(value) => {
                            value
                              ? setKekerapan(
                                  "Kurang daripada sehari dalam sebulan"
                                )
                              : null;
                          }}
                          disabled={
                            kekerapan == "Kurang daripada sehari dalam sebulan"
                              ? true
                              : false
                          }
                          tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          style={{
                            transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                            paddingTop: 40,
                          }}
                        />
                      </View>
                      <Text style={styles.checkBoxText}>
                        Kurang daripada sehari dalam sebulan
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 5 }}>
                      <View style={{ justifyContent: "center" }}>
                        <CheckBox
                          value={
                            kekerapan == "Sehari dalam sebulan" ? true : false
                          }
                          onValueChange={(value) => {
                            value ? setKekerapan("Sehari dalam sebulan") : null;
                          }}
                          disabled={
                            kekerapan == "Sehari dalam sebulan" ? true : false
                          }
                          tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          style={{
                            transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                            paddingTop: 40,
                          }}
                        />
                      </View>
                      <Text style={styles.checkBoxText}>
                        Sehari dalam sebulan
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 5 }}>
                      <View style={{ justifyContent: "center" }}>
                        <CheckBox
                          value={
                            kekerapan == "Dua hingga tiga hari dalam sebulan"
                              ? true
                              : false
                          }
                          onValueChange={(value) => {
                            value
                              ? setKekerapan(
                                  "Dua hingga tiga hari dalam sebulan"
                                )
                              : null;
                          }}
                          disabled={
                            kekerapan == "Dua hingga tiga hari dalam sebulan"
                              ? true
                              : false
                          }
                          tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          style={{
                            transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                            paddingTop: 40,
                          }}
                        />
                      </View>
                      <Text style={styles.checkBoxText}>
                        Dua hingga tiga hari dalam sebulan
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 5 }}>
                      <View style={{ justifyContent: "center" }}>
                        <CheckBox
                          value={
                            kekerapan == "Sekali dalam seminggu" ? true : false
                          }
                          onValueChange={(value) => {
                            value
                              ? setKekerapan("Sekali dalam seminggu")
                              : null;
                          }}
                          disabled={
                            kekerapan == "Sekali dalam seminggu" ? true : false
                          }
                          tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          style={{
                            transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                            paddingTop: 40,
                          }}
                        />
                      </View>
                      <Text style={styles.checkBoxText}>
                        Sekali dalam seminggu
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 5 }}>
                      <View style={{ justifyContent: "center" }}>
                        <CheckBox
                          value={
                            kekerapan == "Dua hingga tiga hari dalam seminggu "
                              ? true
                              : false
                          }
                          onValueChange={(value) => {
                            value
                              ? setKekerapan(
                                  "Dua hingga tiga hari dalam seminggu "
                                )
                              : null;
                          }}
                          disabled={
                            kekerapan == "Dua hingga tiga hari dalam seminggu "
                              ? true
                              : false
                          }
                          tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          style={{
                            transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                            paddingTop: 40,
                          }}
                        />
                      </View>
                      <Text style={styles.checkBoxText}>
                        Dua hingga tiga hari dalam seminggu
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 5 }}>
                      <View style={{ justifyContent: "center" }}>
                        <CheckBox
                          value={
                            kekerapan ==
                            "Kebanyakan hari (empat hingga enam hari dalam seminggu)"
                              ? true
                              : false
                          }
                          onValueChange={(value) => {
                            value
                              ? setKekerapan(
                                  "Kebanyakan hari (empat hingga enam hari dalam seminggu)"
                                )
                              : null;
                          }}
                          disabled={
                            kekerapan ==
                            "Kebanyakan hari (empat hingga enam hari dalam seminggu)"
                              ? true
                              : false
                          }
                          tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          style={{
                            transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                            paddingTop: 40,
                          }}
                        />
                      </View>
                      <Text style={styles.checkBoxText}>
                        Kebanyakan hari (empat hingga enam hari dalam seminggu)
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 5 }}>
                      <View style={{ justifyContent: "center" }}>
                        <CheckBox
                          value={kekerapan == "Setiap hari" ? true : false}
                          onValueChange={(value) => {
                            value ? setKekerapan("Setiap hari") : null;
                          }}
                          disabled={kekerapan == "Setiap hari" ? true : false}
                          tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          style={{
                            transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                            paddingTop: 40,
                          }}
                        />
                      </View>
                      <Text style={styles.checkBoxText}>Setiap hari</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 5 }}>
                      <View style={{ justifyContent: "center" }}>
                        <CheckBox
                          value={
                            kekerapan ==
                            "Beberapa kali sehari atau sepanjang masa"
                              ? true
                              : false
                          }
                          onValueChange={(value) => {
                            value
                              ? setKekerapan(
                                  "Beberapa kali sehari atau sepanjang masa"
                                )
                              : null;
                          }}
                          disabled={
                            kekerapan ==
                            "Beberapa kali sehari atau sepanjang masa"
                              ? true
                              : false
                          }
                          tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          style={{
                            transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                            paddingTop: 40,
                          }}
                        />
                      </View>
                      <Text style={styles.checkBoxText}>
                        Beberapa kali sehari atau sepanjang masa
                      </Text>
                    </View>
                  </View>
                </View>

                <View style={styles.questionContainer}>
                  <Text style={styles.question}>
                    Adakah sudah 6 bulan atau lebih lama sejak anda mula
                    mengalami rasa kembung perut atau perut anda kelihatan luar
                    biasa besar?
                  </Text>
                  <View style={{ marginTop: 5 }}>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ justifyContent: "center" }}>
                        <CheckBox
                          value={lebih6Bulan ? false : true}
                          onValueChange={(value) => {
                            value ? setLebih6Bulan(false) : null;
                          }}
                          disabled={lebih6Bulan ? false : true}
                          tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          style={{
                            transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                            paddingTop: 40,
                          }}
                        />
                      </View>
                      <Text style={styles.checkBoxText}>Tidak</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ justifyContent: "center" }}>
                        <CheckBox
                          value={lebih6Bulan ? true : false}
                          onValueChange={(value) => {
                            value ? setLebih6Bulan(true) : null;
                          }}
                          disabled={lebih6Bulan ? true : false}
                          tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          style={{
                            transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                            paddingTop: 40,
                          }}
                        />
                      </View>
                      <Text style={styles.checkBoxText}>Ya</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.questionContainer}>
                  <Text style={styles.question}>
                    Adakah sudah 6 bulan atau lebih lama sejak anda mula
                    mengalami rasa kembung perut atau perut anda kelihatan luar
                    biasa besar?
                  </Text>
                  <View style={{ marginTop: 5 }}>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ justifyContent: "center" }}>
                        <CheckBox
                          value={masalah1}
                          onValueChange={setMasalah1}
                          tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          style={{
                            transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                            paddingTop: 40,
                          }}
                        />
                      </View>
                      <Text style={styles.checkBoxText}>
                        {
                          "Sindrom gangguan fungsi usus (Irritable bowel syndrome, IBS)"
                        }
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ justifyContent: "center" }}>
                        <CheckBox
                          value={masalah2}
                          onValueChange={setMasalah2}
                          tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          style={{
                            transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                            paddingTop: 40,
                          }}
                        />
                      </View>
                      <Text style={styles.checkBoxText}>
                        {"Refluks asid (GERD)"}
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ justifyContent: "center" }}>
                        <CheckBox
                          value={masalah3}
                          onValueChange={setMasalah3}
                          tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          style={{
                            transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                            paddingTop: 40,
                          }}
                        />
                      </View>
                      <Text style={styles.checkBoxText}>
                        {"Dispepsia fungsi"}
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ justifyContent: "center" }}>
                        <CheckBox
                          value={masalah4}
                          onValueChange={setMasalah4}
                          tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          style={{
                            transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                            paddingTop: 40,
                          }}
                        />
                      </View>
                      <Text style={styles.checkBoxText}>
                        {"Sembelit kronik"}
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ justifyContent: "center" }}>
                        <CheckBox
                          value={masalah5}
                          onValueChange={setMasalah5}
                          tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          style={{
                            transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                            paddingTop: 40,
                          }}
                        />
                      </View>
                      <Text style={styles.checkBoxText}>
                        {"Cirit-birit kronik"}
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ justifyContent: "center" }}>
                        <CheckBox
                          value={masalah6}
                          onValueChange={setMasalah6}
                          tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          style={{
                            transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                            paddingTop: 40,
                          }}
                        />
                      </View>
                      <Text style={styles.checkBoxText}>
                        {"Kencing manis (Diabetes)"}
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ justifyContent: "center" }}>
                        <CheckBox
                          value={masalah7}
                          onValueChange={setMasalah7}
                          tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          style={{
                            transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                            paddingTop: 40,
                          }}
                        />
                      </View>
                      <Text style={styles.checkBoxText}>
                        {"Penyakit seliak"}
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ justifyContent: "center" }}>
                        <CheckBox
                          value={masalah8}
                          onValueChange={setMasalah8}
                          tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          style={{
                            transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                            paddingTop: 40,
                          }}
                        />
                      </View>
                      <Text style={styles.checkBoxText}>{"Ulser peptik"}</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ justifyContent: "center" }}>
                        <CheckBox
                          value={masalah9}
                          onValueChange={setMasalah9}
                          tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          style={{
                            transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                            paddingTop: 40,
                          }}
                        />
                      </View>
                      <Text style={styles.checkBoxText}>
                        {"Divertikulitis"}
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ justifyContent: "center" }}>
                        <CheckBox
                          value={masalah10}
                          onValueChange={setMasalah10}
                          tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          style={{
                            transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                            paddingTop: 40,
                          }}
                        />
                      </View>
                      <Text style={styles.checkBoxText}>
                        {
                          "Penyakit radang usus (penyakit Crohn atau kolitis berulser)"
                        }
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ justifyContent: "center" }}>
                        <CheckBox
                          value={masalah11}
                          onValueChange={setMasalah11}
                          tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          style={{
                            transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                            paddingTop: 40,
                          }}
                        />
                      </View>
                      <Text style={styles.checkBoxText}>
                        {
                          "Kanser di mana-mana bahagian dalam saluran gastrousus (seperti kanser perut atau kanser usus)"
                        }
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ justifyContent: "center" }}>
                        <CheckBox
                          value={masalah12}
                          onValueChange={setMasalah12}
                          tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          style={{
                            transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                            paddingTop: 40,
                          }}
                        />
                      </View>
                      <Text style={styles.checkBoxText}>{"Fibromialgia"}</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ justifyContent: "center" }}>
                        <CheckBox
                          value={masalah13}
                          onValueChange={setMasalah13}
                          tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          style={{
                            transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                            paddingTop: 40,
                          }}
                        />
                      </View>
                      <Text style={styles.checkBoxText}>{"Tiada"}</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.questionContainer}>
                  <Text style={styles.question}>
                    {
                      "Dalam tempoh 3 bulan yang lalu, nyatakan kekerapan najis anda berdasarkan gambar di atas? (Peratusan daripada semua air besar yang dibuang)"
                    }
                  </Text>
                  <View style={{ marginTop: 5 }}>
                    <View style={{ alignItems: "center", marginTop: 20 }}>
                      <Image
                        source={require("../assets/shit1.png")}
                        style={{ height: 50, width: 210 }}
                      />
                    </View>
                    <Text style={{ fontSize: 20, color: "#FFFFFF" }}>
                      Seperate hard lumps, like nuts (hard to pass):
                    </Text>
                    <Input
                      placeholderTextColor="#FFFFFF"
                      selectionColor="#FFFFFF"
                      keyboardType="number-pad"
                      inputStyle={{ color: "#FFFFFF" }}
                      inputContainerStyle={{ borderBottomColor: "#FFFFFF" }}
                      style={{ marginTop: 5 }}
                      value={najis1}
                      onChangeText={(text) => setNajis1(text)}
                    />

                    <View style={{ alignItems: "center", marginTop: 10 }}>
                      <Image
                        source={require("../assets/shit2.png")}
                        style={{ height: 50, width: 187 }}
                      />
                    </View>
                    <Text style={{ fontSize: 20, color: "#FFFFFF" }}>
                      Sausage-shaped but lumpy:
                    </Text>
                    <Input
                      placeholderTextColor="#FFFFFF"
                      selectionColor="#FFFFFF"
                      keyboardType="number-pad"
                      inputStyle={{ color: "#FFFFFF" }}
                      inputContainerStyle={{ borderBottomColor: "#FFFFFF" }}
                      style={{ marginTop: 5 }}
                      value={najis2}
                      onChangeText={(text) => setNajis2(text)}
                    />
                    <View style={{ alignItems: "center", marginTop: 10 }}>
                      <Image
                        source={require("../assets/shit3.png")}
                        style={{ height: 50, width: 167 }}
                      />
                    </View>
                    <Text style={{ fontSize: 20, color: "#FFFFFF" }}>
                      Like a sausage but with cracks on the surface:
                    </Text>
                    <Input
                      placeholderTextColor="#FFFFFF"
                      selectionColor="#FFFFFF"
                      keyboardType="number-pad"
                      inputStyle={{ color: "#FFFFFF" }}
                      inputContainerStyle={{ borderBottomColor: "#FFFFFF" }}
                      style={{ marginTop: 5 }}
                      value={najis3}
                      onChangeText={(text) => setNajis3(text)}
                    />
                    <View style={{ alignItems: "center", marginTop: 10 }}>
                      <Image
                        source={require("../assets/shit4.png")}
                        style={{ height: 50, width: 164, marginLeft: 5 }}
                      />
                    </View>
                    <Text style={{ fontSize: 20, color: "#FFFFFF" }}>
                      Like a sausage or snake, smooth and soft:
                    </Text>
                    <Input
                      placeholderTextColor="#FFFFFF"
                      selectionColor="#FFFFFF"
                      keyboardType="number-pad"
                      inputStyle={{ color: "#FFFFFF" }}
                      inputContainerStyle={{ borderBottomColor: "#FFFFFF" }}
                      style={{ marginTop: 5 }}
                      value={najis4}
                      onChangeText={(text) => setNajis4(text)}
                    />
                    <View style={{ alignItems: "center", marginTop: 10 }}>
                      <Image
                        source={require("../assets/shit5.png")}
                        style={{ height: 50, width: 164, marginLeft: 5 }}
                      />
                    </View>
                    <Text style={{ fontSize: 20, color: "#FFFFFF" }}>
                      Soft blobs with clear-cut edges:
                    </Text>
                    <Input
                      placeholderTextColor="#FFFFFF"
                      selectionColor="#FFFFFF"
                      keyboardType="number-pad"
                      inputStyle={{ color: "#FFFFFF" }}
                      inputContainerStyle={{ borderBottomColor: "#FFFFFF" }}
                      style={{ marginTop: 5 }}
                      value={najis5}
                      onChangeText={(text) => setNajis5(text)}
                    />
                    <View style={{ alignItems: "center", marginTop: 10 }}>
                      <Image
                        source={require("../assets/shit6.png")}
                        style={{ height: 50, width: 180 }}
                      />
                    </View>
                    <Text style={{ fontSize: 20, color: "#FFFFFF" }}>
                      Fluffy pieces with ragged edges, a mushy stool:
                    </Text>
                    <Input
                      placeholderTextColor="#FFFFFF"
                      selectionColor="#FFFFFF"
                      keyboardType="number-pad"
                      inputStyle={{ color: "#FFFFFF" }}
                      inputContainerStyle={{ borderBottomColor: "#FFFFFF" }}
                      style={{ marginTop: 5 }}
                      value={najis6}
                      onChangeText={(text) => setNajis6(text)}
                    />
                    <View style={{ alignItems: "center", marginTop: 10 }}>
                      <Image
                        source={require("../assets/shit7.png")}
                        style={{ height: 50, width: 193 }}
                      />
                    </View>
                    <Text style={{ fontSize: 20, color: "#FFFFFF" }}>
                      Watery, no solid pieces, entirely liquid:
                    </Text>
                    <Input
                      placeholderTextColor="#FFFFFF"
                      selectionColor="#FFFFFF"
                      keyboardType="number-pad"
                      inputStyle={{ color: "#FFFFFF" }}
                      inputContainerStyle={{ borderBottomColor: "#FFFFFF" }}
                      style={{ marginTop: 5 }}
                      value={najis7}
                      onChangeText={(text) => setNajis7(text)}
                    />
                  </View>
                </View>

                <View style={styles.questionContainer}>
                  <Text style={styles.question}>
                    Tandakan gejala yang pernah anda mengalami dalam tempoh 3
                    bulan yang lalu.
                  </Text>
                  <View style={{ marginTop: 5 }}>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ justifyContent: "center" }}>
                        <CheckBox
                          value={pedih}
                          onValueChange={setPedih}
                          tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          style={{
                            transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                            paddingTop: 40,
                          }}
                        />
                      </View>
                      <Text style={styles.checkBoxText}>{"Pedih"}</Text>
                    </View>
                    <View style={{ alignItems: "center" }}>
                      <Image
                        source={require("../assets/gejala11.png")}
                        style={{ width: 198, height: 250 }}
                      />
                    </View>
                    {pedih ? (
                      <Input
                        placeholder="Kekerapan (hari) dalam 1 minggu"
                        placeholderTextColor="#FFFFFF"
                        selectionColor="#FFFFFF"
                        inputStyle={{ color: "#FFFFFF" }}
                        inputContainerStyle={{ borderBottomColor: "#FFFFFF" }}
                        style={{ marginTop: 10 }}
                        value={kekerapanPedih}
                        onChangeText={(text) => setKekerapanPedih(text)}
                      />
                    ) : null}
                    <View style={{ flexDirection: "row", marginTop: 20 }}>
                      <View style={{ justifyContent: "center" }}>
                        <CheckBox
                          value={cepatKenyang}
                          onValueChange={setCepatKenyang}
                          tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          style={{
                            transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                            paddingTop: 40,
                          }}
                        />
                      </View>
                      <Text style={styles.checkBoxText}>{"Cepat Kenyang"}</Text>
                    </View>
                    <View style={{ alignItems: "center" }}>
                      <Image
                        source={require("../assets/gejala12.png")}
                        style={{ width: 199, height: 250 }}
                      />
                    </View>
                    {cepatKenyang ? (
                      <Input
                        placeholder="Kekerapan (hari) dalam 1 minggu"
                        placeholderTextColor="#FFFFFF"
                        selectionColor="#FFFFFF"
                        inputStyle={{ color: "#FFFFFF" }}
                        inputContainerStyle={{ borderBottomColor: "#FFFFFF" }}
                        style={{ marginTop: 10 }}
                        value={kekerapanCepatKenyang}
                        onChangeText={(text) => setKekerapanCepatKenyang(text)}
                      />
                    ) : null}
                    <View style={{ flexDirection: "row", marginTop: 20 }}>
                      <View style={{ justifyContent: "center" }}>
                        <CheckBox
                          value={kenyangLepasMakan}
                          onValueChange={setKenyangLepasMakan}
                          tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          style={{
                            transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                            paddingTop: 40,
                          }}
                        />
                      </View>
                      <Text style={styles.checkBoxText}>
                        {"Kenyang Lepas Makan"}
                      </Text>
                    </View>
                    <View style={{ alignItems: "center" }}>
                      <Image
                        source={require("../assets/gejala13.png")}
                        style={{ width: 211, height: 250 }}
                      />
                    </View>
                    {kenyangLepasMakan ? (
                      <Input
                        placeholder="Kekerapan (hari) dalam 1 minggu"
                        placeholderTextColor="#FFFFFF"
                        selectionColor="#FFFFFF"
                        inputStyle={{ color: "#FFFFFF" }}
                        inputContainerStyle={{ borderBottomColor: "#FFFFFF" }}
                        style={{ marginTop: 10 }}
                        value={kekerapanKenyangLepasMakan}
                        onChangeText={(text) =>
                          setKekerapanKenyangLepasMakan(text)
                        }
                      />
                    ) : null}
                    <View style={{ flexDirection: "row", marginTop: 20 }}>
                      <View style={{ justifyContent: "center" }}>
                        <CheckBox
                          value={sakitUluHati}
                          onValueChange={setSakitUluHati}
                          tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          style={{
                            transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                            paddingTop: 40,
                          }}
                        />
                      </View>
                      <Text style={styles.checkBoxText}>
                        {"Sakit Ulu Hati"}
                      </Text>
                    </View>
                    <View style={{ alignItems: "center" }}>
                      <Image
                        source={require("../assets/gejala14.png")}
                        style={{ width: 195, height: 250 }}
                      />
                    </View>
                    {sakitUluHati ? (
                      <Input
                        placeholder="Kekerapan (hari) dalam 1 minggu"
                        placeholderTextColor="#FFFFFF"
                        selectionColor="#FFFFFF"
                        inputStyle={{ color: "#FFFFFF" }}
                        inputContainerStyle={{ borderBottomColor: "#FFFFFF" }}
                        style={{ marginTop: 10 }}
                        value={kekerapanSakitUluHati}
                        onChangeText={(text) => setKekerapanSakitUluHati(text)}
                      />
                    ) : null}
                    <View style={{ flexDirection: "row", marginTop: 20 }}>
                      <View style={{ justifyContent: "center" }}>
                        <CheckBox
                          value={pedihUluHati}
                          onValueChange={setPedihUluHati}
                          tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          style={{
                            transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                            paddingTop: 40,
                          }}
                        />
                      </View>
                      <Text style={styles.checkBoxText}>
                        {"Pedih Ulu Hati"}
                      </Text>
                    </View>
                    <View style={{ alignItems: "center" }}>
                      <Image
                        source={require("../assets/gejala15.png")}
                        style={{ width: 210, height: 250 }}
                      />
                    </View>
                    {pedihUluHati ? (
                      <Input
                        placeholder="Kekerapan (hari) dalam 1 minggu"
                        placeholderTextColor="#FFFFFF"
                        selectionColor="#FFFFFF"
                        inputStyle={{ color: "#FFFFFF" }}
                        inputContainerStyle={{ borderBottomColor: "#FFFFFF" }}
                        style={{ marginTop: 10 }}
                        value={kekerapanPedihUluHati}
                        onChangeText={(text) => setKekerapanPedihUluHati(text)}
                      />
                    ) : null}
                    <View style={{ flexDirection: "row", marginTop: 20 }}>
                      <View style={{ justifyContent: "center" }}>
                        <CheckBox
                          value={perutKembung}
                          onValueChange={setPerutKembung}
                          tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          style={{
                            transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                            paddingTop: 40,
                          }}
                        />
                      </View>
                      <Text style={styles.checkBoxText}>{"Perut Kembung"}</Text>
                    </View>
                    <View style={{ alignItems: "center" }}>
                      <Image
                        source={require("../assets/gejala16.png")}
                        style={{ width: 203, height: 250 }}
                      />
                    </View>
                    {perutKembung ? (
                      <Input
                        placeholder="Kekerapan (hari) dalam 1 minggu"
                        placeholderTextColor="#FFFFFF"
                        selectionColor="#FFFFFF"
                        inputStyle={{ color: "#FFFFFF" }}
                        inputContainerStyle={{ borderBottomColor: "#FFFFFF" }}
                        style={{ marginTop: 10 }}
                        value={kekerapanPerutKembung}
                        onChangeText={(text) => setKekerapanPerutKembung(text)}
                      />
                    ) : null}
                    <View style={{ flexDirection: "row", marginTop: 20 }}>
                      <View style={{ justifyContent: "center" }}>
                        <CheckBox
                          value={loya}
                          onValueChange={setLoya}
                          tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          style={{
                            transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                            paddingTop: 40,
                          }}
                        />
                      </View>
                      <Text style={styles.checkBoxText}>{"Loya"}</Text>
                    </View>
                    <View style={{ alignItems: "center" }}>
                      <Image
                        source={require("../assets/gejala17.png")}
                        style={{ width: 204, height: 250 }}
                      />
                    </View>
                    {loya ? (
                      <Input
                        placeholder="Kekerapan (hari) dalam 1 minggu"
                        placeholderTextColor="#FFFFFF"
                        selectionColor="#FFFFFF"
                        inputStyle={{ color: "#FFFFFF" }}
                        inputContainerStyle={{ borderBottomColor: "#FFFFFF" }}
                        style={{ marginTop: 10 }}
                        value={kekerapanLoya}
                        onChangeText={(text) => setKekerapanLoya(text)}
                      />
                    ) : null}
                    <View style={{ flexDirection: "row", marginTop: 20 }}>
                      <View style={{ justifyContent: "center" }}>
                        <CheckBox
                          value={muntah}
                          onValueChange={setMuntah}
                          tintColor={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          tintColors={{ true: "#FFFFFF", false: "#FFFFFF" }}
                          style={{
                            transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                            paddingTop: 40,
                          }}
                        />
                      </View>
                      <Text style={styles.checkBoxText}>{"Muntah"}</Text>
                    </View>
                    <View style={{ alignItems: "center" }}>
                      <Image
                        source={require("../assets/gejala18.png")}
                        style={{ width: 204, height: 250 }}
                      />
                    </View>
                    {muntah ? (
                      <Input
                        placeholder="Kekerapan (hari) dalam 1 minggu"
                        placeholderTextColor="#FFFFFF"
                        selectionColor="#FFFFFF"
                        inputStyle={{ color: "#FFFFFF" }}
                        inputContainerStyle={{ borderBottomColor: "#FFFFFF" }}
                        style={{ marginTop: 10 }}
                        value={kekerapanMuntah}
                        onChangeText={(text) => setKekerapanMuntah(text)}
                      />
                    ) : null}
                  </View>
                </View>

                <View style={{ alignItems: "center", marginTop: 30 }}>
                  <TouchableOpacity
                    style={[styles.buttonStyle, { backgroundColor: "#34433C" }]}
                    onPress={() => navigation.navigate("thirdQuestionPage")}
                  >
                    <Text style={[styles.buttonText, { color: "white" }]}>
                      Hantar
                    </Text>
                  </TouchableOpacity>
                </View>
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
  smallTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 15,
    color: "#383838",
  },
  horizontalView: {
    flexDirection: "row",
    marginRight: 40,
  },
  questionContainer: {
    marginTop: 5,
  },
  question: {
    fontSize: 20,
    marginTop: 10,
    color: "#FFFFFF",
  },
  pickerContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginLeft: 5,
  },
  pickerContainerLong: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginTop: 5,
  },
  pickerStyle: {
    width: 200,
    height: 50,
  },
  pickerStyleLong: {
    width: 272,
    height: 50,
  },
  checkBoxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  checkBoxText: {
    fontSize: 20,
    color: "#FFFFFF",
    marginTop: 6,
    marginLeft: 10,
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

export default secondQuestionPage;
