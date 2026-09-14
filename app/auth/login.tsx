import React, { useState } from 'react';
import {
  ScrollView,
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
import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../../firebase/config';
import CustomButton from '../../components/CustomButton';
import IconButton from '../../components/IconButton';

export default function LoginScreen() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!emailOrPhone || !password) {
      Alert.alert('Attention', 'Please fill in all fields.');
      return;
    }

    if (!emailOrPhone.includes('@')) {
      Alert.alert('Attention', 'Please enter a valid email.');
      return;
    }

    if (!auth) {
      Alert.alert('Firebase unavailable', 'Authentication is not configured yet.');
      return;
    }

    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, emailOrPhone, password);
      setLoading(false);
      router.replace('/ride/selectAddress');
    } catch (error: any) {
      setLoading(false);

      let errorMessage = 'An error occurred while logging in.';
      switch (error.code) {
        case 'auth/invalid-email':
          errorMessage = 'Invalid email format.';
          break;
        case 'auth/user-not-found':
        case 'auth/wrong-password':
        case 'auth/invalid-credential':
          errorMessage = 'Incorrect email or password. Please check your credentials.';
          break;
        case 'auth/too-many-requests':
          errorMessage = 'Too many login attempts. Please try again later.';
          break;
        case 'auth/user-disabled':
          errorMessage = 'This account has been disabled. Please contact support.';
          break;
        case 'auth/network-request-failed':
          errorMessage = 'Connection error. Please check your internet.';
          break;
        default:
          errorMessage = error.message || 'An error occurred while logging in.';
      }
      
      Alert.alert('Login Error', errorMessage);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={28} color="#000" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Sign in with your email or phone number</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email or Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="your@email.com or phone"
            keyboardType="email-address"
            autoCapitalize="none"
            value={emailOrPhone}
            onChangeText={setEmailOrPhone}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Enter Your Password</Text>
          <TextInput
            style={styles.input}
            placeholder="••••••••"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <TouchableOpacity
          style={styles.forgotPassword}
          onPress={() => router.push('/auth/forgetPassword')}
        >
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>

        {loading ? (
          <ActivityIndicator size="large" color="#10b987" style={{ marginVertical: 16 }} />
        ) : (
          <CustomButton title="Sign In" onPress={handleLogin} variant="primary" />
        )}

        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.dividerLine} />
        </View>

        <View style={styles.socialContainer}>
          <IconButton
            title="Sign up with Gmail"
            icon="logo-google"
            iconColor="#DB4437"
            onPress={() => Alert.alert('Google', 'Social login coming soon')}
          />
          <IconButton
            title="Sign up with Facebook"
            icon="logo-facebook"
            iconColor="#1877F2"
            onPress={() => Alert.alert('Facebook', 'Social login coming soon')}
          />
          <IconButton
            title="Sign up with Apple"
            icon="logo-apple"
            iconColor="#000"
            onPress={() => Alert.alert('Apple', 'Social login coming soon')}
          />
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Don&apos;t have an account? </Text>
          <TouchableOpacity onPress={() => router.push('/auth/registration')}>
            <Text style={styles.footerLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 24 },
  backButton: { flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 20 },
  backText: { fontSize: 16, color: '#000', marginLeft: 4 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#000', marginBottom: 30 },
  inputGroup: { marginBottom: 20 },
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
  forgotPassword: { alignSelf: 'flex-end', marginBottom: 20 },
  forgotPasswordText: { color: '#10b987', fontWeight: '500' },
  dividerContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 24 },
  dividerLine: { flex: 1, height: 1, backgroundColor: '#ddd' },
  dividerText: { marginHorizontal: 16, color: '#888', fontSize: 14 },
  socialContainer: { gap: 12 },
  footer: { flexDirection: 'row', justifyContent: 'center', marginTop: 24, marginBottom: 40 },
  footerText: { fontSize: 15, color: '#555' },
  footerLink: { fontSize: 15, fontWeight: '600', color: '#10b987' },
});