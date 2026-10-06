import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect, useState } from "react";
import { AuthProvider, useAuth } from "../context/AuthContext";
import { ActivityIndicator, View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// ─── Splash Screen Component ───────────────────────────────────────────
function SplashScreen({ onFinish }: { onFinish: () => void }) {
  useEffect(() => {
    // Simulate loading fonts/assets
    const timer = setTimeout(() => {
      onFinish();
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={splash.container}>
      <View style={splash.logoCircle}>
        <Ionicons name="leaf" size={64} color="#FFFFFF" />
      </View>
      <Text style={splash.logoText}>TaniPlan</Text>
      <Text style={splash.tagline}>Asisten Pertanian Anda</Text>
      <ActivityIndicator size="large" color="#FFFFFF" style={splash.loader} />
    </View>
  );
}

// ─── Main Layout (Handles Auth Routing) ────────────────────────────────
function InitialLayout() {
  const { session, isLoading } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return;

    const inAuthGroup = segments[0] === "(auth)";

    if (!session && !inAuthGroup) {
      // Redirect to welcome screen if not authenticated
      router.replace("/(auth)/welcome" as any);
    } else if (session && inAuthGroup) {
      // Redirect to home if authenticated
      router.replace("/(tabs)" as any);
    }
  }, [session, isLoading, segments]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#FFFFFF" }}>
        <ActivityIndicator size="large" color="#2E7D32" />
      </View>
    );
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
    </Stack>
  );
}

// ─── Root Layout ────────────────────────────────────────────────────────
export default function RootLayout() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <AuthProvider>
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <InitialLayout />
      )}
    </AuthProvider>
  );
}

const splash = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2E7D32", // Primary Fresh Green
    justifyContent: "center",
    alignItems: "center",
  },
  logoCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: "rgba(255,255,255,0.2)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  logoText: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#FFFFFF", // High contrast
    marginBottom: 8,
  },
  tagline: {
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  loader: {
    position: "absolute",
    bottom: 60,
  },
});
