import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const motos = [
  {
    name: "Honda Moto",
    type: "Manual",
    seats: "1 passenger",
    fuel: "Petrol",
  },
  {
    name: "Ampersand Moto",
    type: "Electric",
    seats: "1 passenger",
    fuel: "Electric",
  },
];

export default function MotoRides() {
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
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        bounces={true}
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
            color="#666666"
          />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        {/* Heading */}
        <View style={styles.headingContainer}>
          <Text style={styles.title}>
            Available motos for ride
          </Text>

          <Text style={styles.subtitle}>
            18 motos found
          </Text>
        </View>

        {/* Moto cards */}
        {motos.map((moto, index) => (
          <View style={styles.card} key={index}>
            {/* Top section */}
            <View style={styles.cardTop}>
              <View style={styles.infoContainer}>
                <Text style={styles.motoName}>
                  {moto.name}
                </Text>

                <View style={styles.detailsRow}>
                  <Text style={styles.detailText}>
                    {moto.type}
                  </Text>

                  <Text style={styles.separator}>|</Text>

                  <Text style={styles.detailText}>
                    {moto.seats}
                  </Text>

                  <Text style={styles.separator}>|</Text>

                  <Text style={styles.detailText}>
                    {moto.fuel}
                  </Text>
                </View>

                <View style={styles.locationRow}>
                  <Ionicons
                    name="location-sharp"
                    size={13}
                    color="#333333"
                  />

                  <Text style={styles.locationText}>
                    800m (5mins away)
                  </Text>
                </View>
              </View>

              {/* Moto image */}
              <View style={styles.imageWrapper}>
                <Image
                  source={require("../../assets/images/sipiro.png")}
                  style={styles.motoImage}
                  resizeMode="contain"
                />
              </View>
            </View>

            {/* Booking buttons */}
            <View style={styles.bookingButtons}>
              {/* Book Later */}
              <TouchableOpacity
                style={styles.bookLaterButton}
                activeOpacity={0.8}
                onPress={() => {
                  // Add Book Later navigation here
                }}
              >
                <Text style={styles.bookLaterText}>
                  Book Later
                </Text>
              </TouchableOpacity>

              {/* Book Now */}
              <TouchableOpacity
                style={styles.bookNowButton}
                activeOpacity={0.8}
                onPress={() => {
                  // Add Book Now navigation here
                }}
              >
                <Text style={styles.bookNowText}>
                  Book Now
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}

        {/* Bottom spacing */}
        <View style={styles.bottomSpace} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  scrollView: {
    flex: 1,
  },

  scrollContent: {
    paddingHorizontal: 9,
    paddingTop: 12,
    paddingBottom: 30,
  },

  /* Back button */
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    height: 35,
    marginLeft: 1,
  },

  backText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    color: "#666666",
    marginLeft: 1,
  },

  /* Heading */
  headingContainer: {
    marginTop: 25,
    marginLeft: 8,
    marginBottom: 20,
  },

  title: {
    fontFamily: "Poppins_700Bold",
    fontSize: 20,
    color: "#5A5A5A",
    lineHeight: 27,
  },

  subtitle: {
    fontFamily: "Poppins_400Regular",
    fontSize: 11,
    color: "#B8B8B8",
    marginTop: 1,
  },

  /* Card */
  card: {
    width: "100%",
    backgroundColor: "#E4F6EF",
    borderWidth: 1,
    borderColor: "#18B987",
    borderRadius: 7,
    paddingHorizontal: 8,
    paddingTop: 9,
    paddingBottom: 9,
    marginBottom: 14,
  },

  cardTop: {
    minHeight: 60,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  infoContainer: {
    flex: 1,
    paddingLeft: 0,
  },

  motoName: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 12,
    color: "#5B5B5B",
    lineHeight: 16,
  },

  detailsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 0,
  },

  detailText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 9,
    color: "#B0B0B0",
  },

  separator: {
    fontFamily: "Poppins_400Regular",
    fontSize: 9,
    color: "#C7C7C7",
    marginHorizontal: 5,
  },

  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 1,
  },

  locationText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 9,
    color: "#444444",
    marginLeft: 3,
  },

  /* Image */
  imageWrapper: {
    width: 105,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 1,
  },

  motoImage: {
    width: 100,
    height: 58,
  },

  /* Booking buttons */
  bookingButtons: {
    flexDirection: "row",
    gap: 8,
    marginTop: 8,
  },

  bookLaterButton: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#18B987",
    borderRadius: 6,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  bookLaterText: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 12,
    color: "#009B6B",
  },

  bookNowButton: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#18B987",
    borderRadius: 6,
    backgroundColor: "#18B987",
    alignItems: "center",
    justifyContent: "center",
  },

  bookNowText: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 12,
    color: "#FFFFFF",
  },

  bottomSpace: {
    height: 20,
  },
});

