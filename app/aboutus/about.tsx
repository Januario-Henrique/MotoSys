import React from "react";
import { Text } from "@react-navigation/elements";
import {
  SafeAreaView,
  View,
  
  ScrollView,
  Pressable,
  StyleSheet,
  StatusBar,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

import { useFonts } from "expo-font";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

export default function AboutUs() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FFFFFF"
      />

      {/* ================= HEADER ================= */}
      <View style={styles.header}>
        <Pressable
          onPress={() => router.back()}
          style={({ hovered, pressed }) => [
            styles.backButton,
            hovered && styles.backButtonHover,
            pressed && styles.backButtonPressed,
          ]}
        >
          {({ hovered }) => (
            <Ionicons
              name="chevron-back"
              size={23}
              color={hovered ? "#00965E" : "#222222"}
            />
          )}
        </Pressable>

        <Text style={styles.headerTitle}>About Us</Text>

        {/* Keeps title centered */}
        <View style={styles.headerSpace} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* ================= INTRO ================= */}
        <View style={styles.intro}>
          <View style={styles.greenLine} />

          <Text style={styles.smallTitle}>
            ABOUT MOTOSYS
          </Text>

          <Text style={styles.mainTitle}>
            Making every journey{" "}
            <Text style={styles.greenText}>
              easier.
            </Text>
          </Text>

          <Text style={styles.description}>
            MotoSys connects passengers and motorcycle
            drivers through a simple and convenient
            transportation platform.
          </Text>
        </View>

        {/* ================= WHO WE ARE ================= */}
        <Pressable
          style={({ hovered, pressed }) => [
            styles.section,
            hovered && styles.sectionHover,
            pressed && styles.sectionPressed,
          ]}
        >
          {({ hovered }) => (
            <>
              <View
                style={[
                  styles.iconBox,
                  hovered && styles.iconBoxHover,
                ]}
              >
                <Ionicons
                  name="people-outline"
                  size={22}
                  color="#00965E"
                />
              </View>

              <View style={styles.sectionContent}>
                <Text style={styles.sectionTitle}>
                  Who We Are
                </Text>

                <Text style={styles.sectionText}>
                  We connect people with reliable motorcycle
                  transportation while helping drivers manage
                  their journeys.
                </Text>
              </View>

              <Ionicons
                name="arrow-forward-outline"
                size={18}
                color={hovered ? "#00965E" : "#B7C5BF"}
                style={styles.cardArrow}
              />
            </>
          )}
        </Pressable>

        {/* ================= MISSION ================= */}
        <Pressable
          style={({ hovered, pressed }) => [
            styles.section,
            hovered && styles.sectionHover,
            pressed && styles.sectionPressed,
          ]}
        >
          {({ hovered }) => (
            <>
              <View
                style={[
                  styles.iconBox,
                  hovered && styles.iconBoxHover,
                ]}
              >
                <Ionicons
                  name="flag-outline"
                  size={22}
                  color="#00965E"
                />
              </View>

              <View style={styles.sectionContent}>
                <Text style={styles.sectionTitle}>
                  Our Mission
                </Text>

                <Text style={styles.sectionText}>
                  To make motorcycle transportation more
                  accessible, organized, and convenient.
                </Text>
              </View>

              <Ionicons
                name="arrow-forward-outline"
                size={18}
                color={hovered ? "#00965E" : "#B7C5BF"}
                style={styles.cardArrow}
              />
            </>
          )}
        </Pressable>

        {/* ================= VISION ================= */}
        <Pressable
          style={({ hovered, pressed }) => [
            styles.vision,
            hovered && styles.visionHover,
            pressed && styles.visionPressed,
          ]}
        >
          {({ hovered }) => (
            <>
              <View
                style={[
                  styles.visionIcon,
                  hovered && styles.visionIconHover,
                ]}
              >
                <Ionicons
                  name="bulb-outline"
                  size={22}
                  color="#FFFFFF"
                />
              </View>

              <View style={styles.visionContent}>
                <Text style={styles.visionTitle}>
                  Our Vision
                </Text>

                <Text style={styles.visionText}>
                  A smarter and more connected transportation
                  experience for everyone.
                </Text>
              </View>

              <Ionicons
                name="arrow-forward-outline"
                size={18}
                color="#FFFFFF"
                style={styles.cardArrow}
              />
            </>
          )}
        </Pressable>

        {/* ================= FOOTER ================= */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Your journey. Our commitment.
          </Text>

          <Pressable
            style={({ hovered, pressed }) => [
              styles.brandButton,
              hovered && styles.brandButtonHover,
              pressed && styles.brandButtonPressed,
            ]}
          >
            <Text
              style={[
                styles.brand,
                {
                  color: "#00965E",
                },
              ]}
            >
              MotoSys
            </Text>

            <Ionicons
              name="arrow-forward"
              size={14}
              color="#00965E"
            />
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  /* ================= CONTAINER ================= */

  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  /* ================= HEADER ================= */

  header: {
    height: 62,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
  },

  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F5F7F6",
    alignItems: "center",
    justifyContent: "center",

    ...(Platform.OS === "web"
      ? {
          cursor: "pointer",
        }
      : {}),
  },

  backButtonHover: {
    backgroundColor: "#E4F4EE",
  },

  backButtonPressed: {
    transform: [{ scale: 0.92 }],
  },

  headerTitle: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 17,
    color: "#222222",
  },

  headerSpace: {
    width: 40,
  },

  /* ================= CONTENT ================= */

  content: {
    paddingHorizontal: 22,
    paddingTop: 20,
    paddingBottom: 35,
  },

  /* ================= INTRO ================= */

  intro: {
    marginBottom: 28,
  },

  greenLine: {
    width: 38,
    height: 4,
    borderRadius: 5,
    backgroundColor: "#00965E",
    marginBottom: 12,
  },

  smallTitle: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 10,
    letterSpacing: 1,
    color: "#00965E",
    marginBottom: 8,
  },

  mainTitle: {
    fontFamily: "Poppins_700Bold",
    fontSize: 24,
    lineHeight: 33,
    color: "#222222",
    marginBottom: 10,
  },

  greenText: {
    fontFamily: "Poppins_700Bold",
    color: "#00965E",
  },

  description: {
    fontFamily: "Poppins_400Regular",
    fontSize: 12.5,
    lineHeight: 21,
    color: "#707070",
  },

  /* ================= NORMAL CARDS ================= */

  section: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#F8FBF9",

    borderRadius: 15,

    padding: 15,

    marginBottom: 13,

    borderWidth: 1,
    borderColor: "#E7F2ED",

    ...(Platform.OS === "web"
      ? {
          cursor: "pointer",
          transitionDuration: "180ms",
        }
      : {}),
  },

  sectionHover: {
    backgroundColor: "#F1FAF6",
    borderColor: "#00965E",

    ...(Platform.OS === "web"
      ? {
          transform: [{ translateY: -2 }],
        }
      : {}),
  },

  sectionPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },

  /* ================= ICON ================= */

  iconBox: {
    width: 42,
    height: 42,

    borderRadius: 12,

    backgroundColor: "#E4F4EE",

    alignItems: "center",
    justifyContent: "center",

    marginRight: 12,
  },

  iconBoxHover: {
    backgroundColor: "#D5F0E5",
  },

  /* ================= CARD CONTENT ================= */

  sectionContent: {
    flex: 1,
  },

  sectionTitle: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 14,
    color: "#222222",
    marginBottom: 4,
  },

  sectionText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 11.5,
    lineHeight: 18,
    color: "#707070",
  },

  cardArrow: {
    marginLeft: 8,
  },

  /* ================= VISION ================= */

  vision: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#00965E",

    borderRadius: 15,

    padding: 16,

    marginTop: 2,

    ...(Platform.OS === "web"
      ? {
          cursor: "pointer",
          transitionDuration: "180ms",
        }
      : {}),
  },

  visionHover: {
    backgroundColor: "#008554",

    ...(Platform.OS === "web"
      ? {
          transform: [{ translateY: -2 }],
        }
      : {}),
  },

  visionPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },

  visionIcon: {
    width: 42,
    height: 42,

    borderRadius: 12,

    backgroundColor: "rgba(255,255,255,0.18)",

    alignItems: "center",
    justifyContent: "center",

    marginRight: 12,
  },

  visionIconHover: {
    backgroundColor: "rgba(255,255,255,0.25)",
  },

  visionContent: {
    flex: 1,
  },

  visionTitle: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 14,
    color: "#FFFFFF",
    marginBottom: 3,
  },

  visionText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 11.5,
    lineHeight: 18,
    color: "#EFFFF7",
  },

  /* ================= FOOTER ================= */

  footer: {
    alignItems: "center",
    marginTop: 35,
  },

  footerText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 11,
    color: "#999999",
    marginBottom: 5,
  },

  brandButton: {
    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: 10,
    paddingVertical: 4,

    borderRadius: 8,

    ...(Platform.OS === "web"
      ? {
          cursor: "pointer",
        }
      : {}),
  },

  brandButtonHover: {
    backgroundColor: "#E4F4EE",
  },

  brandButtonPressed: {
    transform: [{ scale: 0.95 }],
  },

  brand: {
    fontFamily: "Poppins_700Bold",
    fontSize: 16,
    marginRight: 5,
  },
});