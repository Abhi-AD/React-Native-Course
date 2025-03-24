import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      headerStyle: {
        backgroundColor: "blue"
      },
      headerTintColor: "white",
      headerTitleStyle: {
        fontWeight: "bold"
      },
      // headerShown: false
    }}>
      <Stack.Screen name="(drawer)" />
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="index" />
      <Stack.Screen name="about" />
    </Stack>
  );
}
