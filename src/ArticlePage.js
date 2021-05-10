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
import Unorderedlist from "react-native-unordered-list";

const articlePage = ({ navigation, route }) => {
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
                marginTop: 20,
                marginLeft: 40,
                marginRight: 40,
                marginBottom: 30,
              }}
            >
              {route.params["Session"] == 1 ? (
                <View>
                  <Text style={styles.bigTitle}>APAKAH ITU PERuT®?</Text>

                  <Text style={[styles.text, { marginTop: 20 }]}>
                    {"PERuT® diilhamkan oleh para penyelidik "}
                    <Text style={{ fontWeight: "bold" }}>
                      MyGutBrain Centre USM
                      <Text style={{ fontWeight: "normal" }}>
                        {" yang diketuai oleh Prof. Dr. Lee Yeong Yeh."}
                      </Text>
                    </Text>
                  </Text>

                  <Text style={[styles.text, { marginTop: 20 }]}>
                    Singkatan perkataan:
                  </Text>

                  <Text
                    style={[styles.text, { fontWeight: "bold", marginTop: 5 }]}
                  >
                    P<Text style={{ fontWeight: "normal" }}>ractical</Text>
                  </Text>

                  <Text
                    style={[styles.text, { fontWeight: "bold", marginTop: 5 }]}
                  >
                    E<Text style={{ fontWeight: "normal" }}>ducational</Text>
                  </Text>

                  <Text
                    style={[styles.text, { fontWeight: "bold", marginTop: 5 }]}
                  >
                    R
                    <Text style={{ fontWeight: "normal" }}>
                      ecuperative Apps
                    </Text>
                  </Text>

                  <Text
                    style={[styles.text, { fontWeight: "bold", marginTop: 5 }]}
                  >
                    U<Text style={{ fontWeight: "normal" }}>tilised for</Text>
                  </Text>

                  <Text
                    style={[styles.text, { fontWeight: "bold", marginTop: 5 }]}
                  >
                    T<Text style={{ fontWeight: "normal" }}>herapy</Text>
                  </Text>

                  <View style={styles.viewContainer}>
                    <Text style={styles.text}>
                      Aplikasi ini bertujuan untuk
                    </Text>
                    <Unorderedlist
                      bulletUnicode={0x2022}
                      color="#FFFFFF"
                      style={{ fontSize: 20, fontWeight: "bold", marginTop: 5 }}
                    >
                      <Text style={[styles.text, { marginTop: 5 }]}>
                        Mengurangkan gejala perut kembung melalui rawatan imejan
                        dan rawatan relaksasi otot progresif
                      </Text>
                    </Unorderedlist>

                    <Unorderedlist
                      bulletUnicode={0x2022}
                      color="#FFFFFF"
                      style={{ fontSize: 20, fontWeight: "bold", marginTop: 5 }}
                    >
                      <Text style={[styles.text, { marginTop: 5 }]}>
                        Memberi maklumat tentang gejala perut kembung dan
                        rawatan berdasarkan kajian yang terkini
                      </Text>
                    </Unorderedlist>

                    <Unorderedlist
                      bulletUnicode={0x2022}
                      color="#FFFFFF"
                      style={{ fontSize: 20, fontWeight: "bold", marginTop: 5 }}
                    >
                      <Text style={[styles.text, { marginTop: 5 }]}>
                        Merekod tahap gejala pengguna dari semasa ke semasa
                      </Text>
                    </Unorderedlist>
                  </View>

                  <Text style={[styles.text, { marginTop: 20 }]}>
                    Para pengguna juga boleh berinteraksi dengan penyelidik
                    melalui aplikasi ini!
                  </Text>
                </View>
              ) : null}

              {route.params["Session"] == 2 ? (
                <View>
                  <Text style={styles.bigTitle}>KEMBUNG PERUT</Text>
                  <Text style={[styles.text, { marginTop: 20 }]}>
                    Kembung perut boleh diertikan sebagai perasaan tidak selesa
                    pada perut kerana angin, sama ada dengan peningkatan saiz
                    perut atau tidak, yang mungkin datang bersama gejala lain
                    seperti:
                  </Text>
                  <Unorderedlist
                    bulletUnicode={0x2022}
                    color="#FFFFFF"
                    style={{ fontSize: 20, fontWeight: "bold", marginTop: 5 }}
                  >
                    <Text
                      style={[
                        styles.text,
                        { marginTop: 5, fontWeight: "bold" },
                      ]}
                    >
                      Belahak
                    </Text>
                  </Unorderedlist>
                  <Unorderedlist
                    bulletUnicode={0x2022}
                    color="#FFFFFF"
                    style={{ fontSize: 20, fontWeight: "bold", marginTop: 5 }}
                  >
                    <Text
                      style={[
                        styles.text,
                        { marginTop: 5, fontWeight: "bold" },
                      ]}
                    >
                      Sendawa
                    </Text>
                  </Unorderedlist>
                  <Unorderedlist
                    bulletUnicode={0x2022}
                    color="#FFFFFF"
                    style={{ fontSize: 20, fontWeight: "bold", marginTop: 5 }}
                  >
                    <Text
                      style={[
                        styles.text,
                        { marginTop: 5, fontWeight: "bold" },
                      ]}
                    >
                      Kentut
                    </Text>
                  </Unorderedlist>
                  <Unorderedlist
                    bulletUnicode={0x2022}
                    color="#FFFFFF"
                    style={{ fontSize: 20, fontWeight: "bold", marginTop: 5 }}
                  >
                    <Text
                      style={[
                        styles.text,
                        { marginTop: 5, fontWeight: "bold" },
                      ]}
                    >
                      Loya
                    </Text>
                  </Unorderedlist>
                  <Unorderedlist
                    bulletUnicode={0x2022}
                    color="#FFFFFF"
                    style={{ fontSize: 20, fontWeight: "bold", marginTop: 5 }}
                  >
                    <Text
                      style={[
                        styles.text,
                        { marginTop: 5, fontWeight: "bold" },
                      ]}
                    >
                      Pening
                    </Text>
                  </Unorderedlist>
                  <Unorderedlist
                    bulletUnicode={0x2022}
                    color="#FFFFFF"
                    style={{ fontSize: 20, fontWeight: "bold", marginTop: 5 }}
                  >
                    <Text
                      style={[
                        styles.text,
                        { marginTop: 5, fontWeight: "bold" },
                      ]}
                    >
                      Tekanan
                    </Text>
                  </Unorderedlist>

                  <Text style={[styles.text, { marginTop: 15 }]}>
                    Nama lain yang biasa digunakan adalah angin, senak, sengkak
                    dan kembung.
                  </Text>

                  <Text style={[styles.text, { marginTop: 20 }]}>
                    Perasaan kembung dalam perut merupakan masalah yang lazim
                    dialami.
                  </Text>

                  <View style={{ alignItems: "center" }}>
                    <Image
                      source={require("../assets/article21.png")}
                      style={{
                        width: 200,
                        height: 130,
                        marginTop: 10,
                        marginBottom: 10,
                      }}
                    />
                  </View>

                  <Text style={styles.text}>
                    Kebanyakan individu menganggap bahawa perasaan kembung perut
                    berpunca daripada pemakanan dan angin/gas di dalam perut.
                    Sebenarnya terdapat pelbagai masalah kesihatan lain seperti
                    Sindrom Renga Usus (Irritable Bowel Syndrome), pedih ulu
                    hati (acid reflux) dan sembelit yang sering dikaitkan dengan
                    gejala ini.
                  </Text>

                  <Text style={[styles.bigTitle, { marginTop: 30 }]}>
                    KEMBUNG BERFUNGSI
                  </Text>

                  <Text style={[styles.text, { marginTop: 20 }]}>
                    Jika punca tidak ditemui, maka kembung biasanya dianggap
                    sebagai "berfungsi“ (functional) .
                  </Text>

                  <View style={styles.viewContainer}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        textAlign: "center",
                        color: "#FFFFFF",
                      }}
                    >
                      Menurut ROME IV
                    </Text>
                    <Text style={[styles.text, { marginTop: 5 }]}>
                      Perut kembung berfungsi (functional abdominal bloating)
                      merupakan perasaan kembung atau pembesaran perut yang
                      berlaku sekurang-kurangnya satu kali atau lebih dalam
                      seminggu.
                    </Text>
                  </View>

                  <View style={{ marginTop: 20 }}>
                    <Unorderedlist
                      bulletUnicode={0x2022}
                      color="#FFFFFF"
                      style={{ fontSize: 20, fontWeight: "bold", marginTop: 5 }}
                    >
                      <Text style={[styles.text, { marginTop: 5 }]}>
                        Kembung berfungsi biasanya tidak berlaku sewaktu anda
                        bangun dari tidur dan biasanya bertambah buruk sepanjang
                        hari.
                      </Text>
                    </Unorderedlist>
                    <Unorderedlist
                      bulletUnicode={0x2022}
                      color="#FFFFFF"
                      style={{ fontSize: 20, fontWeight: "bold", marginTop: 5 }}
                    >
                      <Text style={[styles.text, { marginTop: 5 }]}>
                        Ia mungkin berselang-sebentar dan berkaitan dengan
                        pemakanan tertentu.
                      </Text>
                    </Unorderedlist>
                  </View>
                </View>
              ) : null}

              {route.params["Session"] == 3 ? (
                <View>
                  <Text style={styles.bigTitle}>PUNCA-PUNCA PERUT KEMBUNG</Text>

                  <View style={styles.viewContainer}>
                    <Text
                      style={{
                        fontSize: 25,
                        fontWeight: "bold",
                        textAlign: "center",
                        color: "#FFFFFF",
                      }}
                    >
                      Pemakanan
                    </Text>
                    <Text style={[styles.text, { marginTop: 5 }]}>
                      Pengambilan karbohidrat ringkas dan kecil seperti pemanis
                      tambahan, sirap kordial, minuman berkarbonat, jus kotak,
                      kopi/teh dalam tin dan bijirin sarapan.
                    </Text>
                    <Text style={[styles.text, { marginTop: 10 }]}>
                      Jenis karbohidrat ringkas ini akan diserap dengan cepat di
                      dalam usus kecil.
                    </Text>
                  </View>

                  <View style={styles.viewContainer}>
                    <Text
                      style={{
                        fontSize: 25,
                        fontWeight: "bold",
                        textAlign: "center",
                        color: "#FFFFFF",
                      }}
                    >
                      Bakteria Usus
                    </Text>
                    <Text style={[styles.text, { marginTop: 5 }]}>
                      Mikroflora usus (atau mikrobiome usus) merujuk kepada
                      bakteria yang menghuni saluran usus. Kajian telah
                      membuktikan kepentingan bakteria ini terhadap fungsi usus.
                      Andai kata terdapat gangguan kecil dalam mikroflora usus,
                      ia akan memberi perubahan yang ketara dalam usus kita.
                    </Text>
                  </View>

                  <View style={styles.viewContainer}>
                    <Text
                      style={{
                        fontSize: 25,
                        fontWeight: "bold",
                        textAlign: "center",
                        color: "#FFFFFF",
                      }}
                    >
                      Gas dalam Usus
                    </Text>
                    <Text style={[styles.text, { marginTop: 5 }]}>
                      Setiap orang memiliki 100-200cc gas dalam usus, dan
                      isipadunya akan meningkat selepas anda makan.
                    </Text>
                    <Text style={[styles.text, { marginTop: 10 }]}>
                      Gas ini terhasil oleh bakteria sewaktu makanan berada di
                      dalam usus, yang kemudiannya diserap dan dikeluarkan
                      sebagai kentut.
                    </Text>
                    <Text style={[styles.text, { marginTop: 10 }]}>
                      Perut akan membesar dan anda akan berasa kembung apabila
                      terdapat:
                    </Text>
                    <Unorderedlist
                      bulletUnicode={0x2022}
                      color="#FFFFFF"
                      style={{ fontSize: 20, fontWeight: "bold", marginTop: 5 }}
                    >
                      <Text style={[styles.text, { marginTop: 5 }]}>
                        Penghasilan gas berlebihan
                      </Text>
                    </Unorderedlist>
                    <Unorderedlist
                      bulletUnicode={0x2022}
                      color="#FFFFFF"
                      style={{ fontSize: 20, fontWeight: "bold", marginTop: 5 }}
                    >
                      <Text style={[styles.text, { marginTop: 5 }]}>
                        Masalah pemindahan dan pengeluaran gas
                      </Text>
                    </Unorderedlist>
                  </View>

                  <View style={styles.viewContainer}>
                    <Text
                      style={{
                        fontSize: 25,
                        fontWeight: "bold",
                        textAlign: "center",
                        color: "#FFFFFF",
                      }}
                    >
                      Pengesanan Deria
                    </Text>
                    <Text style={[styles.text, { marginTop: 5 }]}>
                      Pesakit kembung adalah sensitif atau peka terhadap
                      pembesaran perut, bahkan lebih mudah berasa sakit apabila
                      perut membesar.
                    </Text>
                  </View>

                  <View style={styles.viewContainer}>
                    <Text
                      style={{
                        fontSize: 25,
                        fontWeight: "bold",
                        textAlign: "center",
                        color: "#FFFFFF",
                      }}
                    >
                      Otot-otot Perut
                    </Text>
                    <Text style={[styles.text, { marginTop: 5 }]}>
                      Kajian menunjukkan bahawa otot-otot perut akan relaks
                      sewaktu peningkatan gas sehingga menyebabkan perasaan
                      kembung.
                    </Text>
                  </View>

                  <View style={styles.viewContainer}>
                    <Text
                      style={{
                        fontSize: 25,
                        fontWeight: "bold",
                        textAlign: "center",
                        color: "#FFFFFF",
                      }}
                    >
                      Aspek psikologi
                    </Text>
                    <Text style={[styles.text, { marginTop: 5 }]}>
                      Tekanan psikologi yang tinggi boleh mewujudkan gejala
                      stress, cemas dan murung.
                    </Text>
                  </View>

                  <View style={styles.viewContainer}>
                    <Text
                      style={{
                        fontSize: 25,
                        fontWeight: "bold",
                        textAlign: "center",
                        color: "#FFFFFF",
                      }}
                    >
                      Makan Terlalu Cepat
                    </Text>
                    <Text style={[styles.text, { marginTop: 5 }]}>
                      Perut mengambil masa 20 minit untuk menghantar isyarat
                      ‘kenyang’ ke otak. Jika anda makan terlalu cepat, anda
                      tidak sempat untuk berasa kenyang dan akan terlebih makan
                      sehingga terasa kembung.
                    </Text>
                  </View>

                  <View style={styles.viewContainer}>
                    <Text
                      style={{
                        fontSize: 25,
                        fontWeight: "bold",
                        textAlign: "center",
                        color: "#FFFFFF",
                      }}
                    >
                      Makan Terlampau Banyak
                    </Text>
                    <Text style={[styles.text, { marginTop: 5 }]}>
                      Perut anda adalah sebesar saiz penumbuk. Apabila anda
                      makan terlalu banyak pada satu-satu masa, perut terpaksa
                      meregang dan membesar untuk menampung makanan tersebut
                      sehingga terasa kembung.
                    </Text>
                    <Text
                      style={[styles.text, { marginTop: 15, fontSize: 15 }]}
                    >
                      *Saiz perut berukuran panjang 15-25cm dan lebar 7-13cm
                    </Text>
                  </View>

                  <View style={styles.viewContainer}>
                    <Text
                      style={{
                        fontSize: 25,
                        fontWeight: "bold",
                        textAlign: "center",
                        color: "#FFFFFF",
                      }}
                    >
                      Sembelit
                    </Text>
                    <Text style={[styles.text, { marginTop: 5 }]}>
                      Perasaan kembung mungkin berounca dari sembelit. Antara
                      punca sembelit termasuklah kurang pengambilan serat,
                      kurang minum air, tekanan dan masalah kesihatan lain.
                    </Text>
                  </View>

                  <View style={styles.viewContainer}>
                    <Text
                      style={{
                        fontSize: 25,
                        fontWeight: "bold",
                        textAlign: "center",
                        color: "#FFFFFF",
                      }}
                    >
                      {"Susu & Produk Tenusu"}
                    </Text>
                    <Text style={[styles.text, { marginTop: 5 }]}>
                      Susu dan produk tenusu mengandungi laktosa. Sesetengah
                      individu mengalami sakit perut dan kembung/gas kerana
                      tidak mampu mencerna laktosa (lactose intolerance). Ia
                      biasanya tidak serius, dan rawatan bergantung kepada tahap
                      masing-masing.
                    </Text>
                  </View>

                  <View style={styles.viewContainer}>
                    <Text
                      style={{
                        fontSize: 25,
                        fontWeight: "bold",
                        textAlign: "center",
                        color: "#FFFFFF",
                      }}
                    >
                      Kegemukan
                    </Text>
                    <Text style={[styles.text, { marginTop: 5 }]}>
                      Perut anda tidak dapat meregang kerana kurang ruang
                      pembesaran.
                    </Text>
                  </View>
                </View>
              ) : null}

              {route.params["Session"] == 4 ? (
                <View>
                  <Text style={styles.bigTitle}>
                    SISTEM PENGHADAMAN MANUSIA
                  </Text>
                  <Text style={[styles.text, { marginTop: 20 }]}>
                    Sistem penghadaman merupakan sistem yang berfungsi untuk
                    mencerna makanan bagi membekalkan tenaga dan nutrien yang
                    diperlukan oleh tubuh badan kita.
                  </Text>
                  <Text style={[styles.text, { marginTop: 10 }]}>
                    Umumnya, terdapat tiga fasa utama yang terlibat iaitu proses
                    penghancuran makanan di dalam mulut, proses penyerapan zat
                    makanan di dalam usus serta proses pengeluaran sisa makanan
                    yang tidak dapat dicerna.
                  </Text>
                  <Text style={[styles.text, { marginTop: 10 }]}>
                    Proses penghadaman manusia berlaku melalui dua mekanisma
                    yang berbeza:
                  </Text>
                  <View style={styles.viewContainer}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        textAlign: "center",
                        color: "#FFFFFF",
                      }}
                    >
                      Pencernaan secara mekanikal
                    </Text>
                    <Text style={[styles.text, { marginTop: 5 }]}>
                      Gigi akan mengunyah makanan dan mengubah strukturnya dari
                      bentuk kasar menjadi kecil atau halus.
                    </Text>
                  </View>
                  <View style={styles.viewContainer}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        textAlign: "center",
                        color: "#FFFFFF",
                      }}
                    >
                      Pencernaan secara tindak balas kimia
                    </Text>
                    <Text style={[styles.text, { marginTop: 5 }]}>
                      Makanan dicerna oleh enzim, sejenis bahan yang dihasilkan
                      untuk mempercepatkan tindak balas kimia sepanjang saluran
                      penghadaman kita.
                    </Text>
                  </View>
                  <Text style={[styles.bigTitle, { marginTop: 30 }]}>
                    FUNGSI UTAMA SISTEM PENGHADAMAN
                  </Text>
                  <Text style={[styles.text, { marginTop: 20 }]}>
                    Sistem penghadaman boleh dibahagikan kepada:
                  </Text>
                  <Text
                    style={[styles.text, { marginTop: 10, fontWeight: "bold" }]}
                  >
                    Mengunyah
                    <Text style={{ fontWeight: "normal" }}>
                      {
                        " --- Proses penghancuran makanan secara mekanikal oleh gigi"
                      }
                    </Text>
                  </Text>
                  <Text
                    style={[styles.text, { marginTop: 10, fontWeight: "bold" }]}
                  >
                    Peristalsis
                    <Text style={{ fontWeight: "normal" }}>
                      {" --- Penggerakan makanan melalui saluran penghadaman"}
                    </Text>
                  </Text>
                  <Text
                    style={[styles.text, { marginTop: 10, fontWeight: "bold" }]}
                  >
                    Pencernaan
                    <Text style={{ fontWeight: "normal" }}>
                      {
                        " --- Proses penghancuran makanan mengikut tindak balas kimia"
                      }
                    </Text>
                  </Text>
                  <Text
                    style={[styles.text, { marginTop: 10, fontWeight: "bold" }]}
                  >
                    Penyerapan
                    <Text style={{ fontWeight: "normal" }}>
                      {" --- Proses penyerapan khasiat oleh badan"}
                    </Text>
                  </Text>
                  <Text
                    style={[styles.text, { marginTop: 10, fontWeight: "bold" }]}
                  >
                    Penyahtinjaan
                    <Text style={{ fontWeight: "normal" }}>
                      {
                        " --- Proses pengeluaran bahan buangan yang tidak dapat diserap oleh tubuh"
                      }
                    </Text>
                  </Text>
                  <Text style={[styles.text, { marginTop: 15 }]}>
                    Organ dalam sistem ini termasuklah mulut, sebahagian besar
                    faring, esofagus, perut, usus kecil, usus besar dan dubur.
                  </Text>
                  <Text style={[styles.bigTitle, { marginTop: 30 }]}>
                    ORGAN PENGHADAMAN MANUSIA
                  </Text>
                  <View style={{ alignItems: "center" }}>
                    <Image
                      source={require("../assets/article41.png")}
                      style={{
                        height: 300,
                        width: 221,
                        marginTop: 10,
                        marginBottom: 10,
                      }}
                    />

                    <Image
                      source={require("../assets/article42.png")}
                      style={{
                        height: 193,
                        width: 250,
                        marginTop: 10,
                        marginBottom: 10,
                      }}
                    />
                  </View>

                  <View style={styles.viewContainer}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        textAlign: "center",
                        color: "#FFFFFF",
                      }}
                    >
                      1. Mulut
                    </Text>
                    <Unorderedlist
                      bulletUnicode={0x2022}
                      color="#FFFFFF"
                      style={{ fontSize: 20, fontWeight: "bold", marginTop: 5 }}
                    >
                      <Text style={[styles.text, { marginTop: 5 }]}>
                        Mulut ialah bahagian pertama yang menerima makanan dan
                        air.
                      </Text>
                    </Unorderedlist>
                    <Unorderedlist
                      bulletUnicode={0x2022}
                      color="#FFFFFF"
                      style={{ fontSize: 20, fontWeight: "bold", marginTop: 5 }}
                    >
                      <Text style={[styles.text, { marginTop: 5 }]}>
                        Di sini terletaknya kelenjar air liur yang dapat
                        membantu melembutkan pepejal makanan sebelum dikunyah
                        oleh gigi.
                      </Text>
                    </Unorderedlist>
                  </View>

                  <View style={styles.viewContainer}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        textAlign: "center",
                        color: "#FFFFFF",
                      }}
                    >
                      2. Faring
                    </Text>
                    <Unorderedlist
                      bulletUnicode={0x2022}
                      color="#FFFFFF"
                      style={{ fontSize: 20, fontWeight: "bold", marginTop: 5 }}
                    >
                      <Text style={[styles.text, { marginTop: 5 }]}>
                        Selain menghubungkan mulut dan esophagus, faring juga
                        terdiri daripada tonsil, kumpulan kelenjar yang
                        mempunyai banyak limfosit.
                      </Text>
                    </Unorderedlist>
                    <Unorderedlist
                      bulletUnicode={0x2022}
                      color="#FFFFFF"
                      style={{ fontSize: 20, fontWeight: "bold", marginTop: 5 }}
                    >
                      <Text style={[styles.text, { marginTop: 5 }]}>
                        Limfosit ini dapat membantu mengurangkan jangkitan kuman
                        yang masuk melalui sistem pencernaan dan pernafasan.
                      </Text>
                    </Unorderedlist>
                  </View>

                  <View style={styles.viewContainer}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        textAlign: "center",
                        color: "#FFFFFF",
                      }}
                    >
                      3. Esofagus
                    </Text>
                    <Unorderedlist
                      bulletUnicode={0x2022}
                      color="#FFFFFF"
                      style={{ fontSize: 20, fontWeight: "bold", marginTop: 5 }}
                    >
                      <Text style={[styles.text, { marginTop: 5 }]}>
                        Setelah dicerna di dalam mulut, makanan akan ditelan
                        masuk melalui esofagus sebelum sampai ke perut.
                      </Text>
                    </Unorderedlist>
                    <Unorderedlist
                      bulletUnicode={0x2022}
                      color="#FFFFFF"
                      style={{ fontSize: 20, fontWeight: "bold", marginTop: 5 }}
                    >
                      <Text style={[styles.text, { marginTop: 5 }]}>
                        Panjang esofagus adalah ± 25 cm dan ia berbentuk seperti
                        paip.
                      </Text>
                    </Unorderedlist>
                  </View>

                  <View style={{ alignItems: "center" }}>
                    <Image
                      source={require("../assets/article43.png")}
                      style={{
                        height: 225,
                        width: 228,
                        marginTop: 20,
                      }}
                    />
                  </View>

                  <View style={styles.viewContainer}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        textAlign: "center",
                        color: "#FFFFFF",
                      }}
                    >
                      4. Perut
                    </Text>
                    <Unorderedlist
                      bulletUnicode={0x2022}
                      color="#FFFFFF"
                      style={{ fontSize: 20, fontWeight: "bold", marginTop: 5 }}
                    >
                      <Text style={[styles.text, { marginTop: 5 }]}>
                        Perut menerima dan menampung makanan untuk jangka waktu
                        pendek. Dalam keadaan yang biasa, bentuknya perut
                        seperti huruf ‘J’ dan mempunyai muatan sebesar 2-3
                        liter.
                      </Text>
                    </Unorderedlist>
                    <Unorderedlist
                      bulletUnicode={0x2022}
                      color="#FFFFFF"
                      style={{ fontSize: 20, fontWeight: "bold", marginTop: 5 }}
                    >
                      <Text style={[styles.text, { marginTop: 5 }]}>
                        Ia tidak mempunyai bentuk yang tetap, tetapi bergantung
                        kepada isi kandungannya, posisi tubuh dan pernafasan.
                      </Text>
                    </Unorderedlist>
                    <Unorderedlist
                      bulletUnicode={0x2022}
                      color="#FFFFFF"
                      style={{ fontSize: 20, fontWeight: "bold", marginTop: 5 }}
                    >
                      <Text style={[styles.text, { marginTop: 5 }]}>
                        Apabila makanan mendekati perut, injap pada perut akan
                        terbuka supaya makanan disalur masuk, kemudian segera
                        ditutup agar makanan tidak kembali ke esofagus.
                      </Text>
                    </Unorderedlist>
                    <Unorderedlist
                      bulletUnicode={0x2022}
                      color="#FFFFFF"
                      style={{ fontSize: 20, fontWeight: "bold", marginTop: 5 }}
                    >
                      <Text style={[styles.text, { marginTop: 5 }]}>
                        Makanan yang masuk ke dalam perut akan dikosongkan
                        selepas 2-5 jam. Otot di perut akan mengecut untuk
                        menolak makanan ke bahagian usus.
                      </Text>
                    </Unorderedlist>
                  </View>

                  <View style={{ alignItems: "center" }}>
                    <Image
                      source={require("../assets/article44.png")}
                      style={{
                        height: 250,
                        width: 243,
                        marginTop: 20,
                      }}
                    />
                  </View>

                  <View style={styles.viewContainer}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        textAlign: "center",
                        color: "#FFFFFF",
                      }}
                    >
                      5. Usus Kecil
                    </Text>
                    <Text style={[styles.text, { marginTop: 5 }]}>
                      Usus kecil merupakan sistem pencernaan manusia yang
                      terpanjang iaitu 6-7 meter. Kebanyakan zat-zat makanan
                      akan diserap di sini.
                    </Text>
                    <Text style={[styles.text, { marginTop: 10 }]}>
                      Setiap bahagian pada usus kecil memainkan peranan yang
                      tersendiri dalam proses penghadaman manusia.
                    </Text>
                    <Text style={[styles.text, { marginTop: 10 }]}>
                      Perut akan membesar dan anda akan berasa kembung apabila
                      terdapat:
                    </Text>
                    <Text
                      style={[
                        styles.text,
                        {
                          marginTop: 20,
                          fontWeight: "bold",
                          textAlign: "center",
                        },
                      ]}
                    >
                      DUODENUM
                    </Text>
                    <Text style={[styles.text, { marginTop: 5 }]}>
                      Menyalurkan makanan ke usus kecil dan mencerna makanan
                      melalui proses tindak balas kimia.
                    </Text>
                    <Text
                      style={[
                        styles.text,
                        {
                          marginTop: 20,
                          fontWeight: "bold",
                          textAlign: "center",
                        },
                      ]}
                    >
                      JEJUNUM*
                    </Text>
                    <Text style={[styles.text, { marginTop: 5 }]}>
                      Permukaan bahangian usus ini mempunyai bahagian yang
                      disebut vili. Struktur vili ini amat penting untuk
                      penyerapan nutrien.
                    </Text>
                    <Text
                      style={[
                        styles.text,
                        {
                          marginTop: 20,
                          fontWeight: "bold",
                          textAlign: "center",
                        },
                      ]}
                    >
                      ILEUM
                    </Text>
                    <Text style={[styles.text, { marginTop: 5 }]}>
                      Vitamin B12, garam hempedu, air, dan elektrolit yang belum
                      diserap oleh jejunum akan diserap oleh vili di ileum.
                    </Text>
                    <Text
                      style={[styles.text, { marginTop: 15, fontSize: 15 }]}
                    >
                      *Hampir 90% penyerapan khasiat berlaku di jejunum
                    </Text>
                  </View>

                  <View style={styles.viewContainer}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        textAlign: "center",
                        color: "#FFFFFF",
                      }}
                    >
                      6. Usus Besar
                    </Text>
                    <Unorderedlist
                      bulletUnicode={0x2022}
                      color="#FFFFFF"
                      style={{ fontSize: 20, fontWeight: "bold", marginTop: 5 }}
                    >
                      <Text style={[styles.text, { marginTop: 5 }]}>
                        Sisa-sisa makanan yang tidak dapat dicerna akan melalui
                        usus besar bersama air untuk diserap
                      </Text>
                    </Unorderedlist>
                    <Unorderedlist
                      bulletUnicode={0x2022}
                      color="#FFFFFF"
                      style={{ fontSize: 20, fontWeight: "bold", marginTop: 5 }}
                    >
                      <Text style={[styles.text, { marginTop: 5 }]}>
                        Seterusnya, ia disimpan sebagai najis sebelum tiba masa
                        untuk disingkirkan melalui dubur
                      </Text>
                    </Unorderedlist>
                  </View>
                </View>
              ) : null}
              {/* {route.params["Session"] == 5 ? (
                ) : null} */}
              {/* {route.params["Session"] == 6 ? (
                ) : null} */}
              {/* {route.params["Session"] == 7 ? (
                ) : null} */}
              {/* {route.params["Session"] == 8 ? (
                ) : null} */}
              {/* {route.params["Session"] == 9 ? (
                ) : null} */}
              {/* {route.params["Session"] == 10 ? (
                ) : null} */}
              {/* {route.params["Session"] == 11 ? (
                ) : null} */}
              {/* {route.params["Session"] == 12 ? (
                ) : null} */}
              <View
                style={{
                  alignItems: "center",
                  marginTop: 35,
                }}
              >
                <TouchableOpacity
                  style={[styles.buttonStyle, { backgroundColor: "#34433C" }]}
                  onPress={() => navigation.navigate("mainMenuPage")}
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
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
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
