
import React, { useEffect, useState } from "react";

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
import { router, useLocalSearchParams } from "expo-router";

import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import { db } from "../../firebase/config";

type Moto = {
  id: string;
  name: string;
  type: string;
  model: string;
  plateNumber: string;
  seats: string;
  pricePerKm: number;
  status: string;
  fuel?: string;
};

export default function MotoList() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  // Get the type selected on TransportType page
  const { type } = useLocalSearchParams<{ type?: string }>();

  const [motos, setMotos] = useState<Moto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMotos = async () => {
      try {
        setLoading(true);
        setError("");

        // Get the motos collection
        const motosCollection = collection(db, "motos");

        // Filter according to the selected transport type
        //
        // Electric:
        // searches type = "electric"
        //
        // Petrol:
        // searches fuel = "petrol"
        const motosQuery =
          type === "electric"
            ? query(
                motosCollection,
                where("type", "==", "electric")
              )
            : type === "petrol"
            ? query(
                motosCollection,
                where("fuel", "==", "petrol")
              )
            : motosCollection;

        const snapshot = await getDocs(motosQuery);

        const motoData: Moto[] = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<Moto, "id">),
        }));

        setMotos(motoData);
      } catch (err) {
        console.error("Error fetching motos:", err);
        setError("Could not load motos.");
      } finally {
        setLoading(false);
      }
    };

    fetchMotos();
  }, [type]);

  if (!fontsLoaded) {
    return null;
  }

  // Navigate to MotoBook
  const handleViewMotoList = () => {
    router.push("/transport/motobook");
  };

  // Choose image depending on moto type
  const getMotoImage = (motoType: string) => {
    if (motoType === "electric") {
      return require("../../assets/images/sipiro.png");
    }

    return require("../../assets/images/manual.png");
  };

  // Display friendly name
  const getTypeName = () => {
    if (type === "electric") {
      return "Electric motos";
    }

    if (type === "petrol") {
      return "Petrol motos";
    }

    return "Available motos";
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        bounces={true}
      >
        {/* Back button */}
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

          <Text style={styles.backText}>
            Back
          </Text>
        </TouchableOpacity>

        {/* Heading */}
        <View style={styles.headingContainer}>
          <Text style={styles.title}>
            {getTypeName()}
          </Text>

          <Text style={styles.subtitle}>
            {loading
              ? "Loading motos..."
              : error
              ? error
              : `${motos.length} moto${
                  motos.length !== 1 ? "s" : ""
                } found`}
          </Text>
        </View>

        {/* Empty state */}
        {!loading && !error && motos.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Ionicons
              name="bicycle-outline"
              size={40}
              color="#B8B8B8"
            />

            <Text style={styles.emptyText}>
              No {type || ""} motos available.
            </Text>
          </View>
        ) : (
          /* Moto Cards */
          motos.map((moto) => (
            <View
              style={styles.card}
              key={moto.id}
            >
              {/* Top section */}
              <View style={styles.cardTop}>
                <View style={styles.infoContainer}>

                  {/* Moto name */}
                  <Text style={styles.motoName}>
                    {moto.name}
                  </Text>

                  {/* Details */}
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
                      {moto.fuel || "Electric"}
                    </Text>
                  </View>

                  {/* Location */}
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

                {/* Moto Image */}
                <View style={styles.imageWrapper}>
                  <Image
                    source={getMotoImage(moto.type)}
                    style={styles.motoImage}
                    resizeMode="contain"
                  />
                </View>
              </View>

              {/* View Moto Button */}
              <TouchableOpacity
                style={styles.viewButton}
                activeOpacity={0.8}
                onPress={handleViewMotoList}
              >
                <Text style={styles.viewButtonText}>
                  View moto list
                </Text>
              </TouchableOpacity>
            </View>
          ))
        )}

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

  /* Button */
  viewButton: {
    height: 40,
    borderWidth: 1,
    borderColor: "#18B987",
    borderRadius: 6,
    backgroundColor: "#E8F8F2",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },

  viewButtonText: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 12,
    color: "#009B6B",
  },

  /* Empty state */
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 60,
  },

  emptyText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    color: "#999999",
    marginTop: 10,
  },

  bottomSpace: {
    height: 20,
  },
});

