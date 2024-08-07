import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import { images } from "../constants";

export default function App() {
  return (
    <SafeAreaView className="bg-slate-900">
      <ScrollView contentContainerStyle={{ height: "100%" }} className="py-8">
        <View className="w-full h-full items-center justify-between px-5">
          {/* <Image
              source={images.logo}
              resizeMode="contain"
              className="w-[130px] h-[84px]"
            /> */}

          <Text className="text-3xl text-white font-bold">
            <Text className="text-lime-500">App</Text>Logo
          </Text>

          <View className="items-center space-y-6">
            <Image
              source={images.cards}
              resizeMode="contain"
              className="w-[380px] h-[300px]"
            />

            <View className="relative space-y-2">
              <View>
                <Text className="text-3xl text-white font-bold text-center capitalize">
                  Discover endles
                </Text>
                <Text className="text-3xl text-white font-bold text-center capitalize">
                  possibilites <Text className="text-lime-500">App Design</Text>
                </Text>
              </View>

              {/* <Image
                  source={images.path}
                  className="w-[112px] absolute right-5 -bottom-7"
                  resizeMode="contain"
                  tintColor="#84cc16"
                /> */}

              <Text className="text-slate-200 text-center text-lg font-light leading-6">
                Where creativity meets innovation: embark on a journey of
                limitless exploration with JOY
              </Text>
            </View>
          </View>

          <CustomButton
            title={"Contiue with Email"}
            handlePress={() => router.push("/sign-in")}
            containerStyle={"w-full"}
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#0f172a" style="light" />
    </SafeAreaView>
  );
}
