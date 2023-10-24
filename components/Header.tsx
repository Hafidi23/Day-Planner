import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.Header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Header: {
    marginTop: 10,
    height: 60,
    paddingTop: 38,
    backgroundColor: "coral",
  },
  title: {
    textAlign: "center",
    marginTop: -20,
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
