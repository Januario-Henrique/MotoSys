
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

const GREEN = "#00965E";

export default function MotoThank() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  const handleConfirmRide = () => {
    router.replace("/transport/motodetails");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        {/* Back */}
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

        {/* Center */}
        <View style={styles.centerContent}>

          {/* Green Tick Image */}
          <Image
            source={require("../../assets/images/greentick.png")}
            style={styles.greenTick}
            resizeMode="contain"
          />

          {/* Thank you */}
          <Text style={styles.thankYou}>
            Thank you
          </Text>

          <Text style={styles.description}>
            Your booking has been placed sent to
          </Text>

          <Text style={styles.name}>
            Md. Sharif Ahmed
          </Text>
        </View>

        {/* Bottom button */}
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={styles.confirmButton}
            onPress={handleConfirmRide}
            activeOpacity={0.8}
          >
            <Text style={styles.confirmText}>
              Confirm Ride
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 15,
  },

  backButton: {
    width: 90,
    height: 40,
    marginTop: 14,
    flexDirection: "row",
    alignItems: "center",
  },

  backText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
    color: "#444444",
    marginLeft: 3,
  },

  centerContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -65,
  },

  greenTick: {
    width: 150,
    height: 150,
  },

  thankYou: {
    fontFamily: "Poppins_500Medium",
    fontSize: 21,
    color: "#5A5A5A",
    marginTop: 25,
  },

  description: {
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    color: "#5E5E5E",
    textAlign: "center",
    marginTop: 9,
  },

  name: {
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    color: "#5E5E5E",
    textAlign: "center",
    marginTop: 2,
  },

  bottomContainer: {
    paddingBottom: 22,
  },

  confirmButton: {
    width: "100%",
    height: 54,
    borderRadius: 8,
    backgroundColor: GREEN,
    alignItems: "center",
    justifyContent: "center",
  },

  confirmText: {
    fontFamily: "Poppins_600SemiBold",
    color: "#FFFFFF",
    fontSize: 16,
  },
});

