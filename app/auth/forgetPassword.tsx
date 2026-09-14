import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { sendPasswordResetEmail } from 'firebase/auth';

import { auth } from '../../firebase/config';
import CustomButton from '../../components/CustomButton';

export default function ForgetPasswordScreen() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async () => {
    if (!email.trim() || !email.includes('@')) {
      Alert.alert('Invalid Email', 'Please enter a valid email address to reset your password.');
      return;
    }

    if (!auth) {
      Alert.alert('Firebase unavailable', 'Password reset is temporarily unavailable.');
      return;
    }

    try {
      setLoading(true);
      await sendPasswordResetEmail(auth, email.trim());
      setLoading(false);
      Alert.alert(
        'Email Sent',
        'Check your inbox for instructions to reset your password.',
        [{ text: 'OK', onPress: () => router.back() }]
      );
    } catch (error: any) {
      setLoading(false);
      let errorMessage = 'Failed to send reset email. Please try again.';
      if (error.code === 'auth/user-not-found') {
        errorMessage = 'No user found with this email address.';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'The email address is badly formatted.';
      }
      Alert.alert('Error', errorMessage);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="chevron-back" size={28} color="#000" />
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Recover password</Text>
      <Text style={styles.subtitle}>
        Enter your account email and we will send you instructions to reset your password.
      </Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="your@email.com"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#10b987" style={{ marginVertical: 16 }} />
      ) : (
        <CustomButton title="Send Reset Instructions" onPress={handleResetPassword} variant="primary" />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 24, paddingTop: 10 },
  backButton: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  backText: { fontSize: 16, color: '#000', marginLeft: 4 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#000', marginBottom: 10 },
  subtitle: { fontSize: 14, color: '#666', marginBottom: 30, lineHeight: 20 },
  inputGroup: { marginBottom: 24 },
  label: { fontSize: 14, fontWeight: '500', color: '#333', marginBottom: 6 },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 14,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
});