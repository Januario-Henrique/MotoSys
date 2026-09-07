import React, { useState } from "react";

import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";


const GREEN = "#00965E";
const LIGHT_GREEN = "#E4F4EE";


export default function PaymentCall() {

  const [muted, setMuted] = useState(false);
  const [speaker, setSpeaker] = useState(false);

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });


  if (!fontsLoaded) {
    return null;
  }


  // =========================
  // BACK BUTTON
  // =========================

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };


  // =========================
  // END CALL
  // =========================

  const handleEndCall = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };


  return (
    <SafeAreaView style={styles.safeArea}>

      <View style={styles.container}>

        {/* ================= HEADER ================= */}

        <View style={styles.header}>

          <TouchableOpacity
            style={styles.backButton}
            onPress={handleBack}
            activeOpacity={0.7}
          >

            <Ionicons
              name="chevron-back"
              size={24}
              color="#444444"
            />

            <Text style={styles.backText}>
              Back
            </Text>

          </TouchableOpacity>

        </View>


        {/* ================= CALL CONTENT ================= */}

        <View style={styles.callContent}>

          {/* DRIVER IMAGE */}

          <View style={styles.profileBorder}>

            <Image
              source={require("../../assets/images/driver.jpg")}
              style={styles.profileImage}
              resizeMode="cover"
            />

          </View>


          {/* DRIVER NAME */}

          <Text style={styles.driverName}>
            Jean Claude
          </Text>


          {/* CALL STATUS */}

          <Text style={styles.callStatus}>
            Calling...
          </Text>

        </View>


        {/* ================= BOTTOM CONTROLS ================= */}

        <View style={styles.bottomControls}>

          {/* CAMERA */}

          <TouchableOpacity
            style={styles.smallButton}
            activeOpacity={0.7}
          >

            <Ionicons
              name="camera-outline"
              size={20}
              color="#777777"
            />

          </TouchableOpacity>


          {/* MICROPHONE */}

          <TouchableOpacity
            style={[
              styles.smallButton,
              muted && styles.activeButton,
            ]}
            onPress={() => setMuted(!muted)}
            activeOpacity={0.7}
          >

            <Ionicons
              name={muted ? "mic-off" : "mic-off-outline"}
              size={20}
              color="#777777"
            />

          </TouchableOpacity>


          {/* END CALL */}

          <TouchableOpacity
            style={styles.endCallButton}
            onPress={handleEndCall}
            activeOpacity={0.8}
          >

            <Ionicons
              name="call"
              size={28}
              color="#FFFFFF"
            />

          </TouchableOpacity>


          {/* SPEAKER */}

          <TouchableOpacity
            style={[
              styles.smallButton,
              speaker && styles.activeButton,
            ]}
            onPress={() => setSpeaker(!speaker)}
            activeOpacity={0.7}
          >

            <Ionicons
              name="volume-medium-outline"
              size={20}
              color="#777777"
            />

          </TouchableOpacity>


          {/* MORE */}

          <TouchableOpacity
            style={styles.smallButton}
            activeOpacity={0.7}
          >

            <Ionicons
              name="ellipsis-horizontal"
              size={21}
              color="#777777"
            />

          </TouchableOpacity>

        </View>


        {/* ================= HOME INDICATOR ================= */}

        <View style={styles.homeIndicator} />

      </View>

    </SafeAreaView>
  );
}


const styles = StyleSheet.create({

  // =========================
  // MAIN
  // =========================

  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 15,
  },


  // =========================
  // HEADER
  // =========================

  header: {
    height: 45,
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
  },

  backButton: {
    flexDirection: "row",
    alignItems: "center",
    width: 80,
  },

  backText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
    color: "#444444",
    marginLeft: 3,
  },


  // =========================
  // CALL CONTENT
  // =========================

  callContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 70,
  },

  profileBorder: {
    width: 74,
    height: 74,
    borderRadius: 37,

    borderWidth: 1.5,
    borderColor: "#00A875",

    alignItems: "center",
    justifyContent: "center",

    marginBottom: 13,

    overflow: "hidden",
  },

  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },

  driverName: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 21,
    color: "#5F5F5F",
    marginTop: 2,
  },

  callStatus: {
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
    color: "#BDBDBD",
    marginTop: 2,
  },


  // =========================
  // BOTTOM BUTTONS
  // =========================

  bottomControls: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    paddingHorizontal: 0,
    paddingBottom: 20,
  },

  smallButton: {
    width: 38,
    height: 38,

    borderRadius: 19,

    backgroundColor: LIGHT_GREEN,

    alignItems: "center",
    justifyContent: "center",
  },

  activeButton: {
    backgroundColor: "#D0EDE1",
  },


  // =========================
  // END CALL BUTTON
  // =========================

  endCallButton: {
    width: 51,
    height: 51,

    borderRadius: 26,

    backgroundColor: GREEN,

    alignItems: "center",
    justifyContent: "center",

    transform: [
      {
        rotate: "135deg",
      },
    ],
  },


  // =========================
  // HOME INDICATOR
  // =========================

  homeIndicator: {
    width: 97,
    height: 4,

    borderRadius: 4,

    backgroundColor: "#111111",

    alignSelf: "center",

    marginBottom: 7,
  },

});