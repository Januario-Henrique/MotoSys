import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

export default function MotoRide() {
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
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <View style={styles.container}>

        {/* ================= MAP ================= */}
        <View style={styles.mapContainer}>

          {/* Fake map background */}
          <View style={styles.mapBackground}>

            {/* Roads */}
            <View style={[styles.road, styles.road1]} />
            <View style={[styles.road, styles.road2]} />
            <View style={[styles.road, styles.road3]} />
            <View style={[styles.road, styles.road4]} />
            <View style={[styles.road, styles.road5]} />
            <View style={[styles.road, styles.road6]} />

            {/* Green route */}
            <View style={styles.route} />

            {/* Start marker */}
            <View style={styles.startMarker}>
              <Ionicons
                name="location"
                size={26}
                color="#D0003B"
              />
            </View>

            {/* Destination marker */}
            <View style={styles.destinationMarker}>
              <Ionicons
                name="location"
                size={27}
                color="#10B981"
              />
            </View>

          </View>

          {/* Menu button */}
          <TouchableOpacity style={styles.menuButton}>
            <Ionicons
              name="menu"
              size={24}
              color="#FFFFFF"
            />
          </TouchableOpacity>

          {/* Notification */}
          <TouchableOpacity style={styles.notificationButton}>
            <Ionicons
              name="notifications-outline"
              size={21}
              color="#777777"
            />
          </TouchableOpacity>

          {/* Close */}
          <TouchableOpacity style={styles.closeButton}>
            <Ionicons
              name="close"
              size={18}
              color="#888888"
            />
          </TouchableOpacity>

          {/* Bottom map handle */}
          <View style={styles.mapHandle} />
        </View>

        {/* ================= RIDE STATUS ================= */}
        <View style={styles.statusSection}>
          <Text style={styles.statusText}>
            Your driver is coming in 3:35
          </Text>
        </View>

        {/* ================= DRIVER ================= */}
        <View style={styles.driverSection}>

          {/* Driver image */}
          <Image
            source={{
              uri: "https://randomuser.me/api/portraits/men/32.jpg",
            }}
            style={styles.driverImage}
          />

          <View style={styles.driverInfo}>
            <Text style={styles.driverName}>
              Sergio Ramasi
            </Text>

            <View style={styles.driverLocation}>
              <Ionicons
                name="location"
                size={12}
                color="#999999"
              />
              <Text style={styles.smallText}>
                800m (5mins away)
              </Text>
            </View>

            <View style={styles.ratingRow}>
              <Ionicons
                name="star"
                size={12}
                color="#F5B400"
              />
              <Text style={styles.ratingText}>
                4.9 (531 reviews)
              </Text>
            </View>
          </View>

          {/* Motorcycle / vehicle */}
          <Image
            source={{
              uri: "https://pngimg.com/uploads/car/car_PNG1640.png",
            }}
            style={styles.vehicleImage}
            resizeMode="contain"
          />

        </View>

        {/* ================= PAYMENT ================= */}
        <View style={styles.paymentSection}>

          <Text style={styles.paymentTitle}>
            Payment method
          </Text>

          <Text style={styles.price}>
            $220.00
          </Text>

          {/* Card */}
          <View style={styles.card}>

            <View style={styles.visaBox}>
              <Text style={styles.visaText}>
                VISA
              </Text>
            </View>

            <View style={styles.cardDetails}>
              <Text style={styles.cardNumber}>
                **** **** **** 8970
              </Text>

              <Text style={styles.expiry}>
                Expires: 12/26
              </Text>
            </View>

          </View>

          {/* ================= BUTTONS ================= */}
          <View style={styles.buttonsRow}>

            <TouchableOpacity
              style={styles.callButton}
              activeOpacity={0.8}
            >
              <Ionicons
                name="call-outline"
                size={18}
                color="#009B68"
              />
              <Text style={styles.callText}>
                Call
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.messageButton}
              activeOpacity={0.8}
            >
              <Ionicons
                name="chatbubble-outline"
                size={18}
                color="#FFFFFF"
              />
              <Text style={styles.messageText}>
                Message
              </Text>
            </TouchableOpacity>

          </View>
        </View>

        {/* Bottom iPhone indicator */}
        <View style={styles.bottomIndicator} />

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

  /* ================= MAP ================= */

  mapContainer: {
    height: 340,
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#F0F0EE",
  },

  mapBackground: {
    flex: 1,
    backgroundColor: "#F1F1EF",
    overflow: "hidden",
  },

  road: {
    position: "absolute",
    backgroundColor: "#FFFFFF",
  },

  road1: {
    width: 38,
    height: 500,
    left: 48,
    top: -70,
    transform: [{ rotate: "25deg" }],
  },

  road2: {
    width: 32,
    height: 500,
    left: 145,
    top: -100,
    transform: [{ rotate: "-24deg" }],
  },

  road3: {
    width: 30,
    height: 500,
    left: 225,
    top: -100,
    transform: [{ rotate: "25deg" }],
  },

  road4: {
    width: 1000,
    height: 25,
    left: -100,
    top: 180,
  },

  road5: {
    width: 700,
    height: 20,
    left: -100,
    top: 245,
    transform: [{ rotate: "4deg" }],
  },

  road6: {
    width: 700,
    height: 18,
    left: -100,
    top: 90,
    transform: [{ rotate: "-7deg" }],
  },

  /* Green route */
  route: {
    position: "absolute",
    width: 6,
    height: 190,
    backgroundColor: "#10B981",
    left: "51%",
    top: 120,
    borderRadius: 10,
    transform: [{ rotate: "-22deg" }],
  },

  startMarker: {
    position: "absolute",
    left: "39%",
    top: 100,
    transform: [{ rotate: "-20deg" }],
  },

  destinationMarker: {
    position: "absolute",
    left: "57%",
    top: 270,
    transform: [{ rotate: "-20deg" }],
  },

  /* Menu */
  menuButton: {
    position: "absolute",
    top: 45,
    left: 12,
    width: 27,
    height: 27,
    borderRadius: 4,
    backgroundColor: "#8DD8B8",
    alignItems: "center",
    justifyContent: "center",
  },

  notificationButton: {
    position: "absolute",
    top: 45,
    right: 13,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },

  closeButton: {
    position: "absolute",
    right: 8,
    bottom: 45,
    width: 28,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
  },

  mapHandle: {
    position: "absolute",
    bottom: 20,
    left: "35%",
    width: 100,
    height: 4,
    borderRadius: 5,
    backgroundColor: "#999999",
  },

  /* ================= STATUS ================= */

  statusSection: {
    height: 47,
    justifyContent: "center",
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },

  statusText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 12,
    color: "#555555",
  },

  /* ================= DRIVER ================= */

  driverSection: {
    height: 69,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },

  driverImage: {
    width: 45,
    height: 45,
    borderRadius: 4,
    marginRight: 9,
  },

  driverInfo: {
    flex: 1,
  },

  driverName: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 13,
    color: "#555555",
    marginBottom: 1,
  },

  driverLocation: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 1,
  },

  smallText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 8,
    color: "#999999",
    marginLeft: 2,
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  ratingText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 8,
    color: "#999999",
    marginLeft: 3,
  },

  vehicleImage: {
    width: 67,
    height: 40,
    marginRight: 4,
  },

  /* ================= PAYMENT ================= */

  paymentSection: {
    flex: 1,
    paddingHorizontal: 11,
    paddingTop: 17,
  },

  paymentTitle: {
    fontFamily: "Poppins_500Medium",
    fontSize: 13,
    color: "#666666",
  },

  price: {
    position: "absolute",
    right: 10,
    top: 13,
    fontFamily: "Poppins_600SemiBold",
    fontSize: 20,
    color: "#666666",
  },

  card: {
    marginTop: 14,
    height: 44,
    borderWidth: 1,
    borderColor: "#10B981",
    borderRadius: 4,
    backgroundColor: "#E3F5EE",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 11,
  },

  visaBox: {
    width: 34,
    height: 24,
    backgroundColor: "#050505",
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 9,
  },

  visaText: {
    color: "#FFFFFF",
    fontFamily: "Poppins_700Bold",
    fontSize: 10,
    fontStyle: "italic",
  },

  cardDetails: {
    justifyContent: "center",
  },

  cardNumber: {
    fontFamily: "Poppins_500Medium",
    fontSize: 10,
    color: "#777777",
    letterSpacing: 1,
  },

  expiry: {
    fontFamily: "Poppins_400Regular",
    fontSize: 8,
    color: "#AAAAAA",
    marginTop: 1,
  },

  /* ================= BUTTONS ================= */

  buttonsRow: {
    flexDirection: "row",
    gap: 13,
    marginTop: 23,
  },

  callButton: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#009B68",
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 7,
    backgroundColor: "#FFFFFF",
  },

  callText: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 12,
    color: "#009B68",
  },

  messageButton: {
    flex: 1,
    height: 40,
    borderRadius: 6,
    backgroundColor: "#009B68",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 7,
  },

  messageText: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 12,
    color: "#FFFFFF",
  },

  /* ================= BOTTOM ================= */

  bottomIndicator: {
    position: "absolute",
    bottom: 5,
    left: "34%",
    width: 105,
    height: 4,
    backgroundColor: "#111111",
    borderRadius: 5,
  },
});