import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View>
      <View style={styles.lineStyle}>
        <View
          style={{
            flex: 1,
            height: 1,
            backgroundColor: "rgba(76, 175, 80, 0.3)",
          }}
        />
        <View>
          <Text style={styles.title}>
            Todo<Text style={{ fontWeight: "300", color: "coral" }}>List</Text>
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            height: 1,
            backgroundColor: "rgba(76, 175, 80, 0.3)",
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: -20,
    color: "black",
    fontSize: 38,
    fontWeight: "800",
    paddingHorizontal: 30,
  },
  lineStyle: {
    flexDirection: "row",
    marginTop: 30,
    alignItems: "center",
  },
});
