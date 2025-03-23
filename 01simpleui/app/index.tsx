import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        backgroundColor: "red",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{
        fontSize: 24,
        fontWeight: "700",
        color: "white",
      }}>Hello Welcome to Clouds Nepal </Text>
    </View>
  );
}
