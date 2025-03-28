import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
      {/* <StatusBar hidden /> */}
      <StatusBar backgroundColor='#000000' style='light' />
    </>
  );
}
