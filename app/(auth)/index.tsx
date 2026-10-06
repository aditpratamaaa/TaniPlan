import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Animated,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const slides = [
  {
    key: "1",
    title: "Selamat Datang\ndi TaniPlan!",
    subtitle:
      "Asisten pertanian digital Anda. Dirancang khusus untuk petani Indonesia agar bertani lebih cerdas dan menghasilkan lebih banyak.",
    icon: "leaf" as const,
    iconBg: "#D1FAE5",
    iconColor: "#10B981",
    bg: "#F0FDF4",
    accent: "#10B981",
  },
  {
    key: "2",
    title: "Semua yang Anda\nButuhkan, di Satu Tempat",
    subtitle:
      "Jadwal tanam otomatis, pemantauan cuaca lahan, harga pasar terkini, deteksi hama, dan catatan keuangan — semuanya tersedia.",
    icon: "apps" as const,
    iconBg: "#DBEAFE",
    iconColor: "#3B82F6",
    bg: "#EFF6FF",
    accent: "#3B82F6",
    features: [
      { icon: "calendar" as const, label: "Jadwal Tanam" },
      { icon: "partly-sunny" as const, label: "Cuaca Lahan" },
      { icon: "trending-up" as const, label: "Harga Pasar" },
      { icon: "bug" as const, label: "Deteksi Hama" },
    ],
  },
  {
    key: "3",
    title: "Siap Memulai?",
    subtitle: "Bergabunglah bersama ribuan petani yang sudah merasakan manfaat TaniPlan.",
    icon: "person-add" as const,
    iconBg: "#FEF3C7",
    iconColor: "#F59E0B",
    bg: "#FFFBEB",
    accent: "#F59E0B",
    isLast: true,
  },
];

export default function OnboardingScreen() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const goNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
      setCurrentIndex(currentIndex + 1);
    }
  };

  const renderItem = ({ item }: { item: typeof slides[0] }) => (
    <View style={[styles.slide, { width, backgroundColor: item.bg }]}>
      {/* Icon */}
      <View style={[styles.iconCircle, { backgroundColor: item.iconBg }]}>
        <Ionicons name={item.icon} size={64} color={item.iconColor} />
      </View>

      {/* Title & Subtitle */}
      <Text style={[styles.slideTitle, { color: "#1E293B" }]}>{item.title}</Text>
      <Text style={styles.slideSubtitle}>{item.subtitle}</Text>

      {/* Feature grid for slide 2 */}
      {"features" in item && item.features && (
        <View style={styles.featureGrid}>
          {item.features.map((f, i) => (
            <View key={i} style={styles.featureItem}>
              <View style={[styles.featureIcon, { backgroundColor: item.iconBg }]}>
                <Ionicons name={f.icon} size={22} color={item.iconColor} />
              </View>
              <Text style={styles.featureLabel}>{f.label}</Text>
            </View>
          ))}
        </View>
      )}

      {/* CTA for last slide */}
      {"isLast" in item && item.isLast && (
        <View style={styles.ctaContainer}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => router.replace("/(auth)/login" as any)}
          >
            <Ionicons name="log-in-outline" size={22} color="#FFF" />
            <Text style={styles.loginButtonText}>Masuk ke Akun</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => router.push("/(auth)/register" as any)}
          >
            <Ionicons name="person-add-outline" size={22} color="#10B981" />
            <Text style={styles.registerButtonText}>Daftar Akun Baru</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Flatlist slides */}
      <Animated.FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onMomentumScrollEnd={(e) => {
          const idx = Math.round(e.nativeEvent.contentOffset.x / width);
          setCurrentIndex(idx);
        }}
      />

      {/* Footer: dots + nav button */}
      <View style={styles.footer}>
        {/* Dot indicators */}
        <View style={styles.dotsRow}>
          {slides.map((_, i) => {
            const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
            const dotWidth = scrollX.interpolate({
              inputRange,
              outputRange: [8, 24, 8],
              extrapolate: "clamp",
            });
            const opacity = scrollX.interpolate({
              inputRange,
              outputRange: [0.3, 1, 0.3],
              extrapolate: "clamp",
            });
            return (
              <Animated.View
                key={i}
                style={[
                  styles.dot,
                  {
                    width: dotWidth,
                    opacity,
                    backgroundColor:
                      slides[currentIndex]?.accent ?? "#10B981",
                  },
                ]}
              />
            );
          })}
        </View>

        {/* Next / Skip buttons — hide on last slide */}
        {currentIndex < slides.length - 1 && (
          <View style={styles.navRow}>
            <TouchableOpacity
              onPress={() => router.replace("/(auth)/login" as any)}
              style={styles.skipButton}
            >
              <Text style={styles.skipText}>Lewati</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={goNext}
              style={[
                styles.nextButton,
                { backgroundColor: slides[currentIndex]?.accent ?? "#10B981" },
              ]}
            >
              <Text style={styles.nextText}>Lanjut</Text>
              <Ionicons name="arrow-forward" size={20} color="#FFF" />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0FDF4",
  },
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
    paddingTop: 24,
  },
  iconCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 36,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 6,
  },
  slideTitle: {
    fontSize: 30,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 16,
    lineHeight: 40,
  },
  slideSubtitle: {
    fontSize: 16,
    color: "#64748B",
    textAlign: "center",
    lineHeight: 26,
    marginBottom: 32,
  },
  featureGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 16,
    marginTop: 8,
  },
  featureItem: {
    alignItems: "center",
    width: 80,
  },
  featureIcon: {
    width: 52,
    height: 52,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  featureLabel: {
    fontSize: 12,
    fontWeight: "700",
    color: "#475569",
    textAlign: "center",
  },
  ctaContainer: {
    width: "100%",
    gap: 14,
    marginTop: 8,
  },
  loginButton: {
    backgroundColor: "#10B981",
    borderRadius: 14,
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#10B981",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 6,
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "bold",
    marginLeft: 10,
  },
  registerButton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#10B981",
  },
  registerButtonText: {
    color: "#10B981",
    fontSize: 17,
    fontWeight: "bold",
    marginLeft: 10,
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    paddingTop: 16,
    backgroundColor: "transparent",
  },
  dotsRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    gap: 6,
  },
  dot: {
    height: 8,
    borderRadius: 4,
  },
  navRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  skipButton: {
    paddingVertical: 14,
    paddingHorizontal: 8,
  },
  skipText: {
    fontSize: 16,
    color: "#94A3B8",
    fontWeight: "600",
  },
  nextButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 14,
    gap: 8,
  },
  nextText: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
