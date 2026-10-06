import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [pin, setPin] = useState('');
  const { signIn, isLoading } = useAuth();
  const router = useRouter();

  const handleLogin = async () => {
    if (!phoneNumber || !pin) {
      Alert.alert('Error', 'Harap isi nomor telepon dan PIN.');
      return;
    }
    // Simulate login
    await signIn(phoneNumber, pin);
    // Note: redirection is handled by InitialLayout in _layout.tsx
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.formContainer}>
        <Text style={styles.headerTitle}>Masuk Akun</Text>
        <Text style={styles.subtitle}>Silakan masuk untuk melanjutkan</Text>

        <Text style={styles.label}>Nomor Telepon</Text>
        <TextInput
          style={styles.input}
          placeholder="08123456789"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          accessible={true}
          accessibilityLabel="Input Nomor Telepon"
        />

        <Text style={styles.label}>PIN (6 Digit)</Text>
        <TextInput
          style={styles.input}
          placeholder="******"
          keyboardType="numeric"
          secureTextEntry
          maxLength={6}
          value={pin}
          onChangeText={setPin}
          accessible={true}
          accessibilityLabel="Input PIN"
        />

        <TouchableOpacity 
          style={[styles.primaryButton, isLoading && styles.buttonDisabled]} 
          onPress={handleLogin}
          disabled={isLoading}
          accessible={true}
          accessibilityLabel="Tombol Masuk"
          accessibilityRole="button"
        >
          <Text style={styles.buttonText}>
            {isLoading ? 'Memuat...' : 'Masuk'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.secondaryButton}
          onPress={() => router.push('/(auth)/register' as any)}
          accessible={true}
          accessibilityLabel="Tombol Daftar"
          accessibilityRole="button"
        >
          <Text style={styles.secondaryButtonText}>Belum punya akun? Daftar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // White background
  },
  formContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    width: '100%',
    maxWidth: 500,
    alignSelf: 'center',
  },
  headerTitle: {
    fontSize: 32, // Large font for readability
    fontWeight: 'bold',
    color: '#000000', // High contrast
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18, // Large body text
    color: '#333333',
    marginBottom: 32,
    fontWeight: '600',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 8,
  },
  input: {
    borderWidth: 2,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 20, // Large input text
    color: '#000000',
    marginBottom: 24,
    minHeight: 56, // Large touch target
  },
  primaryButton: {
    backgroundColor: '#2E7D32', // Primary Fresh Green
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    minHeight: 56, // Large touch target
    marginBottom: 16,
  },
  buttonDisabled: {
    backgroundColor: '#9E9E9E',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20, // Large button text
    fontWeight: 'bold',
  },
  secondaryButton: {
    paddingVertical: 16,
    alignItems: 'center',
    minHeight: 56,
  },
  secondaryButtonText: {
    color: '#2E7D32',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
