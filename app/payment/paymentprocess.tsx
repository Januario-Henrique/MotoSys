
import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
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

const GREEN = "#00965E";
const LIGHT_GREEN = "#E4F4EE";
const BORDER_GREEN = "#00A875";

type PaymentMethod = "visa" | "mastercard" | "paypal" | "cash";

export default function PaymentProcess() {
  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethod>("visa");

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

  // IMPORTANT:
  // This opens PaymentSuccess ON TOP of this page.
  const handleConfirmRide = () => {
    router.push("/payment/paymentsuccess");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
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

            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Payment</Text>

          <View style={styles.rightSpace} />
        </View>

        {/* Moto */}
        <View style={styles.carCard}>
          <View style={styles.carInfo}>
            <Text style={styles.carName}>
              Mustang Shelby GT
            </Text>

            <View style={styles.ratingRow}>
              <Ionicons
                name="star"
                size={18}
                color="#FFBC21"
              />

              <Text style={styles.ratingText}>
                4.9 (531 reviews)
              </Text>
            </View>
          </View>

          <Image
            source={require("../../assets/images/sipiro.png")}
            style={styles.carImage}
            resizeMode="contain"
          />
        </View>

        {/* Charge */}
        <Text style={styles.sectionTitle}>
          Charge
        </Text>

        <View style={styles.chargeRow}>
          <Text style={styles.chargeText}>
            Mustang/per hours
          </Text>

          <Text style={styles.price}>
            $200
          </Text>
        </View>

        <View style={styles.chargeRow}>
          <Text style={styles.chargeText}>
            Vat (5%)
          </Text>

          <Text style={styles.price}>
            $20
          </Text>
        </View>

        {/* Payment */}
        <Text
          style={[
            styles.sectionTitle,
            styles.paymentSectionTitle,
          ]}
        >
          Select payment method
        </Text>

        <PaymentCard
          type="visa"
          selected={paymentMethod === "visa"}
          onPress={() => setPaymentMethod("visa")}
          title="**** **** **** 8970"
          expiry="Expires: 12/26"
        />

        <PaymentCard
          type="mastercard"
          selected={paymentMethod === "mastercard"}
          onPress={() => setPaymentMethod("mastercard")}
          title="**** **** **** 8970"
          expiry="Expires: 12/26"
        />

        <PaymentCard
          type="paypal"
          selected={paymentMethod === "paypal"}
          onPress={() => setPaymentMethod("paypal")}
          title="mailaddress@mail.com"
          expiry="Expires: 12/26"
        />

        <PaymentCard
          type="cash"
          selected={paymentMethod === "cash"}
          onPress={() => setPaymentMethod("cash")}
          title="Cash"
          expiry="Expires: 12/26"
        />

        {/* Confirm */}
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={handleConfirmRide}
          activeOpacity={0.8}
        >
          <Text style={styles.confirmText}>
            Confirm Ride
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

function PaymentCard({
  type,
  selected,
  onPress,
  title,
  expiry,
}: {
  type: PaymentMethod;
  selected: boolean;
  onPress: () => void;
  title: string;
  expiry: string;
}) {
  return (
    <TouchableOpacity
      style={[
        styles.paymentCard,
        selected
          ? styles.selectedPayment
          : styles.unselectedPayment,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {type === "visa" && (
        <View style={styles.visaLogo}>
          <Text style={styles.visaText}>VISA</Text>
        </View>
      )}

      {type === "mastercard" && (
        <View style={styles.mastercardLogo}>
          <View style={styles.masterRedCircle} />
          <View style={styles.masterYellowCircle} />

          <Text style={styles.mastercardText}>
            mastercard
          </Text>
        </View>
      )}

      {type === "paypal" && (
        <View style={styles.paypalLogo}>
          <Text style={styles.paypalText}>P</Text>
        </View>
      )}

      {type === "cash" && (
        <View style={styles.cashLogo}>
          <Text style={styles.cashText}>$</Text>
        </View>
      )}

      <View style={styles.paymentDetails}>
        <Text
          style={[
            styles.paymentTitle,
            !selected && styles.fadedText,
          ]}
        >
          {title}
        </Text>

        <Text
          style={[
            styles.expiry,
            !selected && styles.fadedExpiry,
          ]}
        >
          {expiry}
        </Text>
      </View>
    </TouchableOpacity>
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

  header: {
    height: 45,
    marginTop: 12,
    marginBottom: 27,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  backButton: {
    width: 80,
    flexDirection: "row",
    alignItems: "center",
  },

  backText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
    color: "#444444",
    marginLeft: 3,
  },

  headerTitle: {
    fontFamily: "Poppins_700Bold",
    fontSize: 19,
    color: "#303030",
    marginLeft: -20,
  },

  rightSpace: {
    width: 70,
  },

  carCard: {
    height: 78,
    borderWidth: 1,
    borderColor: BORDER_GREEN,
    borderRadius: 5,
    backgroundColor: LIGHT_GREEN,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 12,
    paddingRight: 6,
  },

  carInfo: {
    flex: 1,
  },

  carName: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 17,
    color: "#666666",
    marginBottom: 6,
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  ratingText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    color: "#AAAAAA",
    marginLeft: 7,
  },

  carImage: {
    width: 105,
    height: 68,
  },

  sectionTitle: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 19,
    color: "#646464",
    marginTop: 24,
    marginBottom: 12,
  },

  chargeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 9,
  },

  chargeText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    color: "#666666",
  },

  price: {
    fontFamily: "Poppins_500Medium",
    fontSize: 14,
    color: "#666666",
  },

  paymentSectionTitle: {
    marginTop: 24,
    marginBottom: 20,
  },

  paymentCard: {
    width: "100%",
    height: 60,
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 8,
  },

  selectedPayment: {
    backgroundColor: LIGHT_GREEN,
    borderColor: BORDER_GREEN,
  },

  unselectedPayment: {
    backgroundColor: "#F3FAF7",
    borderColor: "#79D5BC",
    opacity: 0.62,
  },

  paymentDetails: {
    marginLeft: 15,
    flex: 1,
  },

  paymentTitle: {
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
    color: "#666666",
    marginBottom: 2,
  },

  expiry: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    color: "#B3B3B3",
  },

  fadedText: {
    color: "#AFAFAF",
  },

  fadedExpiry: {
    color: "#D1D1D1",
  },

  visaLogo: {
    width: 45,
    height: 30,
    borderRadius: 4,
    backgroundColor: "#071E20",
    alignItems: "center",
    justifyContent: "center",
  },

  visaText: {
    fontFamily: "Poppins_700Bold",
    color: "#FFFFFF",
    fontSize: 16,
    fontStyle: "italic",
  },

  mastercardLogo: {
    width: 48,
    height: 37,
    position: "relative",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  masterRedCircle: {
    position: "absolute",
    top: 3,
    left: 1,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#F16A78",
  },

  masterYellowCircle: {
    position: "absolute",
    top: 3,
    left: 18,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#FFD27B",
  },

  mastercardText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 6,
    color: "#999999",
  },

  paypalLogo: {
    width: 45,
    height: 35,
    justifyContent: "center",
  },

  paypalText: {
    fontFamily: "Poppins_700Bold",
    fontSize: 39,
    fontStyle: "italic",
    color: "#A5B4CF",
  },

  cashLogo: {
    width: 43,
    height: 32,
    borderRadius: 7,
    backgroundColor: "#999999",
    alignItems: "center",
    justifyContent: "center",
  },

  cashText: {
    fontFamily: "Poppins_700Bold",
    color: "#FFFFFF",
    fontSize: 25,
  },

  confirmButton: {
    height: 54,
    width: "100%",
    backgroundColor: GREEN,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 21,
  },

  confirmText: {
    fontFamily: "Poppins_600SemiBold",
    color: "#FFFFFF",
    fontSize: 16,
  },
});

