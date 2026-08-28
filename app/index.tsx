import React, { useRef, useState } from "react";

import {
  Dimensions,
  FlatList,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const slides = [
  {
    id: "1",
    image: require("../assets/images/home1.png"),
    title: "Anywhere you are",
    description:
      "Find and book a motorcycle driver near you quickly, easily and conveniently.",
  },
  {
    id: "2",
    image: require("../assets/images/home2.png"),
    title: "Reach your destination",
    description:
      "Enter your destination and get a clear fare based on the distance of your journey.",
  },
  {
    id: "3",
    image: require("../assets/images/home3.png"),
    title: "Manage your journeys",
    description:
      "Track your trips, earnings, fuel usage and motorcycle expenses all in one place.",
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleScroll = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / width);

    setCurrentIndex(index);
  };

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    } else {
      console.log("Get Started");
    }
  };

  const handleSkip = () => {
    flatListRef.current?.scrollToIndex({
      index: slides.length - 1,
      animated: true,
    });
  };

  return (
    <View style={styles.container}>
      {/* SKIP */}
      {currentIndex < slides.length - 1 && (
        <TouchableOpacity
          style={styles.skipButton}
          onPress={handleSkip}
          activeOpacity={0.7}
        >
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      )}

      {/* SLIDES */}
      <FlatList
        ref={flatListRef}
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            {/* IMAGE */}
            <View style={styles.imageWrapper}>
              <Image
                source={item.image}
                style={styles.image}
                resizeMode="contain"
              />
            </View>

            {/* TEXT */}
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>

              <Text style={styles.description}>
                {item.description}
              </Text>
            </View>
          </View>
        )}
      />

      {/* BOTTOM SECTION */}
      <View style={styles.bottomSection}>
        {/* PAGINATION */}
        <View style={styles.pagination}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                currentIndex === index && styles.activeDot,
              ]}
            />
          ))}
        </View>

        {/* ARROW BUTTON */}
        <TouchableOpacity
          style={styles.goButtonOuter}
          onPress={handleNext}
          activeOpacity={0.8}
        >
          <View style={styles.goButton}>
            <Ionicons
              name="arrow-forward"
              size={30}
              color="#767474"
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  // SKIP
  skipButton: {
    position: "absolute",
    top: 55,
    right: 25,
    zIndex: 10,
  },

  skipText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
    color: "#444444",
  },

  // SLIDE
  slide: {
    width: width,
    height: height,
    alignItems: "center",

    // Keeps the image and text higher
    // so there is more space before the bottom controls
    paddingTop: 80,
    paddingBottom: 220,
  },

  // IMAGE
  imageWrapper: {
    width: width * 0.9,
    height: height * 0.43,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  // TEXT
  textContainer: {
    width: width * 0.82,
    alignItems: "center",
    marginTop: 15,
  },

  title: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 25,
    color: "#3F3F3F",
    textAlign: "center",
    marginBottom: 10,
  },

  description: {
    fontFamily: "Poppins_400Regular",
    fontSize: 15.5,
    lineHeight: 21,
    color: "#999999",
    textAlign: "center",
  },

  // BOTTOM
  bottomSection: {
    position: "absolute",
    left: 0,
    right: 0,

    // Controls stay near the bottom
    bottom: 20,

    alignItems: "center",
  },

  // PAGINATION
  pagination: {
    flexDirection: "row",
    alignItems: "center",

    // Space between dots and arrow button
    marginBottom: 30,
  },

  dot: {
    width: 7,
    height: 7,
    borderRadius: 10,
    backgroundColor: "#D8D8D8",
    marginHorizontal: 4,
  },

  activeDot: {
    width: 22,
    backgroundColor: "#00B686",
  },

  // GO BUTTON
  goButtonOuter: {
    width: 86,
    height: 86,
    borderRadius: 43,

    borderWidth: 3,
    borderColor: "#00B686",

    justifyContent: "center",
    alignItems: "center",
  },

  goButton: {
    width: 70,
    height: 70,
    borderRadius: 35,

    backgroundColor: "#00B686",

    justifyContent: "center",
    alignItems: "center",
  },
});