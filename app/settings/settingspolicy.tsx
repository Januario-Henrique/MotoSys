import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
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

export default function SettingsPolicy() {
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
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FFFFFF"
      />

      <View style={styles.container}>

        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            activeOpacity={0.7}
            onPress={() => router.back()}
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

          <Text style={styles.headerTitle}>
            Privacy Policy
          </Text>

          <View style={styles.headerRight} />
        </View>

        {/* POLICY CONTENT */}
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >

          {/* TITLE */}
          <Text style={styles.policyTitle}>
            Privacy Policy
          </Text>

          <Text style={styles.lastUpdated}>
            Last Updated: September 6, 2026
          </Text>

          <Text style={styles.paragraph}>
            Welcome to{" "}
            <Text style={styles.bold}>MotoSys</Text>.
            Your privacy is important to us. This Privacy Policy
            explains how we collect, use, store, and protect your
            information when you use the MotoSys mobile application
            and related services.
          </Text>

          <Text style={styles.paragraph}>
            By creating an account or using MotoSys, you agree to
            the practices described in this Privacy Policy.
          </Text>

          {/* SECTION 1 */}
          <Text style={styles.sectionTitle}>
            1. Information We Collect
          </Text>

          <Text style={styles.paragraph}>
            When you use MotoSys, we may collect the following
            information:
          </Text>

          <Text style={styles.subTitle}>
            Personal Information
          </Text>

          <Text style={styles.paragraph}>
            When you create an account or use our services, we may
            collect:
          </Text>

          <Bullet text="Full name" />
          <Bullet text="Email address" />
          <Bullet text="Phone number" />
          <Bullet text="Password or authentication information" />
          <Bullet text="Profile information" />
          <Bullet text="Account type, such as passenger or driver" />

          <Text style={styles.subTitle}>
            Location Information
          </Text>

          <Text style={styles.paragraph}>
            MotoSys may collect your location information when you
            use our transportation services.
          </Text>

          <Text style={styles.paragraph}>
            Location information may be used to:
          </Text>

          <Bullet text="Help drivers locate passengers" />
          <Bullet text="Help passengers locate their drivers" />
          <Bullet text="Provide accurate pickup and destination information" />
          <Bullet text="Track an active ride" />
          <Bullet text="Calculate estimated fares" />
          <Bullet text="Improve the safety and reliability of our services" />

          <Text style={styles.paragraph}>
            You can manage location permissions through your device
            settings. Some features may not work properly if
            location access is disabled.
          </Text>

          <Text style={styles.subTitle}>
            Ride Information
          </Text>

          <Text style={styles.paragraph}>
            We may collect information related to your rides,
            including:
          </Text>

          <Bullet text="Pickup location" />
          <Bullet text="Destination" />
          <Bullet text="Ride date and time" />
          <Bullet text="Driver information" />
          <Bullet text="Passenger information" />
          <Bullet text="Estimated and final fare" />
          <Bullet text="Ride status" />
          <Bullet text="Booking history" />
          <Bullet text="Ride-related communications" />

          <Text style={styles.subTitle}>
            Payment Information
          </Text>

          <Text style={styles.paragraph}>
            If payment services are available through MotoSys, we
            may collect information necessary to process payments.
          </Text>

          <Text style={styles.paragraph}>
            Payment information may be processed by third-party
            payment providers. These providers may have their own
            privacy policies and security practices.
          </Text>

          {/* SECTION 2 */}
          <Text style={styles.sectionTitle}>
            2. How We Use Your Information
          </Text>

          <Text style={styles.paragraph}>
            We may use the information we collect to:
          </Text>

          <Bullet text="Create and manage your account" />
          <Bullet text="Process ride bookings" />
          <Bullet text="Connect passengers with drivers" />
          <Bullet text="Provide location-based transportation services" />
          <Bullet text="Calculate estimated fares" />
          <Bullet text="Process payments" />
          <Bullet text="Send booking and ride notifications" />
          <Bullet text="Communicate with you about your account or rides" />
          <Bullet text="Improve MotoSys and its services" />
          <Bullet text="Maintain the security of our platform" />
          <Bullet text="Detect and prevent fraud or misuse" />
          <Bullet text="Provide customer support" />
          <Bullet text="Comply with applicable laws and regulations" />

          {/* SECTION 3 */}
          <Text style={styles.sectionTitle}>
            3. How We Share Your Information
          </Text>

          <Text style={styles.paragraph}>
            We do not sell your personal information.
          </Text>

          <Text style={styles.paragraph}>
            We may share certain information when necessary to
            provide MotoSys services.
          </Text>

          <Text style={styles.subTitle}>
            With Drivers
          </Text>

          <Text style={styles.paragraph}>
            When you request a ride, information necessary for the
            driver to provide the ride may be shared with that
            driver. This may include your name, pickup location,
            destination, and relevant booking information.
          </Text>

          <Text style={styles.subTitle}>
            With Passengers
          </Text>

          <Text style={styles.paragraph}>
            Drivers may have certain information displayed to
            passengers, such as their name, profile information,
            motorcycle details, and ride-related information.
          </Text>

          <Text style={styles.subTitle}>
            With Service Providers
          </Text>

          <Text style={styles.paragraph}>
            MotoSys may use third-party service providers to support
            the application, including services for:
          </Text>

          <Bullet text="Authentication" />
          <Bullet text="Cloud storage" />
          <Bullet text="Maps and location services" />
          <Bullet text="Payment processing" />
          <Bullet text="Notifications" />
          <Bullet text="Analytics" />
          <Bullet text="Application hosting" />

          <Text style={styles.paragraph}>
            These providers may process information on our behalf.
          </Text>

          <Text style={styles.subTitle}>
            Legal Requirements
          </Text>

          <Text style={styles.paragraph}>
            We may disclose information when we believe it is
            necessary to:
          </Text>

          <Bullet text="Comply with applicable laws" />
          <Bullet text="Respond to lawful requests from authorities" />
          <Bullet text="Protect our rights or property" />
          <Bullet text="Prevent fraud or abuse" />
          <Bullet text="Protect the safety of users or other individuals" />

          {/* SECTION 4 */}
          <Text style={styles.sectionTitle}>
            4. Location Services
          </Text>

          <Text style={styles.paragraph}>
            Location services are an important part of the MotoSys
            experience.
          </Text>

          <Text style={styles.paragraph}>
            When you grant location permission, MotoSys may access
            your device's location to provide transportation-related
            features.
          </Text>

          <Text style={styles.paragraph}>
            Depending on the features you use, location information
            may be collected while:
          </Text>

          <Bullet text="Searching for a ride" />
          <Bullet text="Requesting a ride" />
          <Bullet text="Waiting for a driver" />
          <Bullet text="Completing an active ride" />

          <Text style={styles.paragraph}>
            You can disable location permissions through your device
            settings. However, disabling location services may
            prevent some transportation features from working
            properly.
          </Text>

          {/* SECTION 5 */}
          <Text style={styles.sectionTitle}>
            5. Driver Information
          </Text>

          <Text style={styles.paragraph}>
            If you register as a driver, MotoSys may collect
            additional information necessary to provide driver
            services.
          </Text>

          <Text style={styles.paragraph}>
            This may include:
          </Text>

          <Bullet text="Driver profile information" />
          <Bullet text="Motorcycle information" />
          <Bullet text="Ride history" />
          <Bullet text="Earnings information" />
          <Bullet text="Fuel consumption information" />
          <Bullet text="Expense information" />
          <Bullet text="Motorcycle maintenance information" />
          <Bullet text="Account activity" />

          <Text style={styles.paragraph}>
            Where required, certain driver information may be
            reviewed to help maintain the safety and reliability of
            the platform.
          </Text>

          {/* SECTION 6 */}
          <Text style={styles.sectionTitle}>
            6. Notifications
          </Text>

          <Text style={styles.paragraph}>
            MotoSys may send notifications related to your account
            and transportation services.
          </Text>

          <Text style={styles.paragraph}>
            These may include:
          </Text>

          <Bullet text="Ride requests" />
          <Bullet text="Booking confirmations" />
          <Bullet text="Driver arrival notifications" />
          <Bullet text="Ride status updates" />
          <Bullet text="Payment notifications" />
          <Bullet text="Account notifications" />
          <Bullet text="Important service announcements" />

          <Text style={styles.paragraph}>
            You can manage notification permissions through your
            device settings.
          </Text>

          {/* SECTION 7 */}
          <Text style={styles.sectionTitle}>
            7. Data Security
          </Text>

          <Text style={styles.paragraph}>
            We take reasonable measures to protect your personal
            information against unauthorized access, alteration,
            disclosure, or destruction.
          </Text>

          <Text style={styles.paragraph}>
            However, no internet-based application or electronic
            storage system can be guaranteed to be completely secure.
          </Text>

          <Text style={styles.paragraph}>
            You should also protect your account by keeping your
            login information confidential and using a strong
            password.
          </Text>

          {/* SECTION 8 */}
          <Text style={styles.sectionTitle}>
            8. Data Retention
          </Text>

          <Text style={styles.paragraph}>
            We retain personal information for as long as reasonably
            necessary to:
          </Text>

          <Bullet text="Provide our services" />
          <Bullet text="Maintain your account" />
          <Bullet text="Keep necessary ride and transaction records" />
          <Bullet text="Resolve disputes" />
          <Bullet text="Prevent fraud and abuse" />
          <Bullet text="Meet legal and regulatory requirements" />

          <Text style={styles.paragraph}>
            When information is no longer required, we may delete or
            anonymize it in accordance with our data retention
            practices.
          </Text>

          {/* SECTION 9 */}
          <Text style={styles.sectionTitle}>
            9. Your Rights
          </Text>

          <Text style={styles.paragraph}>
            Depending on applicable law, you may have rights
            regarding your personal information.
          </Text>

          <Text style={styles.paragraph}>
            These may include the right to:
          </Text>

          <Bullet text="Access your personal information" />
          <Bullet text="Request correction of inaccurate information" />
          <Bullet text="Request deletion of certain information" />
          <Bullet text="Withdraw certain permissions" />
          <Bullet text="Manage location access" />
          <Bullet text="Manage notification permissions" />
          <Bullet text="Close your account" />

          <Text style={styles.paragraph}>
            To make a privacy-related request, please contact us
            using the contact information provided below.
          </Text>

          {/* SECTION 10 */}
          <Text style={styles.sectionTitle}>
            10. Account Deletion
          </Text>

          <Text style={styles.paragraph}>
            You may request that your MotoSys account and associated
            personal information be deleted.
          </Text>

          <Text style={styles.paragraph}>
            Some information may need to be retained when required
            by law, necessary to resolve disputes, prevent fraud, or
            fulfill legal obligations.
          </Text>

          {/* SECTION 11 */}
          <Text style={styles.sectionTitle}>
            11. Children's Privacy
          </Text>

          <Text style={styles.paragraph}>
            MotoSys is not intended for children who are not legally
            permitted to use transportation services.
          </Text>

          <Text style={styles.paragraph}>
            We do not knowingly collect personal information from
            children without appropriate authorization.
          </Text>

          <Text style={styles.paragraph}>
            If you believe that a child has provided personal
            information to us, please contact us so that we can take
            appropriate action.
          </Text>

          {/* SECTION 12 */}
          <Text style={styles.sectionTitle}>
            12. Third-Party Services
          </Text>

          <Text style={styles.paragraph}>
            MotoSys may use third-party services to provide certain
            functionality.
          </Text>

          <Text style={styles.paragraph}>
            These services may include authentication providers,
            cloud services, mapping services, payment providers,
            analytics services, and notification services.
          </Text>

          <Text style={styles.paragraph}>
            Third-party services may have their own privacy
            policies. We encourage users to review the privacy
            policies of those services when applicable.
          </Text>

          {/* SECTION 13 */}
          <Text style={styles.sectionTitle}>
            13. Cookies and Similar Technologies
          </Text>

          <Text style={styles.paragraph}>
            MotoSys or its associated services may use cookies, local
            storage, or similar technologies to maintain sessions,
            remember preferences, improve functionality, and
            understand how our services are used.
          </Text>

          <Text style={styles.paragraph}>
            You may be able to manage certain technologies through
            your device or browser settings.
          </Text>

          {/* SECTION 14 */}
          <Text style={styles.sectionTitle}>
            14. Changes to This Privacy Policy
          </Text>

          <Text style={styles.paragraph}>
            We may update this Privacy Policy from time to time.
          </Text>

          <Text style={styles.paragraph}>
            When we make changes, we will update the{" "}
            <Text style={styles.bold}>
              Last Updated
            </Text>{" "}
            date at the top of this page.
          </Text>

          <Text style={styles.paragraph}>
            If significant changes are made, we may provide
            additional notice through MotoSys or other appropriate
            communication methods.
          </Text>

          <Text style={styles.paragraph}>
            We encourage you to review this Privacy Policy
            periodically.
          </Text>

          {/* SECTION 15 */}
          <Text style={styles.sectionTitle}>
            15. Contact Us
          </Text>

          <Text style={styles.paragraph}>
            If you have questions, concerns, or requests regarding
            this Privacy Policy or how we handle your personal
            information, please contact us.
          </Text>

          <Text style={styles.contactName}>
            MotoSys
          </Text>

          <Text style={styles.contactInfo}>
            Email: [your email address]
          </Text>

          <Text style={styles.contactInfo}>
            Phone: [your phone number]
          </Text>

          <Text style={styles.contactInfo}>
            Location: Rwanda
          </Text>

          {/* SECTION 16 */}
          <Text style={styles.sectionTitle}>
            16. Acceptance of This Policy
          </Text>

          <Text style={styles.paragraph}>
            By creating an account or using MotoSys, you acknowledge
            that you have read and understood this Privacy Policy
            and agree to the collection and use of information as
            described above.
          </Text>

          <Text style={styles.paragraph}>
            If you do not agree with this Privacy Policy, please do
            not use MotoSys.
          </Text>

          {/* FOOTER */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              MotoSys — Moving Rwanda Forward,
            </Text>

            <Text style={styles.footerText}>
              One Ride at a Time.
            </Text>
          </View>

        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

/* BULLET COMPONENT */
function Bullet({ text }: { text: string }) {
  return (
    <View style={styles.bulletRow}>
      <Text style={styles.bullet}>
        •
      </Text>

      <Text style={styles.bulletText}>
        {text}
      </Text>
    </View>
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

  /* HEADER */
  header: {
    height: 65,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#F2F2F2",
  },

  backButton: {
    width: 80,
    flexDirection: "row",
    alignItems: "center",
  },

  backText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    color: "#555555",
    marginLeft: 2,
  },

  headerTitle: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 16,
    color: "#252525",
  },

  headerRight: {
    width: 80,
  },

  /* CONTENT */
  scrollView: {
    flex: 1,
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
  },

  policyTitle: {
    fontFamily: "Poppins_700Bold",
    fontSize: 20,
    color: "#202020",
    marginBottom: 3,
  },

  lastUpdated: {
    fontFamily: "Poppins_400Regular",
    fontSize: 10,
    color: "#999999",
    marginBottom: 20,
  },

  /* SECTIONS */
  sectionTitle: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 15,
    color: "#202020",
    marginTop: 18,
    marginBottom: 9,
  },

  subTitle: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 13,
    color: "#333333",
    marginTop: 10,
    marginBottom: 6,
  },

  paragraph: {
    fontFamily: "Poppins_400Regular",
    fontSize: 11,
    lineHeight: 19,
    color: "#555555",
    marginBottom: 10,
  },

  bold: {
    fontFamily: "Poppins_600SemiBold",
    color: "#333333",
  },

  /* BULLETS */
  bulletRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingLeft: 5,
    marginBottom: 5,
  },

  bullet: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 13,
    color: "#00945E",
    marginRight: 8,
    lineHeight: 18,
  },

  bulletText: {
    flex: 1,
    fontFamily: "Poppins_400Regular",
    fontSize: 10.5,
    lineHeight: 18,
    color: "#555555",
  },

  /* CONTACT */
  contactName: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 12,
    color: "#333333",
    marginBottom: 5,
  },

  contactInfo: {
    fontFamily: "Poppins_400Regular",
    fontSize: 10.5,
    lineHeight: 18,
    color: "#555555",
  },

  /* FOOTER */
  footer: {
    marginTop: 30,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: "#EEEEEE",
    alignItems: "center",
  },

  footerText: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 11,
    color: "#00945E",
    textAlign: "center",
    lineHeight: 19,
  },
});