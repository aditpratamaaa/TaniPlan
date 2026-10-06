import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useAuth } from "../../src/context/AuthContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function RegisterScreen() {
  const { signIn } = useAuth();
  const router = useRouter();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [village, setVillage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!name || !phoneNumber) return;
    setLoading(true);
    // Mock registration — using signIn underneath
    await signIn(phoneNumber);
    setLoading(false);
  };

  const isValid = name.length > 0 && phoneNumber.length > 0;

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={styles.scroll}
          keyboardShouldPersistTaps="handled"
        >
          {/* Back button */}
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={22} color="#374151" />
          </TouchableOpacity>

          {/* Logo */}
          <View style={styles.logoContainer}>
            <View style={styles.logoCircle}>
              <Ionicons name="person-add" size={36} color="#FFFFFF" />
            </View>
            <Text style={styles.logoText}>Buat Akun Baru</Text>
            <Text style={styles.logoSub}>Bergabung dengan komunitas petani TaniPlan</Text>
          </View>

          {/* Form Card */}
          <View style={styles.card}>
            {/* Nama Lengkap */}
            <Text style={styles.label}>Nama Lengkap</Text>
            <View style={styles.inputWrapper}>
              <Ionicons name="person-outline" size={20} color="#94A3B8" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Contoh: Budi Santoso"
                value={name}
                onChangeText={setName}
                placeholderTextColor="#CBD5E1"
              />
            </View>

            {/* No. Telepon */}
            <Text style={styles.label}>Nomor Telepon</Text>
            <View style={styles.inputRow}>
              <View style={styles.phonePrefix}>
                <Text style={styles.phonePrefixText}>+62</Text>
              </View>
              <TextInput
                style={styles.inputPhone}
                placeholder="812-xxxx-xxxx"
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                placeholderTextColor="#CBD5E1"
              />
            </View>

            {/* Desa / Lokasi Lahan */}
            <Text style={styles.label}>Desa / Lokasi Lahan <Text style={styles.optional}>(opsional)</Text></Text>
            <View style={styles.inputWrapper}>
              <Ionicons name="location-outline" size={20} color="#94A3B8" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Contoh: Desa Sukamaju, Jawa Barat"
                value={village}
                onChangeText={setVillage}
                placeholderTextColor="#CBD5E1"
              />
            </View>

            {/* Benefits row */}
            <View style={styles.benefitsCard}>
              {[
                { icon: "calendar", text: "Jadwal Tanam Otomatis" },
                { icon: "partly-sunny", text: "Cuaca & Irigasi Cerdas" },
                { icon: "trending-up", text: "Harga Pasar Real-time" },
              ].map((b, i) => (
                <View key={i} style={styles.benefitRow}>
                  <View style={styles.benefitIcon}>
                    <Ionicons name={b.icon as any} size={16} color="#10B981" />
                  </View>
                  <Text style={styles.benefitText}>{b.text}</Text>
                </View>
              ))}
            </View>

            {/* Register Button */}
            <TouchableOpacity
              style={[styles.registerButton, !isValid && styles.registerButtonDisabled]}
              onPress={handleRegister}
              disabled={!isValid || loading}
            >
              {loading ? (
                <ActivityIndicator color="#FFF" />
              ) : (
                <>
                  <Ionicons name="checkmark-circle-outline" size={22} color="#FFF" />
                  <Text style={styles.registerButtonText}>Daftar & Mulai Bertani</Text>
                </>
              )}
            </TouchableOpacity>

            {/* Already have account */}
            <TouchableOpacity
              style={styles.loginLink}
              onPress={() => router.replace("/(auth)/login" as any)}
            >
              <Text style={styles.loginLinkText}>
                Sudah punya akun?{" "}
                <Text style={styles.loginLinkBold}>Masuk di sini</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0FDF4",
  },
  scroll: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingBottom: 40,
    width: '100%',
    maxWidth: 500,
    alignSelf: 'center',
  },
  backButton: {
    marginTop: 8,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 24,
    marginBottom: 28,
  },
  logoCircle: {
    width: 80,
    height: 80,
    borderRadius: 24,
    backgroundColor: "#10B981",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 14,
    shadowColor: "#10B981",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 8,
  },
  logoText: {
    fontSize: 24,
    fontWeight: "800",
    color: "#064E3B",
  },
  logoSub: {
    fontSize: 14,
    color: "#64748B",
    marginTop: 4,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 28,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.07,
    shadowRadius: 16,
    elevation: 4,
  },
  label: {
    fontSize: 14,
    fontWeight: "700",
    color: "#374151",
    marginBottom: 8,
  },
  optional: {
    fontWeight: "400",
    color: "#94A3B8",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#E2E8F0",
    borderRadius: 14,
    marginBottom: 20,
    backgroundColor: "#FAFAFA",
  },
  inputIcon: {
    marginLeft: 14,
  },
  input: {
    flex: 1,
    height: 54,
    paddingHorizontal: 12,
    fontSize: 15,
    color: "#1E293B",
  },
  inputRow: {
    flexDirection: "row",
    marginBottom: 20,
    borderWidth: 1.5,
    borderColor: "#E2E8F0",
    borderRadius: 14,
    overflow: "hidden",
    backgroundColor: "#FAFAFA",
  },
  phonePrefix: {
    backgroundColor: "#F1F5F9",
    paddingHorizontal: 14,
    justifyContent: "center",
    borderRightWidth: 1.5,
    borderRightColor: "#E2E8F0",
  },
  phonePrefixText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#374151",
  },
  inputPhone: {
    flex: 1,
    height: 54,
    paddingHorizontal: 14,
    fontSize: 15,
    color: "#1E293B",
  },
  benefitsCard: {
    backgroundColor: "#F0FDF4",
    borderRadius: 14,
    padding: 16,
    marginBottom: 24,
    gap: 12,
    borderWidth: 1,
    borderColor: "#D1FAE5",
  },
  benefitRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  benefitIcon: {
    width: 30,
    height: 30,
    borderRadius: 8,
    backgroundColor: "#D1FAE5",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  benefitText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#064E3B",
  },
  registerButton: {
    backgroundColor: "#10B981",
    borderRadius: 14,
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    shadowColor: "#10B981",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 6,
    marginBottom: 16,
  },
  registerButtonDisabled: {
    backgroundColor: "#A7F3D0",
    shadowOpacity: 0,
    elevation: 0,
  },
  registerButtonText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  loginLink: {
    alignItems: "center",
    paddingTop: 8,
  },
  loginLinkText: {
    fontSize: 14,
    color: "#64748B",
  },
  loginLinkBold: {
    color: "#10B981",
    fontWeight: "700",
  },
});
