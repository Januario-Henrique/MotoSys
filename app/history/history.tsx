import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

type Tab = "Upcoming" | "Completed" | "Cancelled";

interface Ride {
  id: number;
  passenger: string;
  vehicle: string;
  time: string;
}

const upcomingRides: Ride[] = [
  {
    id: 1,
    passenger: "Nate",
    vehicle: "Mustang Shelby GT",
    time: "Today at 09:20 am",
  },
  {
    id: 2,
    passenger: "Henry",
    vehicle: "Mustang Shelby GT",
    time: "Today at 10:20 am",
  },
  {
    id: 3,
    passenger: "Willam",
    vehicle: "Mustang Shelby GT",
    time: "Tomorrow at 09:20 am",
  },
  {
    id: 4,
    passenger: "Nate",
    vehicle: "Mustang Shelby GT",
    time: "Today at 09:20 am",
  },
  {
    id: 5,
    passenger: "Henry",
    vehicle: "Mustang Shelby GT",
    time: "Today at 10:20 am",
  },
  {
    id: 6,
    passenger: "Willam",
    vehicle: "Mustang Shelby GT",
    time: "Tomorrow at 09:20 am",
  },
  {
    id: 7,
    passenger: "Henry",
    vehicle: "Mustang Shelby GT",
    time: "Today at 10:20 am",
  },
  {
    id: 8,
    passenger: "Willam",
    vehicle: "Mustang Shelby GT",
    time: "Tomorrow at 09:20 am",
  },
];

const completedRides: Ride[] = [
  {
    id: 1,
    passenger: "Nate",
    vehicle: "Mustang Shelby GT",
    time: "Yesterday at 09:20 am",
  },
  {
    id: 2,
    passenger: "Henry",
    vehicle: "Mustang Shelby GT",
    time: "Yesterday at 10:20 am",
  },
];

const cancelledRides: Ride[] = [
  {
    id: 1,
    passenger: "Willam",
    vehicle: "Mustang Shelby GT",
    time: "Yesterday at 09:20 am",
  },
];

export default function History() {
  const [activeTab, setActiveTab] = useState<Tab>("Upcoming");

  const getRides = () => {
    if (activeTab === "Upcoming") {
      return upcomingRides;
    }

    if (activeTab === "Completed") {
      return completedRides;
    }

    return cancelledRides;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <View style={styles.container}>

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons
              name="chevron-back"
              size={21}
              color="#555555"
            />

            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>

          <Text style={styles.title}>History</Text>

          {/* Empty space to keep title centered */}
          <View style={styles.headerRight} />
        </View>

        {/* Tabs */}
        <View style={styles.tabsContainer}>
          {(["Upcoming", "Completed", "Cancelled"] as Tab[]).map(
            (tab) => {
              const isActive = activeTab === tab;

              return (
                <TouchableOpacity
                  key={tab}
                  style={[
                    styles.tab,
                    isActive && styles.activeTab,
                  ]}
                  onPress={() => setActiveTab(tab)}
                  activeOpacity={0.8}
                >
                  <Text
                    style={[
                      styles.tabText,
                      isActive && styles.activeTabText,
                    ]}
                  >
                    {tab}
                  </Text>
                </TouchableOpacity>
              );
            }
          )}
        </View>

        {/* Ride List */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        >
          {getRides().map((ride) => (
            <TouchableOpacity
              key={ride.id}
              style={styles.rideCard}
              activeOpacity={0.8}
            >
              <View style={styles.rideInfo}>
                <Text style={styles.passenger}>
                  {ride.passenger}
                </Text>

                <Text style={styles.vehicle}>
                  {ride.vehicle}
                </Text>
              </View>

              <Text style={styles.time}>
                {ride.time}
              </Text>
            </TouchableOpacity>
          ))}

          {getRides().length === 0 && (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>
                No rides found
              </Text>
            </View>
          )}
        </ScrollView>
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
    paddingHorizontal: 11,
  },

  /* Header */

  header: {
    height: 65,
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
    fontSize: 14,
    color: "#555555",
    marginLeft: 3,
    fontFamily: "Poppins_400Regular",
  },

  title: {
    fontSize: 16,
    color: "#202020",
    fontFamily: "Poppins_600SemiBold",
  },

  headerRight: {
    width: 80,
  },

  /* Tabs */

  tabsContainer: {
    height: 37,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#18C89B",
    borderRadius: 6,
    overflow: "hidden",
    marginHorizontal: 0,
    marginBottom: 22,
  },

  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E9F7F3",
  },

  activeTab: {
    backgroundColor: "#10B98B",
  },

  tabText: {
    fontSize: 10,
    color: "#666666",
    fontFamily: "Poppins_500Medium",
  },

  activeTabText: {
    color: "#FFFFFF",
    fontFamily: "Poppins_600SemiBold",
  },

  /* List */

  listContainer: {
    paddingBottom: 25,
  },

  rideCard: {
    minHeight: 49,
    borderWidth: 1,
    borderColor: "#8ADCC8",
    borderRadius: 6,
    marginBottom: 11,
    paddingHorizontal: 8,
    paddingVertical: 7,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  rideInfo: {
    flex: 1,
  },

  passenger: {
    fontSize: 12,
    color: "#444444",
    fontFamily: "Poppins_500Medium",
    marginBottom: 1,
  },

  vehicle: {
    fontSize: 9,
    color: "#B4B4B4",
    fontFamily: "Poppins_400Regular",
  },

  time: {
    fontSize: 9,
    color: "#555555",
    fontFamily: "Poppins_500Medium",
    textAlign: "right",
  },

  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },

  emptyText: {
    fontSize: 13,
    color: "#999999",
    fontFamily: "Poppins_400Regular",
  },
});