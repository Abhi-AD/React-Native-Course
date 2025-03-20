import { Image, View, Text } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center p-5">
      <View className="flex-row gap-2">
        <Text className="bg-red-500 p-2 text-white">Welcome</Text>
        <HelloWave />
      </View>
      <View>
        <Image source={require('../../assets/images/react-logo.png')} />
        <Image
          className="w-24 h-24 rounded-lg"
          source={{ uri: 'https://avatars.githubusercontent.com/u/72682273?v=4' }}
        />
      </View>
      <View className="flex-row gap-2">
        <Text className="bg-red-500 p-2 text-white">Welcome</Text>
        <HelloWave />
      </View>
    </View>
  );
}

