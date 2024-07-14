import { Link } from "expo-router";
import { SafeAreaView, StatusBar, Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1">
      <StatusBar style="auto" />

      <SafeAreaView className="flex-1 items-center justify-center">
        <Text className="text-3xl text-green-500">App</Text>
        <Link href={"/profile"}> Go to Profile </Link>
      </SafeAreaView>
    </View>
  );
}
