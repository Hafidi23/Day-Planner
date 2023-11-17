import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.lineStyle}>
        <View
          style={{
            flex: 1,
            height: 1,
            backgroundColor: "coral",
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
            backgroundColor: "coral",
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: -10,
    color: "white",
    fontSize: 38,
    fontWeight: "800",
    paddingHorizontal: 10,
  },
  lineStyle: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  container: {
    backgroundColor: "black",
    height: 60,
    marginVertical: 10,
  },
});
