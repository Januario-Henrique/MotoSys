
import React, { useState } from "react";

import {
  Image,
  SafeAreaView,
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

const transportOptions = [
  {
    id: "electric",
    name: "Electric Moto",
    image: require("../../assets/images/sipiro.png"),
  },
  {
    id: "petrol",
    name: "Petrol Moto",
    image: require("../../assets/images/manual.png"),
  },
];

export default function TransportType() {
  const [selected, setSelected] = useState<string | null>(null);

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleContinue = () => {
    if (!selected) return;

    router.push({
      pathname: "/transport/details",
      params: { type: selected },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="chevron-back" size={22} color="#555" />

          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Select transport</Text>

        <View style={styles.headerSpacer} />
      </View>

      {/* Title */}
      <Text style={styles.title}>Select your transport</Text>

      {/* Transport Cards */}
      <View style={styles.grid}>
        {transportOptions.map((transport) => {
          const isSelected = selected === transport.id;

          return (
            <TouchableOpacity
              key={transport.id}
              style={[
                styles.card,
                isSelected && styles.selectedCard,
              ]}
              activeOpacity={0.8}
              onPress={() => setSelected(transport.id)}
            >
              <Image
                source={transport.image}
                style={styles.transportImage}
                resizeMode="contain"
              />

              <Text
                style={[
                  styles.transportName,
                  isSelected && styles.selectedText,
                ]}
              >
                {transport.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 22,
  },

  header: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  backButton: {
    flexDirection: "row",
    alignItems: "center",
    width: 80,
  },

  backText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    color: "#555",
    marginLeft: 2,
  },

  headerTitle: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 15,
    color: "#333",
  },

  headerSpacer: {
    width: 80,
  },

  title: {
    fontFamily: "Poppins_700Bold",
    fontSize: 25,
    color: "#5B5B5B",
    textAlign: "center",
    marginTop: 15,
    marginBottom: 28,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "48%",
    height: 150,
    backgroundColor: "#e2f5ed",
    borderWidth: 1,
    borderColor: "#00B686",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
  },

  selectedCard: {
    backgroundColor: "#e2f5ed",
    borderWidth: 2,
    borderColor: "#00B686",
  },

  transportImage: {
    width: 85,
    height: 80,
    marginBottom: 8,
  },

  transportName: {
    fontFamily: "Poppins_500Medium",
    fontSize: 14,
    color: "#666",
  },

  selectedText: {
    fontFamily: "Poppins_700Bold",
    color: "#08B783",
  },
});

