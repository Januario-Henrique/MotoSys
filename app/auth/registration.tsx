import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

import { auth, db } from '../../firebase/config';
import CustomButton from '../../components/CustomButton';
import IconButton from '../../components/IconButton';

type Gender = 'Male' | 'Female' | 'Other' | '';

export default function RegistrationScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState<Gender>('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    if (!auth || !db) {
      Alert.alert('Firebase unavailable', 'Registration is temporarily unavailable because Firebase is not configured.');
      return;
    }

    if (!name.trim() || !email.trim() || !password || !confirmPassword || !phoneNumber.trim()) {
      Alert.alert('Missing information', 'Please complete all fields before continuing.');
      return;
    }

    if (!agreeTerms) {
      Alert.alert('Terms required', 'Please accept the terms and privacy policy to continue.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Passwords do not match', 'Please ensure both password fields are identical.');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Weak password', 'Password must be at least 6 characters long.');
      return;
    }

    try {
      setLoading(true);

      const userCredential = await createUserWithEmailAndPassword(auth, email.trim(), password);
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: name.trim(),
      });

      await setDoc(doc(db, 'users', user.uid), {
        name: name.trim(),
        email: email.trim(),
        phoneNumber: phoneNumber.trim(),
        gender,
        createdAt: new Date().toISOString(),
      });

      Alert.alert('Success', 'Your account has been created successfully.');
      router.replace('/auth/login');
    } catch (error: any) {
      Alert.alert('Registration failed', error?.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={28} color="#000" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Sign up with your email or phone number</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Your full name"
            value={name}
            onChangeText={setName}
          />
        </View>

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

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="••••••••"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            placeholder="••••••••"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Your mobile number</Text>
          <TextInput
            style={styles.input}
            placeholder="start with 07********"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Gender</Text>
          <View style={styles.genderContainer}>
            {['Male', 'Female', 'Other'].map((option) => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.genderOption,
                  gender === option && styles.genderOptionActive,
                ]}
                onPress={() => setGender(option as Gender)}
              >
                <Text
                  style={[
                    styles.genderText,
                    gender === option && styles.genderTextActive,
                  ]}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <TouchableOpacity
          style={styles.termsContainer}
          onPress={() => setAgreeTerms(!agreeTerms)}
          activeOpacity={0.7}
        >
          <View style={[styles.checkbox, agreeTerms && styles.checkboxActive]}>
            {agreeTerms && <Ionicons name="checkmark" size={16} color="#fff" />}
          </View>
          <Text style={styles.termsText}>
            By signing up, you agree to the{' '}
            <Text style={styles.linkText}>Terms of service</Text> and{' '}
            <Text style={styles.linkText}>Privacy policy</Text>.
          </Text>
        </TouchableOpacity>

        {loading ? (
          <ActivityIndicator size="large" color="#10b987" style={{ marginVertical: 16 }} />
        ) : (
          <CustomButton title="Sign Up" onPress={handleSignUp} variant="primary" />
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
          <Text style={styles.footerText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => router.push('/auth/login')}>
            <Text style={styles.footerLink}>Sign in</Text>
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
  genderContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  genderOption: {
    flex: 1,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 4,
    backgroundColor: '#f9f9f9',
  },
  genderOptionActive: { borderColor: '#10b987', backgroundColor: '#10b987' },
  genderText: { color: '#333', fontWeight: '500' },
  genderTextActive: { color: '#fff' },
  termsContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 16 },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#ddd',
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxActive: { backgroundColor: '#10b987', borderColor: '#10b987' },
  termsText: { flex: 1, fontSize: 14, color: '#555', lineHeight: 20 },
  linkText: { color: '#10b987', fontWeight: '500' },
  dividerContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 24 },
  dividerLine: { flex: 1, height: 1, backgroundColor: '#ddd' },
  dividerText: { marginHorizontal: 16, color: '#888', fontSize: 14 },
  socialContainer: { gap: 12 },
  footer: { flexDirection: 'row', justifyContent: 'center', marginTop: 24, marginBottom: 40 },
  footerText: { fontSize: 15, color: '#555' },
  footerLink: { fontSize: 15, fontWeight: '600', color: '#10b987' },
});