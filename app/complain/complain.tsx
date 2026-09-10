import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Platform,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

export default function Complain() {
  const [complaint, setComplaint] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedReason, setSelectedReason] =
    useState("moto driver not clean");

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const reasons = [
    "moto driver was not clean",
    "moto driver was rude",
    "moto driver arrived late",
    "Unsafe driving",
    "Other",
  ];

  const handleSubmit = () => {
    if (complaint.trim().length < 10) {
      return;
    }

    console.log({
      reason: selectedReason,
      complaint,
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <View style={styles.container}>

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            activeOpacity={0.7}
            onPress={() => {}}
          >
            <Ionicons
              name="chevron-back"
              size={24}
              color="#4A4A4A"
            />

            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>

          <Text style={styles.title}>Complain</Text>

          <View style={styles.headerSpacer} />
        </View>

        {/* Complaint reason dropdown */}
        <View style={styles.dropdownWrapper}>
          <TouchableOpacity
            style={styles.dropdown}
            activeOpacity={0.8}
            onPress={() => setShowDropdown(!showDropdown)}
          >
            <Text style={styles.dropdownText}>
              {selectedReason}
            </Text>

            <Ionicons
              name={
                showDropdown
                  ? "chevron-up"
                  : "chevron-down"
              }
              size={21}
              color="#444"
            />
          </TouchableOpacity>

          {showDropdown && (
            <View style={styles.dropdownMenu}>
              {reasons.map((reason) => (
                <TouchableOpacity
                  key={reason}
                  style={styles.dropdownItem}
                  onPress={() => {
                    setSelectedReason(reason);
                    setShowDropdown(false);
                  }}
                >
                  <Text style={styles.dropdownItemText}>
                    {reason}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        {/* Complaint input */}
        <TextInput
          style={styles.textInput}
          value={complaint}
          onChangeText={setComplaint}
          placeholder="Write your complain here (minimum 10 characters)"
          placeholderTextColor="#D0D0D0"
          multiline
          textAlignVertical="top"
          maxLength={500}
        />

        {/* Submit */}
        <TouchableOpacity
          style={[
            styles.submitButton,
            complaint.trim().length < 10 &&
              styles.submitDisabled,
          ]}
          activeOpacity={0.8}
          onPress={handleSubmit}
        >
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>

      {/* iOS-style bottom home indicator */}
      {Platform.OS === "ios" && (
        <View style={styles.homeIndicator} />
      )}
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
    paddingHorizontal: 21,
  },

  header: {
    height: 73,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  backButton: {
    flexDirection: "row",
    alignItems: "center",
    width: 80,
  },

  backText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    color: "#4A4A4A",
    marginLeft: 2,
  },

  title: {
    position: "absolute",
    left: 0,
    right: 0,
    textAlign: "center",
    fontFamily: "Poppins_600SemiBold",
    fontSize: 16,
    color: "#222222",
  },

  headerSpacer: {
    width: 80,
  },

  dropdownWrapper: {
    position: "relative",
    zIndex: 10,
  },

  dropdown: {
    height: 46,
    borderWidth: 1,
    borderColor: "#D0D0D0",
    borderRadius: 6,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
  },

  dropdownText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    color: "#4A4A4A",
  },

  dropdownMenu: {
    position: "absolute",
    top: 50,
    left: 0,
    right: 0,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#D0D0D0",
    borderRadius: 6,
    overflow: "hidden",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.12,
    shadowRadius: 4,
  },

  dropdownItem: {
    height: 44,
    justifyContent: "center",
    paddingHorizontal: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },

  dropdownItemText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    color: "#444444",
  },

  textInput: {
    height: 88,
    marginTop: 12,
    borderWidth: 1,
    borderColor: "#D0D0D0",
    borderRadius: 6,
    paddingHorizontal: 7,
    paddingTop: 12,
    paddingBottom: 10,
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    color: "#333333",
    backgroundColor: "#FFFFFF",
  },

  submitButton: {
    height: 41,
    marginTop: 25,
    marginHorizontal: 8,
    borderRadius: 6,
    backgroundColor: "#008F5B",
    alignItems: "center",
    justifyContent: "center",
  },

  submitDisabled: {
    backgroundColor: "#008F5B",
  },

  submitText: {
    fontFamily: "Poppins_600SemiBold",
    color: "#FFFFFF",
    fontSize: 13,
  },

  homeIndicator: {
    position: "absolute",
    bottom: 8,
    alignSelf: "center",
    width: 101,
    height: 4,
    borderRadius: 3,
    backgroundColor: "#111111",
  },
});