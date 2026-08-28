// app/(auth)/registration.tsx
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
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
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { supabase } from '../../lib/supabase';

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
    if (!name || !email || !password || !confirmPassword || !phoneNumber || !gender) {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Atenção', 'As senhas não coincidem.');
      return;
    }
    if (password.length < 6) {
      Alert.alert('Atenção', 'A senha deve ter pelo menos 6 caracteres.');
      return;
    }
    if (!phoneNumber.startsWith('07') || phoneNumber.length < 10) {
      Alert.alert('Atenção', 'Número inválido. Comece com 07 e tenha pelo menos 10 dígitos.');
      return;
    }
    if (!agreeTerms) {
      Alert.alert('Atenção', 'Concorde com os Termos de Serviço.');
      return;
    }

    setLoading(true);

    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
          phone: phoneNumber,
          gender,
        },
      },
    });

    if (authError) {
      Alert.alert('Erro', authError.message);
      setLoading(false);
      return;
    }

    if (authData.user) {
      await supabase.from('profiles').upsert({
        id: authData.user.id,
        full_name: name,
        phone: phoneNumber,
        gender,
        email,
      });
    }

    setLoading(false);
    Alert.alert('Sucesso!', 'Conta criada. Verifique seu e-mail.', [
      { text: 'OK', onPress: () => router.replace('/(auth)/login') },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={28} color="#000" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Sign up with your email or phone number</Text>

        {/* Nome */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Your full name"
            value={name}
            onChangeText={setName}
          />
        </View>

        {/* Email */}
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

        {/* Senha */}
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

        {/* Confirmar Senha */}
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

        {/* Telefone - SIMPLES */}
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

        {/* Gênero */}
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

        {/* Termos */}
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

        {/* Botão Sign Up */}
        <TouchableOpacity
          style={[styles.signUpButton, loading && styles.buttonDisabled]}
          onPress={handleSignUp}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.signUpButtonText}>Sign Up</Text>
          )}
        </TouchableOpacity>

        {/* Divisor */}
        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.dividerLine} />
        </View>

        {/* Botões sociais (visuais) */}
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Ionicons name="logo-google" size={22} color="#DB4437" />
            <Text style={styles.socialButtonText}>Sign up with Gmail</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Ionicons name="logo-facebook" size={22} color="#10b987" />
            <Text style={styles.socialButtonText}>Sign up with Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Ionicons name="logo-apple" size={22} color="#000" />
            <Text style={styles.socialButtonText}>Sign up with Apple</Text>
          </TouchableOpacity>
        </View>

        {/* Rodapé */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => router.push('/(auth)/login')}>
            <Text style={styles.footerLink}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// ESTILOS (mantidos, nenhuma alteração necessária)
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
  signUpButton: {
    backgroundColor: '#10b987',
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonDisabled: { opacity: 0.6 },
  signUpButtonText: { color: '#fff', fontSize: 18, fontWeight: '600' },
  dividerContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 24 },
  dividerLine: { flex: 1, height: 1, backgroundColor: '#ddd' },
  dividerText: { marginHorizontal: 16, color: '#888', fontSize: 14 },
  socialContainer: { gap: 12 },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 30,
    paddingVertical: 14,
    gap: 12,
    backgroundColor: '#fff',
  },
  socialButtonText: { fontSize: 16, fontWeight: '500', color: '#333' },
  footer: { flexDirection: 'row', justifyContent: 'center', marginTop: 24, marginBottom: 40 },
  footerText: { fontSize: 15, color: '#555' },
  footerLink: { fontSize: 15, fontWeight: '600', color: '#10b987' },
});