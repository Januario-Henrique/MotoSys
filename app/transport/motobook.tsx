
import React from "react";

import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
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

const motos = [
  {
    id: 1,
    name: "Electric Moto",
    type: "Electric",
    seats: "1 seat",
    distance: "800m (5mins away)",
  },
  {
    id: 2,
    name: "Electric Moto",
    type: "Electric",
    seats: "1 seat",
    distance: "800m (5mins away)",
  },
  {
    id: 3,
    name: "Electric Moto",
    type: "Electric",
    seats: "1 seat",
    distance: "800m (5mins away)",
  },
  {
    id: 4,
    name: "Electric Moto",
    type: "Electric",
    seats: "1 seat",
    distance: "800m (5mins away)",
  },
];

export default function MotoList() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  // Book Now → Moto Details
  const handleBookNow = () => {
    router.push("/transport/motodetails");
  };

  // Book Later → Moto Details
  const handleBookLater = () => {
    router.push("/transport/motodetails");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {/* Back */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <Ionicons
            name="chevron-back"
            size={20}
            color="#555"
          />

          <Text style={styles.backText}>
            Back
          </Text>
        </TouchableOpacity>

        {/* Header */}
        <Text style={styles.title}>
          Available motos for ride
        </Text>

        <Text style={styles.count}>
          18 motos found
        </Text>

        {/* Moto List */}
        <View style={styles.motoList}>
          {motos.map((moto) => (
            <View
              key={moto.id}
              style={styles.motoCard}
            >
              {/* Top Section */}
              <View style={styles.cardTop}>
                <View style={styles.motoInfo}>
                  <Text style={styles.motoName}>
                    {moto.name}
                  </Text>

                  <View style={styles.detailsRow}>
                    <Text style={styles.detailText}>
                      {moto.type}
                    </Text>

                    <Text style={styles.separator}>
                      |
                    </Text>

                    <Text style={styles.detailText}>
                      {moto.seats}
                    </Text>

                    <Text style={styles.separator}>
                      |
                    </Text>

                    <Text style={styles.detailText}>
                      Petrol
                    </Text>
                  </View>

                  {/* Distance */}
                  <View style={styles.locationRow}>
                    <Ionicons
                      name="location"
                      size={12}
                      color="#555"
                    />

                    <Text style={styles.distance}>
                      {moto.distance}
                    </Text>
                  </View>
                </View>

                {/* Moto Image */}
                <Image
                  source={require("../../assets/images/sipiro.png")}
                  style={styles.motoImage}
                  resizeMode="contain"
                />
              </View>

              {/* Buttons */}
              <View style={styles.buttonsRow}>
                {/* Book Now */}
                <TouchableOpacity
                  style={styles.bookButton}
                  onPress={handleBookNow}
                  activeOpacity={0.8}
                >
                  <Text style={styles.bookText}>
                    Book Now
                  </Text>
                </TouchableOpacity>

                {/* Book Later */}
                <TouchableOpacity
                  style={styles.rideButton}
                  onPress={handleBookLater}
                  activeOpacity={0.8}
                >
                  <Text style={styles.rideText}>
                    Book Later
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  container: {
    paddingHorizontal: 18,
    paddingBottom: 20,
  },

  /* Back */
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 25,
  },

  backText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    color: "#555",
    marginLeft: 2,
  },

  /* Header */
  title: {
    fontFamily: "Poppins_700Bold",
    fontSize: 20,
    color: "#5B5B5B",
    marginBottom: 2,
  },

  count: {
    fontFamily: "Poppins_400Regular",
    fontSize: 11,
    color: "#B1B1B1",
    marginBottom: 20,
  },

  /* List */
  motoList: {
    gap: 14,
  },

  /* Moto Card */
  motoCard: {
    width: "100%",
    minHeight: 122,
    backgroundColor: "#E2F5ED",
    borderWidth: 1,
    borderColor: "#00B686",
    borderRadius: 6,
    padding: 7,
  },

  cardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    minHeight: 66,
  },

  motoInfo: {
    flex: 1,
    paddingLeft: 1,
  },

  motoName: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 12,
    color: "#666666",
    marginBottom: 0,
  },

  detailsRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  detailText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 8,
    color: "#A0A0A0",
  },

  separator: {
    fontFamily: "Poppins_400Regular",
    fontSize: 8,
    color: "#B8B8B8",
    marginHorizontal: 5,
  },

  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },

  distance: {
    fontFamily: "Poppins_500Medium",
    fontSize: 8,
    color: "#555555",
    marginLeft: 3,
  },

  /* Moto Image */
  motoImage: {
    width: 85,
    height: 55,
    marginRight: 5,
    marginTop: 2,
  },

  /* Buttons */
  buttonsRow: {
    flexDirection: "row",
    gap: 6,
    marginTop: 4,
  },

  bookButton: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#009B68",
    borderRadius: 6,
    backgroundColor: "#E8F7F3",
    alignItems: "center",
    justifyContent: "center",
  },

  bookText: {
    fontFamily: "Poppins_600SemiBold",
    color: "#009B68",
    fontSize: 11,
  },

  rideButton: {
    flex: 1,
    height: 40,
    borderRadius: 6,
    backgroundColor: "#009B68",
    alignItems: "center",
    justifyContent: "center",
  },

  rideText: {
    fontFamily: "Poppins_600SemiBold",
    color: "#FFFFFF",
    fontSize: 11,
  },
});

