import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
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
} from "@expo-google-fonts/poppins";

export default function SettingsDeleteacc() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleDelete = () => {
    console.log("Delete account pressed");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FFFFFF"
      />

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

            <Text style={styles.backText}>
              Back
            </Text>
          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            Delete Account
          </Text>

          <View style={styles.headerRight} />
        </View>

        {/* Content */}
        <View style={styles.content}>


          <Text style={styles.title}>
            Delete Account?
          </Text>

          <Text style={styles.deleteText}>
            Are you sure you want to delete this account?
          </Text>

          <Text style={styles.warningText}>
            This action cannot be undone. Your account and
            associated information may be permanently removed.
          </Text>

          {/* Delete Button */}
          <TouchableOpacity
            style={styles.deleteButton}
            activeOpacity={0.8}
            onPress={handleDelete}
          >
            <Ionicons
              name="trash-outline"
              size={18}
              color="#FFFFFF"
            />

            <Text style={styles.deleteButtonText}>
              Delete Account
            </Text>
          </TouchableOpacity>

          {/* Cancel Button */}
          <TouchableOpacity
            style={styles.cancelButton}
            activeOpacity={0.8}
            onPress={() => router.back()}
          >
            <Text style={styles.cancelButtonText}>
              Cancel
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
  },

  /* HEADER */
  header: {
    height: 65,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#F2F2F2",
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

  /* CONTENT */
  content: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 25,
    paddingTop: 70,
  },


  title: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 21,
    color: "#333333",
    marginBottom: 12,
  },

  deleteText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 14,
    color: "#555555",
    textAlign: "center",
    lineHeight: 21,
  },

  warningText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 11,
    color: "#999999",
    textAlign: "center",
    lineHeight: 18,
    marginTop: 10,
    maxWidth: 320,
  },

  /* DELETE BUTTON */
  deleteButton: {
    width: "100%",
    height: 48,
    borderRadius: 7,
    backgroundColor: "#E53935",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 35,
  },

  deleteButtonText: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 13,
    color: "#FFFFFF",
    marginLeft: 8,
  },

  /* CANCEL BUTTON */
  cancelButton: {
    width: "100%",
    height: 48,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#D5D5D5",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
  },

  cancelButtonText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 13,
    color: "#555555",
  },
});