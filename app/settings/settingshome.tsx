
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
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

const SettingsHome = () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const settings = [
    {
      title: "Change Password",
      route: "/settings/settingspassword",
    },
    {
      title: "Change Language",
      route: "/settings/settingslanguage",
    },
    {
      title: "Privacy Policy",
      route: "/settings/settingspolicy",
    },
    {
      title: "Contact Us",
      route: "/settings/settingscontactus",
    },
    {
      title: "Delete Account",
      route: "/settings/settingsdeleteacc",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FFFFFF"
      />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <Ionicons
            name="chevron-back"
            size={22}
            color="#555555"
          />

          <Text style={styles.backText}>
            Back
          </Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          Settings
        </Text>

        {/* Keeps title centered */}
        <View style={styles.headerSpacer} />
      </View>

      {/* Settings Options */}
      <View style={styles.optionsContainer}>
        {settings.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.option}
            activeOpacity={0.7}
            onPress={() => router.push(item.route as any)}
          >
            <Text style={styles.optionText}>
              {item.title}
            </Text>

            <Ionicons
              name="chevron-forward"
              size={21}
              color="#555555"
            />
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default SettingsHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  /* Header */
  header: {
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },

  backButton: {
    flexDirection: "row",
    alignItems: "center",
    width: 75,
  },

  backText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    color: "#555555",
    marginLeft: 2,
  },

  headerTitle: {
    position: "absolute",
    left: 0,
    right: 0,
    textAlign: "center",
    fontFamily: "Poppins_600SemiBold",
    fontSize: 16,
    color: "#333333",
  },

  headerSpacer: {
    width: 75,
  },

  /* Settings Options */
  optionsContainer: {
    paddingHorizontal: 31,
    paddingTop: 27,
  },

  option: {
    height: 39,
    borderWidth: 1,
    borderColor: "#8EDBCB",
    borderRadius: 5,
    marginBottom: 12,
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  optionText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
    color: "#4A4A4A",
  },
});

