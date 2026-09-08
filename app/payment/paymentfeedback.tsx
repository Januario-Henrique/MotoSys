
import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  TextInput,
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
} from "@expo-google-fonts/poppins";

import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../../firebase/config";

const GREEN = "#00965E";

export default function Feedback() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  // Back button
  const handleClose = () => {
    if (submitting) {
      return;
    }

    router.push("/payment/paymentmethod");
  };

  // Submit feedback
  const handleSubmit = async () => {
    if (rating === 0 || submitting) {
      return;
    }

    try {
      setSubmitting(true);

      await addDoc(collection(db, "ratings"), {
        driverId: "driver001",
        motoId: "moto001",
        rating: rating,
        comment: comment.trim(),
        createdAt: serverTimestamp(),
      });

      console.log("Feedback saved successfully!");

      router.push("/transport/motothank");
    } catch (error) {
      console.error("Error saving feedback:", error);
      setSubmitting(false);
    }
  };

  return (
    <View style={styles.overlay}>

      {/* Space showing the page underneath */}
      <View style={styles.transparentArea} />

      {/* Feedback Bottom Sheet */}
      <View style={styles.bottomSheet}>

        {/* Small handle */}
        <View style={styles.handle} />

        {/* Back button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={handleClose}
          activeOpacity={0.7}
          disabled={submitting}
        >
          <Ionicons
            name="chevron-back"
            size={20}
            color="#555555"
          />

          <Text style={styles.backText}>
            Back
          </Text>
        </TouchableOpacity>

        {/* Content */}
        <View style={styles.content}>

          {/* Title */}
          <Text style={styles.title}>
            Rate Your Trip
          </Text>

          {/* Description */}
          <Text style={styles.description}>
            How was your experience with
          </Text>

          {/* Driver name */}
          <Text style={styles.driverName}>
            Jean Claude?
          </Text>

          {/* Stars */}
          <View style={styles.starsContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity
                key={star}
                onPress={() => setRating(star)}
                activeOpacity={0.7}
                disabled={submitting}
              >
                <Ionicons
                  name={
                    star <= rating
                      ? "star"
                      : "star-outline"
                  }
                  size={38}
                  color={
                    star <= rating
                      ? "#FFBC21"
                      : "#BDBDBD"
                  }
                />
              </TouchableOpacity>
            ))}
          </View>

          {/* Rating text */}
          <Text style={styles.ratingText}>
            {rating === 0
              ? "Tap a star to rate your trip"
              : rating === 1
              ? "Very poor"
              : rating === 2
              ? "Poor"
              : rating === 3
              ? "Good"
              : rating === 4
              ? "Very good"
              : "Excellent!"}
          </Text>

          {/* Comment input */}
          <TextInput
            style={styles.commentBox}
            placeholder="Tell us about your experience..."
            placeholderTextColor="#B0B0B0"
            value={comment}
            onChangeText={setComment}
            multiline
            textAlignVertical="top"
            editable={!submitting}
          />

        </View>

        {/* Submit */}
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={[
              styles.submitButton,
              rating === 0 && styles.disabledButton,
            ]}
            onPress={handleSubmit}
            disabled={rating === 0 || submitting}
            activeOpacity={0.8}
          >
            <Text style={styles.submitText}>
              {submitting ? "Submitting..." : "Submit"}
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.18)",
  },

  transparentArea: {
    flex: 0.30,
  },

  bottomSheet: {
    flex: 0.70,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 15,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 10,
  },

  handle: {
    width: 45,
    height: 4,
    borderRadius: 4,
    backgroundColor: "#D0D0D0",
    alignSelf: "center",
    marginTop: 9,
  },

  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 14,
    marginLeft: 1,
    height: 35,
  },

  backText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    color: "#555555",
    marginLeft: 1,
  },

  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },

  title: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 23,
    color: "#5A5A5A",
    marginBottom: 10,
  },

  description: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    color: "#666666",
    textAlign: "center",
  },

  driverName: {
    fontFamily: "Poppins_500Medium",
    fontSize: 15,
    color: "#666666",
    marginTop: 2,
  },

  starsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginTop: 22,
  },

  ratingText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    color: "#999999",
    marginTop: 10,
  },

  commentBox: {
    width: "100%",
    height: 85,
    borderWidth: 1,
    borderColor: "#D5D5D5",
    borderRadius: 8,
    marginTop: 20,
    padding: 12,

    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    color: "#555555",
  },

  bottomContainer: {
    paddingBottom: 18,
  },

  submitButton: {
    width: "100%",
    height: 52,
    borderRadius: 8,
    backgroundColor: GREEN,
    alignItems: "center",
    justifyContent: "center",
  },

  disabledButton: {
    backgroundColor: "#A8D8C6",
  },

  submitText: {
    fontFamily: "Poppins_600SemiBold",
    color: "#FFFFFF",
    fontSize: 16,
  },
});

