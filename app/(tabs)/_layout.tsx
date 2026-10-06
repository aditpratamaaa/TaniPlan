import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#2E7D32", // Primary Fresh Green
        tabBarInactiveTintColor: "#555555", // High contrast gray
        tabBarStyle: {
          height: 70, // Larger tab bar for better touch targets
          paddingBottom: 12,
          paddingTop: 8,
          backgroundColor: "#FFFFFF",
          borderTopWidth: 1,
          borderTopColor: "#E0E0E0",
        },
        tabBarLabelStyle: {
          fontSize: 14, // Larger label
          fontWeight: "bold",
        },
        headerStyle: {
          backgroundColor: "#2E7D32",
        },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 24, // Large header
        },
        headerTintColor: "#FFFFFF",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Beranda",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: "Jadwal",
          tabBarIcon: ({ color }) => (
            <Ionicons name="calendar" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="ledger"
        options={{
          title: "Keuangan",
          tabBarIcon: ({ color }) => (
            <Ionicons name="wallet" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="market"
        options={{
          title: "Pasar",
          tabBarIcon: ({ color }) => (
            <Ionicons name="trending-up" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="pests"
        options={{
          title: "Hama",
          tabBarIcon: ({ color }) => (
            <Ionicons name="bug" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
