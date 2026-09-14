import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ImageBackground, 
  TouchableOpacity, 
  Alert 
} from 'react-native';
import { useRouter } from 'expo-router';
import * as Location from 'expo-location';
import { Ionicons } from '@expo/vector-icons';

// Import your CustomButton component
import CustomButton from '../components/CustomButton';

export default function LocationPage() {
  const router = useRouter();

  // Function to request real location permission
  const handleAllowLocation = async () => {
    // 1. Request permission from the user
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert(
        'Permission Denied',
        'We need your location to show available vehicles near you.',
        [{ text: 'OK' }]
      );
      return;
    }

    // 2. If granted, you can get the current location here if needed:
    // let location = await Location.getCurrentPositionAsync({});
    // console.log(location);

    // 3. Redirect to the Welcome screen
    router.replace('/'); 
  };

  const handleSkip = () => {
    // User skipped, also goes to Welcome screen
    router.replace('/');
  };

  return (
    <View style={styles.container}>
      {/* Map Background */}
      <ImageBackground 
        source={require('../assets/images/map-background.jpeg')} 
        style={styles.mapBackground}
        resizeMode="cover"
      >
        {/* Light dark overlay for contrast (optional) */}
        <View style={styles.overlay} />
      </ImageBackground>

      {/* White Card (Bottom Sheet) */}
      <View style={styles.bottomSheet}>
        
        {/* Central Icon */}
        <View style={styles.iconContainer}>
          <View style={styles.iconCircleOuter}>
            <View style={styles.iconCircleInner}>
              <Ionicons name="location" size={32} color="#009963" />
            </View>
          </View>
        </View>

        {/* Texts */}
        <Text style={styles.title}>Enable your location</Text>
        <Text style={styles.subtitle}>
          Choose your location to start finding requests around you
        </Text>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <CustomButton
            title="Use my location"
            variant="primary"
            onPress={handleAllowLocation}
          />

          <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
            <Text style={styles.skipButtonText}>Skip for now</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Black background in case image fails to load
  },
  mapBackground: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.1)', // Slight dark tint on the map
  },
  bottomSheet: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 24,
    paddingTop: 60, // Space for the floating icon
    paddingBottom: 40,
    alignItems: 'center',
    width: '100%',
  },
  iconContainer: {
    position: 'absolute',
    top: -50, // Moves the icon up, outside the card
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCircleOuter: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(0, 153, 99, 0.1)', // Very light green
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCircleInner: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#009963', // Dark green
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: '#fff', // White border for emphasis
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    color: '#888',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 22,
  },
  buttonContainer: {
    width: '100%',
    gap: 10,
  },
  skipButton: {
    paddingVertical: 15,
    alignItems: 'center',
  },
  skipButtonText: {
    color: '#999',
    fontSize: 16,
    fontWeight: '500',
  },
});