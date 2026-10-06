import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function PasarScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header Section */}
        <View style={styles.header}>
          <View>
            <Text style={styles.pageTitle}>Harga Pasar Hari Ini</Text>
            <View style={styles.locationRow}>
              <Ionicons name="location" size={16} color="#64748B" />
              <Text style={styles.locationText}>Pasar Induk Sukamaju</Text>
            </View>
          </View>
          <View style={styles.updateBadge}>
            <Text style={styles.updateText}>Diperbarui 10:00</Text>
          </View>
        </View>

        {/* Search & Filters */}
        <View style={styles.filterSection}>
          <View style={styles.searchBar}>
            <Ionicons name="search" size={20} color="#888" />
            <TextInput 
              placeholder="Cari komoditas..." 
              style={styles.searchInput}
            />
          </View>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScroll}>
            <TouchableOpacity style={[styles.filterChip, styles.filterChipActive]}>
              <Text style={styles.filterChipTextActive}>Semua</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterChip}>
              <Text style={styles.filterChipText}>Sayuran</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterChip}>
              <Text style={styles.filterChipText}>Biji-bijian</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Commodity List */}
        <View style={styles.listSection}>
          <View style={styles.commodityCard}>
            <View style={styles.cardHeader}>
              <Text style={styles.commodityName}>Cabai Rawit Merah</Text>
              <View style={[styles.trendBadge, { backgroundColor: "#DC2626" }]}>
                <Ionicons name="arrow-up" size={14} color="#FFF" />
                <Text style={styles.trendText}>Naik</Text>
              </View>
            </View>
            <Text style={styles.priceText}>Rp 45.000 <Text style={styles.unitText}>/ kg</Text></Text>
            <View style={styles.demandRow}>
              <Ionicons name="stats-chart" size={16} color="#F59E0B" />
              <Text style={styles.demandText}>Permintaan Tinggi</Text>
            </View>
          </View>

          <View style={styles.commodityCard}>
            <View style={styles.cardHeader}>
              <Text style={styles.commodityName}>Gabah Kering Panen</Text>
              <View style={[styles.trendBadge, { backgroundColor: "#10B981" }]}>
                <Ionicons name="remove" size={14} color="#FFF" />
                <Text style={styles.trendText}>Stabil</Text>
              </View>
            </View>
            <Text style={styles.priceText}>Rp 7.200 <Text style={styles.unitText}>/ kg</Text></Text>
            <View style={styles.demandRow}>
              <Ionicons name="stats-chart" size={16} color="#3B82F6" />
              <Text style={styles.demandText}>Permintaan Normal</Text>
            </View>
          </View>
          
          <View style={styles.commodityCard}>
            <View style={styles.cardHeader}>
              <Text style={styles.commodityName}>Bawang Merah</Text>
              <View style={[styles.trendBadge, { backgroundColor: "#3B82F6" }]}>
                <Ionicons name="arrow-down" size={14} color="#FFF" />
                <Text style={styles.trendText}>Turun</Text>
              </View>
            </View>
            <Text style={styles.priceText}>Rp 22.000 <Text style={styles.unitText}>/ kg</Text></Text>
            <View style={styles.demandRow}>
              <Ionicons name="stats-chart" size={16} color="#64748B" />
              <Text style={styles.demandText}>Permintaan Menurun</Text>
            </View>
          </View>

          <View style={styles.commodityCard}>
            <View style={styles.cardHeader}>
              <Text style={styles.commodityName}>Tomat Sayur</Text>
              <View style={[styles.trendBadge, { backgroundColor: "#10B981" }]}>
                <Ionicons name="remove" size={14} color="#FFF" />
                <Text style={styles.trendText}>Stabil</Text>
              </View>
            </View>
            <Text style={styles.priceText}>Rp 12.500 <Text style={styles.unitText}>/ kg</Text></Text>
            <View style={styles.demandRow}>
              <Ionicons name="stats-chart" size={16} color="#3B82F6" />
              <Text style={styles.demandText}>Permintaan Normal</Text>
            </View>
          </View>
        </View>

        {/* Tips Section */}
        <View style={styles.tipsCard}>
          <View style={styles.tipsHeader}>
            <Ionicons name="bulb" size={24} color="#EAB308" />
            <Text style={styles.tipsTitle}>Tips Penjualan Panen</Text>
          </View>
          <Text style={styles.tipsDesc}>
            Harga cabai sedang tinggi. Pertimbangkan untuk segera memanen jika sudah matang untuk memaksimalkan keuntungan sebelum harga kembali turun.
          </Text>
          <TouchableOpacity style={styles.coopButton}>
            <Ionicons name="people" size={20} color="#10B981" />
            <Text style={styles.coopButtonText}>Hubungi Koperasi Tani</Text>
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1E293B",
    marginBottom: 4,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    fontSize: 14,
    color: "#64748B",
    marginLeft: 4,
  },
  updateBadge: {
    backgroundColor: "#E0F2FE",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
  },
  updateText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#0369A1",
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
    marginBottom: 24,
  },
  commodityCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  commodityName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1E293B",
  },
  trendBadge: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  trendText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 4,
  },
  priceText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#10B981",
    marginBottom: 12,
  },
  unitText: {
    fontSize: 16,
    color: "#64748B",
    fontWeight: "normal",
  },
  demandRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8FAFC",
    padding: 8,
    borderRadius: 8,
  },
  demandText: {
    fontSize: 14,
    color: "#475569",
    marginLeft: 8,
    fontWeight: "500",
  },
  tipsCard: {
    backgroundColor: "#FEF9C3",
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: "#FEF08A",
  },
  tipsHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  tipsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#854D0E",
    marginLeft: 8,
  },
  tipsDesc: {
    fontSize: 14,
    color: "#A16207",
    lineHeight: 22,
    marginBottom: 16,
  },
  coopButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    borderRadius: 12,
  },
  coopButtonText: {
    color: "#10B981",
    fontWeight: "bold",
    fontSize: 14,
    marginLeft: 8,
  },
});
