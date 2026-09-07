import { Stack } from "expo-router";
import { View, StyleSheet } from "react-native";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

export default function RootLayout() {
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
    <View style={styles.container}>
      {/* ALL SCREENS */}
      <View style={styles.screenContainer}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </View>

      {/* BOTTOM HORIZONTAL LINE */}
      <View style={styles.horizontalLine} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  screenContainer: {
    flex: 1,
  },

  horizontalLine: {
    width: "100%",
    height: 1,
    backgroundColor: "#000000",
  },
});