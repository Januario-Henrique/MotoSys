import React, { useEffect, useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  // Dismiss keyboard when the page opens
  useEffect(() => {
    Keyboard.dismiss();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  const handleSendMessage = () => {
    Keyboard.dismiss();

    console.log({
      name,
      email,
      phone,
      message,
    });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#fff"
        />

        <View style={styles.container}>

          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backButton}
              activeOpacity={0.7}
              onPress={() => {
                Keyboard.dismiss();
              }}
            >
              <Ionicons
                name="chevron-back"
                size={23}
                color="#444"
              />

              <Text style={styles.backText}>
                Back
              </Text>
            </TouchableOpacity>

            <Text style={styles.headerTitle}>
              Contact Us
            </Text>

            <View style={styles.headerSpacer} />
          </View>

          {/* Contact Information */}
          <View style={styles.contactInfo}>
            <Text style={styles.intro}>
              Contact us for Ride share
            </Text>

            <Text style={styles.sectionTitle}>
              Address
            </Text>

            <Text style={styles.address}>
              House# 72, Road# 21, Banani, Dhaka-1213 (near Banani{"\n"}
              Bidyaniketon School &{"\n"}
              College, University of South Asia)
            </Text>

            <Text style={styles.contactDetails}>
              Call : 13301 (24/7){"\n"}
              Email : support@pathao.com
            </Text>
          </View>

          {/* Message Section */}
          <Text style={styles.messageTitle}>
            Send Message
          </Text>

          {/* Name */}
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Name"
            placeholderTextColor="#D2D2D2"
            autoFocus={false}
            returnKeyType="next"
          />

          {/* Email */}
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            placeholderTextColor="#D2D2D2"
            keyboardType="email-address"
            autoCapitalize="none"
            autoFocus={false}
            returnKeyType="next"
          />

          {/* Phone */}
          <View style={styles.phoneContainer}>

            <TouchableOpacity
              style={styles.countrySelector}
              activeOpacity={0.7}
              onPress={() => {
                Keyboard.dismiss();
              }}
            >
              <Text style={styles.flag}>
                🇷🇼
              </Text>

              <Ionicons
                name="chevron-down"
                size={18}
                color="#444"
              />
            </TouchableOpacity>

            <View style={styles.phoneDivider} />

            <Text style={styles.countryCode}>
              +250
            </Text>

            <TextInput
              style={styles.phoneInput}
              value={phone}
              onChangeText={setPhone}
              placeholder="Your mobile number"
              placeholderTextColor="#D2D2D2"
              keyboardType="phone-pad"
              autoFocus={false}
              returnKeyType="done"
            />
          </View>

          {/* Message */}
          <TextInput
            style={styles.messageInput}
            value={message}
            onChangeText={setMessage}
            placeholder="Write your text"
            placeholderTextColor="#D2D2D2"
            multiline
            textAlignVertical="top"
            autoFocus={false}
          />

          {/* Submit */}
          <TouchableOpacity
            style={styles.submitButton}
            activeOpacity={0.8}
            onPress={handleSendMessage}
          >
            <Text style={styles.submitText}>
              Send Message
            </Text>
          </TouchableOpacity>

        </View>

        {/* iOS Home Indicator */}
        {Platform.OS === "ios" && (
          <View style={styles.homeIndicator} />
        )}

      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 19,
  },

  /* Header */
  header: {
    height: 71,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  backButton: {
    width: 80,
    flexDirection: "row",
    alignItems: "center",
  },

  backText: {
    marginLeft: 2,
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    color: "#444",
  },

  headerTitle: {
    position: "absolute",
    left: 0,
    right: 0,
    textAlign: "center",
    fontFamily: "Poppins_600SemiBold",
    fontSize: 16,
    color: "#222",
  },

  headerSpacer: {
    width: 80,
  },

  /* Contact Information */
  contactInfo: {
    alignItems: "center",
  },

  intro: {
    marginTop: 10,
    fontFamily: "Poppins_500Medium",
    fontSize: 15,
    color: "#555",
  },

  sectionTitle: {
    marginTop: 13,
    fontFamily: "Poppins_600SemiBold",
    fontSize: 14,
    color: "#555",
  },

  address: {
    marginTop: 5,
    textAlign: "center",
    fontFamily: "Poppins_400Regular",
    fontSize: 10,
    lineHeight: 14,
    color: "#888",
  },

  contactDetails: {
    marginTop: 9,
    textAlign: "center",
    fontFamily: "Poppins_400Regular",
    fontSize: 10,
    lineHeight: 14,
    color: "#888",
  },

  /* Message Section */
  messageTitle: {
    marginTop: 24,
    marginBottom: 12,
    textAlign: "center",
    fontFamily: "Poppins_600SemiBold",
    fontSize: 13,
    color: "#555",
  },

  /* Normal Inputs */
  input: {
    height: 46,
    borderWidth: 1,
    borderColor: "#D0D0D0",
    borderRadius: 6,
    paddingHorizontal: 14,
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    color: "#333",
    marginBottom: 11,
    backgroundColor: "#fff",
  },

  /* Phone */
  phoneContainer: {
    height: 46,
    borderWidth: 1,
    borderColor: "#D0D0D0",
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    overflow: "hidden",
  },

  countrySelector: {
    height: "100%",
    width: 58,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 7,
  },

  flag: {
    fontSize: 19,
  },

  phoneDivider: {
    height: 30,
    width: 1,
    backgroundColor: "#E2E2E2",
  },

  countryCode: {
    marginLeft: 11,
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    color: "#444",
  },

  phoneInput: {
    flex: 1,
    height: "100%",
    paddingHorizontal: 5,
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    color: "#333",
  },

  /* Message Input */
  messageInput: {
    height: 89,
    borderWidth: 1,
    borderColor: "#D0D0D0",
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingTop: 12,
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
    color: "#333",
    backgroundColor: "#fff",
  },

  /* Submit Button */
  submitButton: {
    height: 41,
    marginTop: 37,
    marginHorizontal: 8,
    borderRadius: 6,
    backgroundColor: "#008F5B",
    alignItems: "center",
    justifyContent: "center",
  },

  submitText: {
    fontFamily: "Poppins_600SemiBold",
    color: "#fff",
    fontSize: 13,
  },

  /* iOS Home Indicator */
  homeIndicator: {
    position: "absolute",
    bottom: 7,
    alignSelf: "center",
    width: 101,
    height: 4,
    borderRadius: 3,
    backgroundColor: "#111",
  },
});
