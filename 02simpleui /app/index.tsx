import { Text, View } from "react-native";
import { Link } from "expo-router";

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
      <Text
        style={{
          fontSize: 24,
          fontWeight: "700",
          color: "white",
          textAlign: "center",
        }}
      >
        Hello, Welcome to Clouds Nepal
      </Text>
      <Link
        href="/about"
        style={{
          fontSize: 20,
          textDecorationLine: "underline",
          color: "#fff",
          marginTop: 10,
          backgroundColor: "blue",
          padding: 20,
          borderRadius: 10
        }}
      >
        Go to About screen
      </Link>
      <Link
        href="/(tabs)"
        style={{
          fontSize: 20,
          textDecorationLine: "underline",
          color: "#fff",
          marginTop: 10,
          backgroundColor: "blue",
          padding: 20,
          borderRadius: 10
        }}
      >
        Go to Tabs
      </Link>
      <Link
        href="/(drawer)"
        style={{
          fontSize: 20,
          textDecorationLine: "underline",
          color: "#fff",
          marginTop: 10,
          backgroundColor: "blue",
          padding: 20,
          borderRadius: 10
        }}
      >
        Go to drawer
      </Link>
    </View>
  );
}
