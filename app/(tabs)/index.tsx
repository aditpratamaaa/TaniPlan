import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';

export default function HomeScreen() {
  const { signOut } = useAuth();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Header overrides for Logout button */}
      <Stack.Screen 
        options={{
          headerRight: () => (
            <TouchableOpacity 
              onPress={signOut} 
              style={styles.logoutButton}
              accessible={true}
              accessibilityLabel="Keluar dari akun"
            >
              <Ionicons name="log-out-outline" size={28} color="#FFFFFF" />
            </TouchableOpacity>
          )
        }} 
      />

      {/* Greeting Section */}
      <View style={styles.greetingCard}>
        <Text style={styles.greetingText}>Halo, Pak Budi!</Text>
        <Text style={styles.dateText}>Selasa, 6 Oktober 2026</Text>
      </View>

      {/* Weather Card */}
      <View style={styles.weatherCard}>
        <Ionicons name="sunny" size={48} color="#F59E0B" />
        <View style={styles.weatherInfo}>
          <Text style={styles.weatherTemp}>Cerah, 28°C</Text>
          <Text style={styles.weatherDesc}>Kondisi baik untuk pemupukan</Text>
        </View>
      </View>

      {/* Today's Task Card */}
      <Text style={styles.sectionTitle}>Tugas Hari Ini</Text>
      <View style={styles.taskCard}>
        <View style={styles.taskHeader}>
          <Ionicons name="water" size={32} color="#0284C7" />
          <Text style={styles.taskTitle}>Siram Sawah Petak A</Text>
        </View>
        <Text style={styles.taskTime}>Waktu: 07:00 - 09:00 WIB</Text>
        
        <TouchableOpacity style={styles.taskButton} accessible={true} accessibilityRole="button">
          <Text style={styles.taskButtonText}>Tandai Selesai</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  content: {
    padding: 16,
  },
  logoutButton: {
    marginRight: 16,
    padding: 8,
    minHeight: 48, // Accessibility touch target
    justifyContent: 'center',
  },
  greetingCard: {
    marginBottom: 24,
  },
  greetingText: {
    fontSize: 32, // Large greeting
    fontWeight: 'bold',
    color: '#000000',
  },
  dateText: {
    fontSize: 18,
    color: '#555555',
    fontWeight: '600',
    marginTop: 4,
  },
  weatherCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 24,
    borderWidth: 2, // High contrast border
    borderColor: '#E0E0E0',
    elevation: 4, // Android shadow
  },
  weatherInfo: {
    marginLeft: 16,
    flex: 1,
  },
  weatherTemp: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  weatherDesc: {
    fontSize: 16,
    color: '#333333',
    marginTop: 4,
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 12,
  },
  taskCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#2E7D32', // Highlight primary color for tasks
    elevation: 4,
  },
  taskHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  taskTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
    marginLeft: 12,
    flex: 1,
  },
  taskTime: {
    fontSize: 18,
    color: '#333333',
    fontWeight: '600',
    marginBottom: 16,
  },
  taskButton: {
    backgroundColor: '#2E7D32',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    minHeight: 56, // Large touch target
  },
  taskButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
