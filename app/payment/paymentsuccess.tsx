
import React from "react";
import {
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

export default function PaymentSuccess() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleClose = () => {
    router.back();
  };

  const handleFeedback = () => {
    // Replace success popup with feedback popup.
    // Payment Process remains underneath.
    router.replace("/payment/paymentfeedback");
  };

  return (
    <View style={styles.overlay}>
      {/* Transparent area */}
      <View style={styles.transparentArea} />

      {/* Bottom Sheet */}
      <View style={styles.bottomSheet}>
        {/* Handle */}
        <View style={styles.handle} />

        {/* Close */}
        <TouchableOpacity
          style={styles.closeButton}
          onPress={handleClose}
          activeOpacity={0.7}
        >
          <Ionicons
            name="close"
            size={27}
            color="#444444"
          />
        </TouchableOpacity>

        {/* Content */}
        <View style={styles.content}>
          <Image
            source={require("../../assets/images/greentick.png")}
            style={styles.greenTick}
            resizeMode="contain"
          />

          <Text style={styles.thankYou}>
            Payment Success
          </Text>

          <Text style={styles.description}>
            Your money has been successfully sent to
          </Text>

          <Text style={styles.name}>
            Serhio Romains
          </Text>

          <Text style={styles.amounttext}>
            amount
          </Text>

          <Text style={styles.amount}>
            $220
          </Text>

          {/* Dashed Line */}
          <View style={styles.dashedLine}>
            {Array.from({ length: 12 }).map((_, index) => (
              <View
                key={index}
                style={styles.dash}
              />
            ))}
          </View>

          {/* Feedback */}
          <View style={styles.feedbackContainer}>
            <Text style={styles.tripText}>
              How is Your trip
            </Text>

            <Text style={styles.tripFeedback}>
              Your feedback will help us to improve
              {"\n"}
              your driving experience better
            </Text>
          </View>
        </View>

        {/* Feedback Button */}
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={styles.confirmButton}
            onPress={handleFeedback}
            activeOpacity={0.8}
          >
            <Text style={styles.confirmText}>
              Please Feedback
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.18)",
  },

  transparentArea: {
    flex: 0.30,
  },

  bottomSheet: {
    flex: 0.70,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 10,
  },

  handle: {
    width: 45,
    height: 4,
    borderRadius: 4,
    backgroundColor: "#D0D0D0",
    alignSelf: "center",
    marginTop: 9,
    marginBottom: 2,
  },

  closeButton: {
    position: "absolute",
    right: 12,
    top: 10,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },

  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -10,
  },

  greenTick: {
    width: 115,
    height: 115,
  },

  thankYou: {
    fontFamily: "Poppins_500Medium",
    fontSize: 21,
    color: "#5A5A5A",
    marginTop: 12,
  },

  description: {
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    color: "#5E5E5E",
    textAlign: "center",
    marginTop: 7,
  },

  name: {
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    color: "#5E5E5E",
    textAlign: "center",
    marginTop: 2,
  },

  amounttext: {
    fontFamily: "Poppins_400Regular",
    color: "#5E5E5E",
    fontSize: 11,
    marginTop: 9,
  },

  amount: {
    fontFamily: "Poppins_400Regular",
    fontSize: 27,
    color: "#5E5E5E",
    textAlign: "center",
    marginTop: 2,
  },

  dashedLine: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 14,
    marginBottom: 14,
  },

  dash: {
    width: 22,
    height: 2,
    backgroundColor: "#999999",
    borderRadius: 2,
  },

  feedbackContainer: {
    width: "100%",
    alignItems: "center",
  },

  tripText: {
    textAlign: "center",
    fontSize: 17,
    fontFamily: "Poppins_500Medium",
    color: "#5B5B5B",
  },

  tripFeedback: {
    textAlign: "center",
    fontSize: 13,
    color: "#5E5E5E",
    fontFamily: "Poppins_400Regular",
    marginTop: 4,
    lineHeight: 19,
  },

  bottomContainer: {
    paddingBottom: 18,
  },

  confirmButton: {
    width: "100%",
    height: 52,
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
