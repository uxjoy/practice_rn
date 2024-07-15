import { Link } from "expo-router";
import { SafeAreaView, StatusBar, Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1">
      <StatusBar style="auto" />

      <SafeAreaView className="flex-1 items-center justify-center space-y-2">
        <Text className="text-3xl font-bold text-green-500">App Design</Text>
        <Link href={"/home"} className="p-2 text-lg"> Go to Home </Link>
      </SafeAreaView>
    </View>
  );
}
