import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const transactions = [
  {
    id: 1,
    type: "income",
    title: "Panen Padi Blok A",
    date: "05 Okt 2026",
    party: "Tengkulak Pak Hasan",
    amount: "Rp 3.200.000",
  },
  {
    id: 2,
    type: "expense",
    title: "Beli Pupuk Urea",
    date: "03 Okt 2026",
    party: "Toko Tani Maju",
    amount: "Rp 450.000",
  },
  {
    id: 3,
    type: "income",
    title: "Panen Cabai Blok B",
    date: "01 Okt 2026",
    party: "Pasar Induk",
    amount: "Rp 2.800.000",
  },
  {
    id: 4,
    type: "expense",
    title: "Biaya Tenaga Kerja",
    date: "29 Sep 2026",
    party: "Tim 4 Orang",
    amount: "Rp 550.000",
  },
];

export default function LedgerScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>

        {/* Main Balance Card */}
        <View style={styles.mainBalanceCard}>
          <Text style={styles.balanceMeta}>TOTAL KEUNTUNGAN BERSIH</Text>
          <Text style={styles.balanceAmount}>Rp 5.000.000</Text>
          <Text style={styles.balancePeriod}>Oktober 2026</Text>

          <View style={styles.summaryRow}>
            <View style={styles.summaryBox}>
              <View style={styles.summaryIcon}>
                <Ionicons name="arrow-down-circle" size={22} color="#10B981" />
              </View>
              <Text style={styles.summaryLabel}>Pemasukan</Text>
              <Text style={[styles.summaryValue, { color: "#10B981" }]}>Rp 6.000.000</Text>
            </View>
            <View style={styles.summaryDivider} />
            <View style={styles.summaryBox}>
              <View style={styles.summaryIcon}>
                <Ionicons name="arrow-up-circle" size={22} color="#EF4444" />
              </View>
              <Text style={styles.summaryLabel}>Pengeluaran</Text>
              <Text style={[styles.summaryValue, { color: "#EF4444" }]}>Rp 1.000.000</Text>
            </View>
          </View>
        </View>

        {/* Recent Harvest Highlight */}
        <View style={styles.harvestCard}>
          <View style={styles.harvestLeft}>
            <Ionicons name="leaf" size={28} color="#10B981" />
            <View style={styles.harvestText}>
              <Text style={styles.harvestTitle}>Panen Terakhir</Text>
              <Text style={styles.harvestDesc}>Padi Blok A • 500 kg</Text>
            </View>
          </View>
          <Text style={styles.harvestIncome}>+Rp 3.200.000</Text>
        </View>

        {/* Filters */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScroll}>
          {["Semua", "Pemasukan", "Pengeluaran", "Bulan Ini"].map((f, i) => (
            <TouchableOpacity key={i} style={[styles.filterChip, i === 0 && styles.filterChipActive]}>
              <Text style={[styles.filterChipText, i === 0 && styles.filterChipTextActive]}>{f}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Transaction History */}
        <Text style={styles.sectionTitle}>Riwayat Transaksi Terakhir</Text>

        <View style={styles.transactionList}>
          {transactions.map((tx) => (
            <View key={tx.id} style={styles.txCard}>
              <View style={[styles.txIconBox, {
                backgroundColor: tx.type === "income" ? "#D1FAE5" : "#FEE2E2",
              }]}>
                <Ionicons
                  name={tx.type === "income" ? "arrow-down" : "arrow-up"}
                  size={22}
                  color={tx.type === "income" ? "#10B981" : "#EF4444"}
                />
              </View>
              <View style={styles.txInfo}>
                <Text style={styles.txTitle}>{tx.title}</Text>
                <Text style={styles.txParty}>{tx.party}</Text>
                <Text style={styles.txDate}>{tx.date}</Text>
              </View>
              <Text style={[styles.txAmount, {
                color: tx.type === "income" ? "#10B981" : "#EF4444"
              }]}>
                {tx.type === "income" ? "+" : "−"}{tx.amount}
              </Text>
            </View>
          ))}
        </View>

      </ScrollView>

      {/* Floating Action Buttons */}
      <View style={styles.fabRow}>
        <TouchableOpacity style={[styles.fabWide, { backgroundColor: "#10B981" }]}>
          <Ionicons name="add-circle" size={22} color="#FFF" />
          <Text style={styles.fabWideText}>Catat Pemasukan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.fabWide, { backgroundColor: "#EF4444" }]}>
          <Ionicons name="remove-circle" size={22} color="#FFF" />
          <Text style={styles.fabWideText}>Catat Pengeluaran</Text>
        </TouchableOpacity>
      </View>
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
    paddingBottom: 120,
  },
  mainBalanceCard: {
    backgroundColor: "#065F46",
    borderRadius: 20,
    padding: 24,
    marginBottom: 16,
    alignItems: "center",
  },
  balanceMeta: {
    color: "#A7F3D0",
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 1.5,
    marginBottom: 8,
  },
  balanceAmount: {
    color: "#FFFFFF",
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 4,
  },
  balancePeriod: {
    color: "#6EE7B7",
    fontSize: 14,
    marginBottom: 24,
  },
  summaryRow: {
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 14,
    width: "100%",
  },
  summaryDivider: {
    width: 1,
    backgroundColor: "rgba(255,255,255,0.2)",
    marginVertical: 12,
  },
  summaryBox: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  summaryIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "rgba(255,255,255,0.15)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  summaryLabel: {
    color: "#A7F3D0",
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 4,
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: "bold",
  },
  harvestCard: {
    backgroundColor: "#F0FDF4",
    borderRadius: 14,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#D1FAE5",
  },
  harvestLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  harvestText: {
    marginLeft: 12,
  },
  harvestTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#1E293B",
  },
  harvestDesc: {
    fontSize: 13,
    color: "#64748B",
    marginTop: 2,
  },
  harvestIncome: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#10B981",
  },
  filterScroll: {
    flexDirection: "row",
    marginBottom: 20,
  },
  filterChip: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 18,
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
    fontSize: 14,
  },
  filterChipTextActive: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1E293B",
    marginBottom: 16,
  },
  transactionList: {
    gap: 12,
  },
  txCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 1,
  },
  txIconBox: {
    width: 46,
    height: 46,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  txInfo: {
    flex: 1,
  },
  txTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#1E293B",
  },
  txParty: {
    fontSize: 13,
    color: "#64748B",
    marginTop: 2,
  },
  txDate: {
    fontSize: 12,
    color: "#94A3B8",
    marginTop: 2,
  },
  txAmount: {
    fontSize: 15,
    fontWeight: "bold",
  },
  fabRow: {
    position: "absolute",
    bottom: 20,
    left: 16,
    right: 16,
    flexDirection: "row",
    gap: 12,
  },
  fabWide: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    borderRadius: 16,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  fabWideText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 14,
    marginLeft: 6,
  },
});
