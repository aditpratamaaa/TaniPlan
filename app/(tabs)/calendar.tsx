import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const DAYS = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];

const calendarDays = Array.from({ length: 14 }, (_, i) => ({
  num: i + 1,
  label: DAYS[(i + 3) % 7],
  isToday: i === 4,
  hasEvent: [1, 4, 8, 11].includes(i),
}));

const tasks = [
  {
    id: 1,
    status: "Selesai",
    statusColor: "#10B981",
    title: "Penyemprotan Pestisida",
    location: "Sawah Blok A",
    time: "06:00 WIB",
    detail: "Pestisida: 2 liter Furadan",
    buttonType: "done",
  },
  {
    id: 2,
    status: "Belum Selesai",
    statusColor: "#F59E0B",
    title: "Pemupukan Padi Tahap 1",
    location: "Sawah Blok A & B",
    time: "07:00 – 10:00 WIB",
    detail: "Pupuk: 50 kg Urea, 25 kg NPK",
    buttonType: "complete",
  },
  {
    id: 3,
    status: "Mendatang",
    statusColor: "#3B82F6",
    title: "Pengairan / Irigasi",
    location: "Sawah Blok C",
    time: "14:00 WIB",
    detail: "Durasi: ±2 jam",
    buttonType: "remind",
  },
];

export default function CalendarScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>

        {/* Header Info */}
        <View style={styles.seasonCard}>
          <Text style={styles.seasonTitle}>Musim Tanam 2 - 2026</Text>
          <View style={styles.seasonMetaRow}>
            <View style={styles.seasonMeta}>
              <Ionicons name="location" size={16} color="#10B981" />
              <Text style={styles.seasonMetaText}>Sawah Blok A & B</Text>
            </View>
            <View style={styles.seasonMeta}>
              <Ionicons name="partly-sunny" size={16} color="#F59E0B" />
              <Text style={styles.seasonMetaText}>28°C, Cerah</Text>
            </View>
          </View>
        </View>

        {/* Horizontal Calendar Strip */}
        <View style={styles.calendarSection}>
          <View style={styles.calendarHeader}>
            <Text style={styles.calendarMonthTitle}>Oktober 2026</Text>
            <TouchableOpacity>
              <Text style={styles.calendarViewAll}>Lihat Semua</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {calendarDays.map((day) => (
              <View key={day.num} style={[styles.dayCell, day.isToday && styles.dayCellActive]}>
                <Text style={[styles.dayLabel, day.isToday && styles.dayLabelActive]}>{day.label}</Text>
                <Text style={[styles.dayNum, day.isToday && styles.dayNumActive]}>{day.num}</Text>
                {day.hasEvent && (
                  <View style={[styles.eventDot, day.isToday && styles.eventDotActive]} />
                )}
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Task List */}
        <View style={styles.taskSection}>
          <Text style={styles.taskSectionTitle}>Daftar Tugas Minggu Ini</Text>

          {tasks.map((task) => (
            <View key={task.id} style={styles.taskCard}>
              <View style={styles.taskCardHeader}>
                <View style={[styles.statusBadge, { backgroundColor: task.statusColor + "20", borderColor: task.statusColor }]}>
                  <Text style={[styles.statusText, { color: task.statusColor }]}>{task.status}</Text>
                </View>
                <Text style={styles.taskTime}>{task.time}</Text>
              </View>

              <Text style={styles.taskTitle}>{task.title}</Text>

              <View style={styles.taskMeta}>
                <Ionicons name="location" size={14} color="#64748B" />
                <Text style={styles.taskMetaText}>{task.location}</Text>
              </View>

              <View style={[styles.detailChip]}>
                <Ionicons name="information-circle" size={14} color="#64748B" />
                <Text style={styles.detailText}>{task.detail}</Text>
              </View>

              {task.buttonType === "complete" && (
                <TouchableOpacity style={styles.completeButton}>
                  <Ionicons name="checkmark-circle" size={20} color="#FFF" />
                  <Text style={styles.completeButtonText}>Tandai Selesai</Text>
                </TouchableOpacity>
              )}

              {task.buttonType === "remind" && (
                <TouchableOpacity style={styles.remindButton}>
                  <Ionicons name="volume-medium" size={20} color="#3B82F6" />
                  <Text style={styles.remindButtonText}>Pasang Pengingat Suara</Text>
                </TouchableOpacity>
              )}

              {task.buttonType === "done" && (
                <View style={styles.doneIndicator}>
                  <Ionicons name="checkmark-circle" size={18} color="#10B981" />
                  <Text style={styles.doneText}>Sudah Selesai</Text>
                </View>
              )}
            </View>
          ))}
        </View>
      </ScrollView>

      {/* FAB Buttons */}
      <TouchableOpacity style={styles.fab}>
        <Ionicons name="add" size={28} color="#FFF" />
      </TouchableOpacity>
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
    paddingBottom: 100,
  },
  seasonCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  seasonTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1E293B",
    marginBottom: 12,
  },
  seasonMetaRow: {
    flexDirection: "row",
    gap: 20,
  },
  seasonMeta: {
    flexDirection: "row",
    alignItems: "center",
  },
  seasonMetaText: {
    fontSize: 14,
    color: "#64748B",
    marginLeft: 6,
  },
  calendarSection: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  calendarHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  calendarMonthTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1E293B",
  },
  calendarViewAll: {
    fontSize: 14,
    color: "#10B981",
    fontWeight: "600",
  },
  dayCell: {
    width: 52,
    paddingVertical: 12,
    alignItems: "center",
    marginRight: 8,
    borderRadius: 14,
    backgroundColor: "#F8FAFC",
  },
  dayCellActive: {
    backgroundColor: "#10B981",
  },
  dayLabel: {
    fontSize: 12,
    color: "#94A3B8",
    fontWeight: "600",
    marginBottom: 6,
  },
  dayLabelActive: {
    color: "#D1FAE5",
  },
  dayNum: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1E293B",
  },
  dayNumActive: {
    color: "#FFFFFF",
  },
  eventDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#EF4444",
    marginTop: 6,
  },
  eventDotActive: {
    backgroundColor: "#FFFFFF",
  },
  taskSection: {
    gap: 16,
  },
  taskSectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1E293B",
    marginBottom: 8,
  },
  taskCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    gap: 12,
  },
  taskCardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  statusBadge: {
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  statusText: {
    fontSize: 13,
    fontWeight: "bold",
  },
  taskTime: {
    fontSize: 13,
    color: "#64748B",
    fontWeight: "600",
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1E293B",
  },
  taskMeta: {
    flexDirection: "row",
    alignItems: "center",
  },
  taskMetaText: {
    fontSize: 14,
    color: "#64748B",
    marginLeft: 4,
  },
  detailChip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8FAFC",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  detailText: {
    fontSize: 13,
    color: "#64748B",
    marginLeft: 6,
  },
  completeButton: {
    backgroundColor: "#10B981",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
  },
  completeButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: 8,
  },
  remindButton: {
    backgroundColor: "#EFF6FF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#BFDBFE",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
  },
  remindButtonText: {
    color: "#3B82F6",
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: 8,
  },
  doneIndicator: {
    flexDirection: "row",
    alignItems: "center",
  },
  doneText: {
    color: "#10B981",
    fontWeight: "bold",
    fontSize: 14,
    marginLeft: 6,
  },
  fab: {
    position: "absolute",
    bottom: 24,
    right: 24,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#10B981",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#10B981",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 6,
  },
});
