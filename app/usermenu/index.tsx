import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

const { width, height } = Dimensions.get("window");

const GREEN = "#00965E";

export default function UserMenu() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const menuItems = [
    {
      title: "History",
      icon: "receipt-outline",
      route: "/usermenu/history",
    },
    {
      title: "Complain",
      icon: "information-circle-outline",
      route: "/usermenu/complaint",
    },
    {
      title: "Referral",
      icon: "people-outline",
      route: "/usermenu/referral",
    },
    {
      title: "About Us",
      icon: "information-circle-outline",
      route: "/usermenu/about",
    },
    {
      title: "Settings",
      icon: "settings-outline",
      route: "/usermenu/settings",
    },
    {
      title: "Help and Support",
      icon: "help-circle-outline",
      route: "/usermenu/help",
    },
  ];

  return (
    <View style={styles.container}>

      {/* Background Map */}
      <View style={styles.mapBackground}>
        <View style={styles.fakeMapLine1} />
        <View style={styles.fakeMapLine2} />
        <View style={styles.fakeMapCircle} />

        <View style={styles.mapCard}>
          <Text style={styles.mapCardText}>Delivery</Text>
          <Ionicons name="heart-outline" size={20} color="#999" />
        </View>
      </View>

      {/* Dark overlay */}
      <View style={styles.overlay} />

      {/* SIDE MENU */}
      <View style={styles.menuContainer}>

        {/* Back */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <Ionicons
            name="chevron-back"
            size={23}
            color="#4B4B4B"
          />

          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        {/* PROFILE */}
        <TouchableOpacity
          style={styles.profileSection}
          onPress={() => router.push("/usermenu/profile")}
          activeOpacity={0.8}
        >
          <View style={styles.avatarContainer}>
            <Ionicons
              name="person"
              size={42}
              color="#555"
            />
          </View>

          <View style={styles.profileText}>
            <Text style={styles.name}>Raisul R.</Text>

            <Text style={styles.email}>
              raisul@email.com
            </Text>
          </View>
        </TouchableOpacity>

        {/* MENU ITEMS */}
        <View style={styles.menuList}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={item.title}
              style={[
                styles.menuItem,
                index === menuItems.length - 1 &&
                  styles.lastMenuItem,
              ]}
              onPress={() => router.push(item.route as any)}
              activeOpacity={0.7}
            >
              <Ionicons
                name={item.icon as any}
                size={15}
                color="#666"
                style={styles.menuIcon}
              />

              <Text style={styles.menuText}>
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}

          {/* LOGOUT */}
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              // Add logout logic here
              console.log("Logout");
            }}
            activeOpacity={0.7}
          >
            <Ionicons
              name="log-out-outline"
              size={16}
              color="#666"
              style={styles.menuIcon}
            />

            <Text style={styles.menuText}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },

  /* ---------------- BACKGROUND ---------------- */

  mapBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#E9E9E7",
    overflow: "hidden",
  },

  fakeMapLine1: {
    position: "absolute",
    width: height * 1.2,
    height: 18,
    backgroundColor: "#D5D5D3",
    transform: [{ rotate: "48deg" }],
    top: 100,
    left: 100,
  },

  fakeMapLine2: {
    position: "absolute",
    width: height * 1.1,
    height: 12,
    backgroundColor: "#D0D0CE",
    transform: [{ rotate: "-35deg" }],
    top: 250,
    left: 80,
  },

  fakeMapCircle: {
    position: "absolute",
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: "#D1E6DD",
    right: -90,
    top: 150,
  },

  mapCard: {
    position: "absolute",
    right: 15,
    bottom: 120,
    width: 150,
    height: 70,
    backgroundColor: "#C6E2D8",
    borderWidth: 1,
    borderColor: GREEN,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },

  mapCardText: {
    fontFamily: "Poppins_500Medium",
    color: "#666",
    fontSize: 13,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.08)",
  },

  /* ---------------- MENU ---------------- */

  menuContainer: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,

    width: width * 0.63,

    backgroundColor: "#FFFFFF",

    paddingTop: 25,

    borderTopRightRadius: 65,
    borderBottomRightRadius: 65,

    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 0,
    },
    shadowOpacity: 0.12,
    shadowRadius: 8,

    elevation: 10,
  },

  /* ---------------- BACK ---------------- */

  backButton: {
    flexDirection: "row",
    alignItems: "center",

    marginLeft: 17,
    marginTop: 0,

    height: 40,
  },

  backText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    color: "#444",
    marginLeft: 2,
  },

  /* ---------------- PROFILE ---------------- */

  profileSection: {
    marginTop: 12,
    marginLeft: 32,
  },

  avatarContainer: {
    width: 51,
    height: 51,

    borderRadius: 26,

    borderWidth: 1.5,
    borderColor: "#00A56A",

    backgroundColor: "#E8F7F1",

    justifyContent: "center",
    alignItems: "center",

    overflow: "hidden",
  },

  profileText: {
    marginTop: 9,
  },

  name: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 14,
    color: "#444",
  },

  email: {
    fontFamily: "Poppins_400Regular",
    fontSize: 9,
    color: "#555",
    marginTop: 1,
  },

  /* ---------------- MENU LIST ---------------- */

  menuList: {
    marginTop: 18,
  },

  menuItem: {
    height: 35,

    flexDirection: "row",
    alignItems: "center",

    paddingLeft: 32,

    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
  },

  lastMenuItem: {
    borderBottomWidth: 1,
  },

  menuIcon: {
    width: 18,
    marginRight: 1,
  },

  menuText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 10.5,
    color: "#4D4D4D",
  },
});