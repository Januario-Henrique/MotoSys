import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

export default function SettingsPassword() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [oldPasswordError, setOldPasswordError] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!fontsLoaded) {
    return null;
  }

  // ---------------------------------------
  // VALIDATION
  // ---------------------------------------

  const validateOldPassword = () => {
    if (!oldPassword.trim()) {
      setOldPasswordError("Please enter your old password.");
      return false;
    }

    setOldPasswordError("");
    return true;
  };

  const validateNewPassword = () => {
    if (!newPassword.trim()) {
      setNewPasswordError("Please enter a new password.");
      return false;
    }

    if (newPassword.length < 8) {
      setNewPasswordError(
        "Password must be at least 8 characters."
      );
      return false;
    }

    if (!/[A-Z]/.test(newPassword)) {
      setNewPasswordError(
        "Password must contain at least one uppercase letter."
      );
      return false;
    }

    if (!/[a-z]/.test(newPassword)) {
      setNewPasswordError(
        "Password must contain at least one lowercase letter."
      );
      return false;
    }

    if (!/[0-9]/.test(newPassword)) {
      setNewPasswordError(
        "Password must contain at least one number."
      );
      return false;
    }

    if (newPassword === oldPassword) {
      setNewPasswordError(
        "New password must be different from your old password."
      );
      return false;
    }

    setNewPasswordError("");
    return true;
  };

  const validateConfirmPassword = () => {
    if (!confirmPassword.trim()) {
      setConfirmPasswordError(
        "Please confirm your new password."
      );
      return false;
    }

    if (confirmPassword !== newPassword) {
      setConfirmPasswordError(
        "Passwords do not match."
      );
      return false;
    }

    setConfirmPasswordError("");
    return true;
  };

  // ---------------------------------------
  // SAVE
  // ---------------------------------------

  const handleSave = () => {
    const oldValid = validateOldPassword();
    const newValid = validateNewPassword();
    const confirmValid = validateConfirmPassword();

    if (!oldValid || !newValid || !confirmValid) {
      return;
    }

    setIsSubmitting(true);

    // ---------------------------------------
    // BACKEND/API PASSWORD CHANGE GOES HERE
    // ---------------------------------------

    setTimeout(() => {
      setIsSubmitting(false);

      Alert.alert(
        "Password Changed",
        "Your password has been changed successfully.",
        [
          {
            text: "OK",
            onPress: () => router.back(),
          },
        ]
      );
    }, 800);
  };

  // ---------------------------------------
  // INPUT HANDLERS
  // ---------------------------------------

  const handleOldPasswordChange = (text: string) => {
    setOldPassword(text);

    if (oldPasswordError) {
      setOldPasswordError("");
    }
  };

  const handleNewPasswordChange = (text: string) => {
    setNewPassword(text);

    if (newPasswordError) {
      setNewPasswordError("");
    }

    // Also clear confirm error when the new password changes
    if (confirmPasswordError) {
      setConfirmPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (text: string) => {
    setConfirmPassword(text);

    if (confirmPasswordError) {
      setConfirmPasswordError("");
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FFFFFF"
      />

      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={
          Platform.OS === "ios"
            ? "padding"
            : undefined
        }
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.container}>

            {/* HEADER */}
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
                Change Password
              </Text>

              {/* Keeps title centered */}
              <View style={styles.headerRight} />

            </View>

            {/* FORM */}
            <View style={styles.form}>

              {/* OLD PASSWORD */}
              <View style={styles.inputSection}>

                <View
                  style={[
                    styles.inputContainer,
                    oldPasswordError
                      ? styles.inputError
                      : null,
                  ]}
                >
                  <TextInput
                    style={styles.input}
                    placeholder="Old Password"
                    placeholderTextColor="#C9C9C9"
                    value={oldPassword}
                    onChangeText={handleOldPasswordChange}
                    secureTextEntry={!showOldPassword}
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="password"
                    returnKeyType="next"
                    onBlur={validateOldPassword}
                  />

                  <TouchableOpacity
                    style={styles.eyeButton}
                    activeOpacity={0.7}
                    onPress={() =>
                      setShowOldPassword(
                        !showOldPassword
                      )
                    }
                  >
                    <Ionicons
                      name={
                        showOldPassword
                          ? "eye-outline"
                          : "eye-off-outline"
                      }
                      size={18}
                      color="#8E8E8E"
                    />
                  </TouchableOpacity>
                </View>

                {oldPasswordError ? (
                  <Text style={styles.errorText}>
                    {oldPasswordError}
                  </Text>
                ) : null}

              </View>

              {/* NEW PASSWORD */}
              <View style={styles.inputSection}>

                <View
                  style={[
                    styles.inputContainer,
                    newPasswordError
                      ? styles.inputError
                      : null,
                  ]}
                >
                  <TextInput
                    style={styles.input}
                    placeholder="New Password"
                    placeholderTextColor="#C9C9C9"
                    value={newPassword}
                    onChangeText={handleNewPasswordChange}
                    secureTextEntry={!showNewPassword}
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="newPassword"
                    returnKeyType="next"
                    onBlur={validateNewPassword}
                  />

                  <TouchableOpacity
                    style={styles.eyeButton}
                    activeOpacity={0.7}
                    onPress={() =>
                      setShowNewPassword(
                        !showNewPassword
                      )
                    }
                  >
                    <Ionicons
                      name={
                        showNewPassword
                          ? "eye-outline"
                          : "eye-off-outline"
                      }
                      size={18}
                      color="#8E8E8E"
                    />
                  </TouchableOpacity>
                </View>

                {newPasswordError ? (
                  <Text style={styles.errorText}>
                    {newPasswordError}
                  </Text>
                ) : null}

              </View>

              {/* CONFIRM PASSWORD */}
              <View style={styles.inputSection}>

                <View
                  style={[
                    styles.inputContainer,
                    confirmPasswordError
                      ? styles.inputError
                      : null,
                  ]}
                >
                  <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    placeholderTextColor="#C9C9C9"
                    value={confirmPassword}
                    onChangeText={
                      handleConfirmPasswordChange
                    }
                    secureTextEntry={
                      !showConfirmPassword
                    }
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="newPassword"
                    returnKeyType="done"
                    onBlur={validateConfirmPassword}
                    onSubmitEditing={handleSave}
                  />

                  <TouchableOpacity
                    style={styles.eyeButton}
                    activeOpacity={0.7}
                    onPress={() =>
                      setShowConfirmPassword(
                        !showConfirmPassword
                      )
                    }
                  >
                    <Ionicons
                      name={
                        showConfirmPassword
                          ? "eye-outline"
                          : "eye-off-outline"
                      }
                      size={18}
                      color="#8E8E8E"
                    />
                  </TouchableOpacity>
                </View>

                {confirmPasswordError ? (
                  <Text style={styles.errorText}>
                    {confirmPasswordError}
                  </Text>
                ) : null}

              </View>

              {/* SAVE BUTTON */}
              <TouchableOpacity
                style={[
                  styles.saveButton,
                  isSubmitting
                    ? styles.saveButtonDisabled
                    : null,
                ]}
                activeOpacity={0.8}
                onPress={handleSave}
                disabled={isSubmitting}
              >
                <Text style={styles.saveButtonText}>
                  {isSubmitting ? "Saving..." : "Save"}
                </Text>
              </TouchableOpacity>

            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  keyboardView: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
  },

  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  // ---------------------------------------
  // HEADER
  // ---------------------------------------

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
    fontSize: 15,
    color: "#252525",
  },

  headerRight: {
    width: 80,
  },

  // ---------------------------------------
  // FORM
  // ---------------------------------------

  form: {
    paddingHorizontal: 27,
    paddingTop: 14,
  },

  inputSection: {
    marginBottom: 10,
  },

  inputContainer: {
    height: 47,
    width: "100%",
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 7,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },

  inputError: {
    borderColor: "#E05252",
  },

  input: {
    flex: 1,
    height: "100%",
    paddingHorizontal: 14,
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
    color: "#333333",
  },

  eyeButton: {
    width: 42,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

errorText: {
  fontFamily: "Poppins_400Regular",
  fontSize: 10,
  fontStyle: "italic",
  color: "#E05252",
  marginTop: 4,
  marginLeft: 3,
},
  // ---------------------------------------
  // SAVE BUTTON
  // ---------------------------------------

  saveButton: {
    height: 41,
    width: "100%",
    borderRadius: 6,
    backgroundColor: "#009B63",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },

  saveButtonDisabled: {
    opacity: 0.6,
  },

  saveButtonText: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 12,
    color: "#FFFFFF",
  },
});