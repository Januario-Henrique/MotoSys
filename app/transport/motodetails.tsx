
import React from "react";

import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
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

const { width } = Dimensions.get("window");

const GREEN = "#00965E";
const LIGHT_GREEN = "#E4F4EE";
const BORDER_GREEN = "#00A875";

export default function MotoDetails() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  const handleRideNow = () => {
    router.push("/transport/motorent");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
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

        {/* Title */}
        <View style={styles.titleSection}>
          <Text style={styles.carTitle}>
            Mustang Shelby GT
          </Text>

          <View style={styles.ratingRow}>
            <Ionicons
              name="star"
              size={19}
              color="#FFBB20"
            />

            <Text style={styles.rating}>
              4.9
            </Text>

            <Text style={styles.reviews}>
              (531 reviews)
            </Text>
          </View>
        </View>

        {/* Moto image */}
        <View style={styles.carImageContainer}>
          <TouchableOpacity
            style={styles.imageArrow}
            activeOpacity={0.7}
          >
            <Ionicons
              name="chevron-back"
              size={29}
              color="#444444"
            />
          </TouchableOpacity>

          <Image
            source={require("../../assets/images/sipiro.png")}
            style={styles.carImage}
            resizeMode="contain"
          />

          <TouchableOpacity
            style={styles.imageArrow}
            activeOpacity={0.7}
          >
            <Ionicons
              name="chevron-forward"
              size={29}
              color="#444444"
            />
          </TouchableOpacity>
        </View>

        {/* Specifications */}
        <Text style={styles.sectionTitle}>
          Specifications
        </Text>

        <View style={styles.specificationsRow}>
          <View style={styles.specCard}>
            <Ionicons
              name="battery-charging-outline"
              size={21}
              color="#555555"
            />

            <Text style={styles.specLabel}>
              Max. power
            </Text>

            <Text style={styles.specValue}>
              2500hp
            </Text>
          </View>

          <View style={styles.specCard}>
            <Ionicons
              name="water-outline"
              size={21}
              color="#555555"
            />

            <Text style={styles.specLabel}>
              Fuel
            </Text>

            <Text style={styles.specValue}>
              10km per litre
            </Text>
          </View>

          <View style={styles.specCard}>
            <Ionicons
              name="speedometer-outline"
              size={21}
              color="#555555"
            />

            <Text style={styles.specLabel}>
              Max. speed
            </Text>

            <Text style={styles.specValue}>
              230kph
            </Text>
          </View>

          <View style={styles.specCard}>
            <Ionicons
              name="git-branch-outline"
              size={21}
              color="#555555"
            />

            <Text style={styles.specLabel}>
              0-60mph
            </Text>

            <Text style={styles.specValue}>
              2.5sec
            </Text>
          </View>
        </View>

        {/* Features */}
        <Text style={styles.sectionTitle}>
          Car features
        </Text>

        <View style={styles.featuresContainer}>
          <FeatureRow
            label="Model"
            value="GT5000"
          />

          <FeatureRow
            label="Capacity"
            value="760hp"
          />

          <FeatureRow
            label="Color"
            value="Red"
          />

          <FeatureRow
            label="Fuel type"
            value="Octane"
          />

          <FeatureRow
            label="Gear type"
            value="Automatic"
          />
        </View>

        {/* Buttons */}
        <View style={styles.actionRow}>
          <TouchableOpacity
            style={styles.bookLaterButton}
            activeOpacity={0.8}
          >
            <Text style={styles.bookLaterText}>
              Book Later
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.rideNowButton}
            activeOpacity={0.8}
            onPress={handleRideNow}
          >
            <Text style={styles.rideNowText}>
              Start Booking
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function FeatureRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <View style={styles.featureRow}>
      <Text style={styles.featureLabel}>
        {label}
      </Text>

      <Text style={styles.featureValue}>
        {value}
      </Text>
    </View>
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

  contentContainer: {
    paddingHorizontal: 15,
    paddingBottom: 25,
  },

  backButton: {
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    width: 90,
    marginTop: 13,
  },

  backText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
    color: "#444444",
    marginLeft: 3,
  },

  titleSection: {
    marginTop: 15,
  },

  carTitle: {
    fontFamily: "Poppins_700Bold",
    fontSize: 24,
    lineHeight: 29,
    color: "#5B5B5B",
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },

  rating: {
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
    color: "#B1B1B1",
    marginLeft: 8,
  },

  reviews: {
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
    color: "#B1B1B1",
    marginLeft: 4,
  },

  carImageContainer: {
    height: 205,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
  },

  imageArrow: {
    width: 32,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },

  carImage: {
    width: width - 85,
    height: 190,
  },

  sectionTitle: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 19,
    color: "#656565",
    marginTop: 14,
    marginBottom: 16,
  },

  specificationsRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  specCard: {
    width: (width - 50) / 4,
    height: 76,
    backgroundColor: LIGHT_GREEN,
    borderWidth: 1,
    borderColor: BORDER_GREEN,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 2,
  },

  specLabel: {
    fontFamily: "Poppins_400Regular",
    fontSize: 9.5,
    color: "#666666",
    textAlign: "center",
    marginTop: 4,
  },

  specValue: {
    fontFamily: "Poppins_400Regular",
    fontSize: 8,
    color: "#666666",
    textAlign: "center",
    marginTop: 1,
  },

  featuresContainer: {
    width: "100%",
  },

  featureRow: {
    height: 45,
    backgroundColor: LIGHT_GREEN,
    borderWidth: 1,
    borderColor: BORDER_GREEN,
    borderRadius: 8,
    marginBottom: 8,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  featureLabel: {
    fontFamily: "Poppins_400Regular",
    fontSize: 15,
    color: "#626262",
  },

  featureValue: {
    fontFamily: "Poppins_500Medium",
    fontSize: 15,
    color: "#626262",
  },

  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 19,
  },

  bookLaterButton: {
    width: "48%",
    height: 54,
    borderWidth: 1,
    borderColor: GREEN,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },

  bookLaterText: {
    fontFamily: "Poppins_600SemiBold",
    color: GREEN,
    fontSize: 16,
  },

  rideNowButton: {
    width: "48%",
    height: 54,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: GREEN,
  },

  rideNowText: {
    fontFamily: "Poppins_600SemiBold",
    color: "#FFFFFF",
    fontSize: 16,
  },
});

