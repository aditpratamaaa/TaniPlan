import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HamaScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header / Hero */}
        <View style={styles.heroCard}>
          <Text style={styles.heroTitle}>Katalog Penyakit Tanaman</Text>
          <Text style={styles.heroDesc}>Pindai daun atau pilih dari katalog untuk mencari solusi.</Text>
          
          <TouchableOpacity style={styles.scanButton}>
            <Ionicons name="camera" size={24} color="#FFF" />
            <Text style={styles.scanButtonText}>Buka Kamera Pindai</Text>
          </TouchableOpacity>
        </View>

        {/* Search & Filters */}
        <View style={styles.filterSection}>
          <View style={styles.searchBar}>
            <Ionicons name="search" size={20} color="#888" />
            <TextInput 
              placeholder="Cari hama atau penyakit..." 
              style={styles.searchInput}
            />
          </View>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScroll}>
            <TouchableOpacity style={[styles.filterChip, styles.filterChipActive]}>
              <Text style={styles.filterChipTextActive}>Semua</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterChip}>
              <Text style={styles.filterChipText}>Padi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterChip}>
              <Text style={styles.filterChipText}>Sayuran</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Disease List */}
        <View style={styles.listSection}>
          <View style={styles.diseaseCard}>
            <View style={styles.cropBannerPadi}>
              <Text style={styles.cropBannerText}>Padi</Text>
            </View>
            <Text style={styles.diseaseName}>Penyakit Tungro</Text>
            <Text style={styles.diseaseSymptoms} numberOfLines={2}>
              Gejala: Daun berubah menjadi kuning jingga mulai dari ujung daun, tanaman kerdil, jumlah anakan sedikit.
            </Text>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Lihat Obat & Cara Atasi</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.diseaseCard}>
            <View style={styles.cropBannerSayuran}>
              <Text style={styles.cropBannerText}>Sayuran</Text>
            </View>
            <Text style={styles.diseaseName}>Antraknosa (Patek)</Text>
            <Text style={styles.diseaseSymptoms} numberOfLines={2}>
              Gejala: Bercak coklat kehitaman pada buah cabai yang meluas dan menyebabkan busuk buah.
            </Text>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Lihat Obat & Cara Atasi</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.diseaseCard}>
            <View style={styles.cropBannerPadi}>
              <Text style={styles.cropBannerText}>Padi</Text>
            </View>
            <Text style={styles.diseaseName}>Ulat Grayak</Text>
            <Text style={styles.diseaseSymptoms} numberOfLines={2}>
              Gejala: Daun berlubang dan rusak berat, terkadang hanya menyisakan tulang daun saja pada serangan parah.
            </Text>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Lihat Obat & Cara Atasi</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Support Card */}
        <View style={styles.supportCard}>
          <Ionicons name="help-buoy" size={32} color="#F97316" />
          <View style={styles.supportTextContainer}>
            <Text style={styles.supportTitle}>Belum Yakin Hama Apa?</Text>
            <Text style={styles.supportDesc}>Tanyakan langsung ke penyuluh pertanian setempat.</Text>
          </View>
          <TouchableOpacity style={styles.supportButton}>
            <Ionicons name="call" size={20} color="#FFF" />
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 40,
  },
  heroCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
    marginBottom: 20,
  },
  heroTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1E293B",
    marginBottom: 8,
  },
  heroDesc: {
    fontSize: 14,
    color: "#64748B",
    marginBottom: 20,
    lineHeight: 20,
  },
  scanButton: {
    backgroundColor: "#10B981", // Green
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
  },
  scanButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 8,
  },
  filterSection: {
    marginBottom: 20,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    color: "#1E293B",
  },
  filterScroll: {
    flexDirection: "row",
  },
  filterChip: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  filterChipActive: {
    backgroundColor: "#10B981",
    borderColor: "#10B981",
  },
  filterChipText: {
    color: "#64748B",
    fontWeight: "500",
  },
  filterChipTextActive: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
  listSection: {
    gap: 16,
    marginBottom: 20,
  },
  diseaseCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  cropBannerPadi: {
    alignSelf: "flex-start",
    backgroundColor: "#FEF3C7",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 8,
    marginBottom: 12,
  },
  cropBannerSayuran: {
    alignSelf: "flex-start",
    backgroundColor: "#E0F2FE", // Blue accent
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 8,
    marginBottom: 12,
  },
  cropBannerText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#D97706",
  },
  diseaseName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1E293B",
    marginBottom: 8,
  },
  diseaseSymptoms: {
    fontSize: 14,
    color: "#64748B",
    lineHeight: 20,
    marginBottom: 16,
  },
  actionButton: {
    backgroundColor: "#F8FAFC",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
  },
  actionButtonText: {
    color: "#10B981",
    fontWeight: "600",
    fontSize: 14,
  },
  supportCard: {
    backgroundColor: "#FFF7ED", // Orange tint
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#FFEDD5",
  },
  supportTextContainer: {
    flex: 1,
    marginLeft: 16,
    marginRight: 12,
  },
  supportTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#C2410C",
    marginBottom: 4,
  },
  supportDesc: {
    fontSize: 13,
    color: "#EA580C",
    lineHeight: 18,
  },
  supportButton: {
    backgroundColor: "#F97316",
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
  }
});
