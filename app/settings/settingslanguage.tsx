import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import CountryFlag from "react-native-country-flag";

const GREEN = "#00965E";

const languages = [
  {
    id: "english",
    name: "English",
    nativeName: "English",
    countryCode: "us",
  },
  {
    id: "hindi",
    name: "Hindi",
    nativeName: "Hindi",
    countryCode: "in",
  },
  {
    id: "arabic",
    name: "Arabic",
    nativeName: "العربية",
    countryCode: "ps",
  },
  {
    id: "french",
    name: "French",
    nativeName: "Français",
    countryCode: "fr",
  },
  {
    id: "german",
    name: "German",
    nativeName: "Deutsch",
    countryCode: "de",
  },
  {
    id: "portuguese",
    name: "Portuguese",
    nativeName: "Português",
    countryCode: "pt",
  },
  {
    id: "turkish",
    name: "Turkish",
    nativeName: "Türkçe",
    countryCode: "tr",
  },
  {
    id: "dutch",
    name: "Dutch",
    nativeName: "Nederlands",
    countryCode: "nl",
  },
];

export default function SettingsLanguage() {
  const [selectedLanguage, setSelectedLanguage] = useState("english");

  // Same Poppins font setup as Feedback page
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleSave = () => {
    console.log("Selected language:", selectedLanguage);
    router.back();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            activeOpacity={0.7}
            onPress={() => router.back()}
          >
            <Ionicons
              name="chevron-back"
              size={20}
              color="#555555"
            />

            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Change Language</Text>

          {/* Keeps the title centered */}
          <View style={styles.headerRight} />
        </View>

        {/* Language List */}
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.languageList}
          showsVerticalScrollIndicator={false}
        >
          {languages.map((language) => {
            const isSelected =
              selectedLanguage === language.id;

            return (
              <TouchableOpacity
                key={language.id}
                activeOpacity={0.8}
                onPress={() =>
                  setSelectedLanguage(language.id)
                }
                style={[
                  styles.languageCard,
                  isSelected && styles.selectedCard,
                ]}
              >
                {/* Flag */}
                <View style={styles.flagContainer}>
                  <CountryFlag
                    isoCode={language.countryCode}
                    size={25}
                  />
                </View>

                {/* Language information */}
                <View style={styles.languageInfo}>
                  <Text style={styles.languageName}>
                    {language.name}
                  </Text>

                  <Text style={styles.nativeName}>
                    {language.nativeName}
                  </Text>
                </View>

                {/* Check icon */}
                <View style={styles.checkContainer}>
                  <Ionicons
                    name={
                      isSelected
                        ? "checkmark-circle"
                        : "checkmark-circle-outline"
                    }
                    size={20}
                    color={
                      isSelected
                        ? GREEN
                        : "#D1D1D1"
                    }
                  />
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* Save Button */}
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={styles.saveButton}
            activeOpacity={0.8}
            onPress={handleSave}
          >
            <Text style={styles.saveText}>Save</Text>
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
  },

  /* Header */
  header: {
    height: 65,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
  },

  backButton: {
    width: 80,
    flexDirection: "row",
    alignItems: "center",
  },

  backText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    color: "#555555",
    marginLeft: 2,
  },

  headerTitle: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 16,
    color: "#252525",
  },

  headerRight: {
    width: 80,
  },

  /* Scroll */
  scrollView: {
    flex: 1,
  },

  languageList: {
    paddingHorizontal: 19,
    paddingTop: 10,
    paddingBottom: 8,
  },

  /* Language Card */
  languageCard: {
    height: 49,
    borderWidth: 1,
    borderColor: "#E4E4E4",
    borderRadius: 7,
    marginBottom: 11,
    paddingHorizontal: 7,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },

  selectedCard: {
    borderColor: "#5ED6C0",
  },

  /* Flag */
  flagContainer: {
    width: 45,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
  },

  /* Language Text */
  languageInfo: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 3,
  },

  languageName: {
    fontFamily: "Poppins_500Medium",
    fontSize: 12.5,
    color: "#555555",
    marginBottom: 1,
  },

  nativeName: {
    fontFamily: "Poppins_400Regular",
    fontSize: 9,
    color: "#B8B8B8",
  },

  /* Check */
  checkContainer: {
    width: 35,
    alignItems: "center",
    justifyContent: "center",
  },

  /* Bottom */
  bottomContainer: {
    paddingHorizontal: 28,
    paddingTop: 4,
    paddingBottom: 16,
    backgroundColor: "#FFFFFF",
  },

  /* Save */
  saveButton: {
    height: 42,
    borderRadius: 6,
    backgroundColor: GREEN,
    alignItems: "center",
    justifyContent: "center",
  },

  saveText: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 13,
    color: "#FFFFFF",
  },
});