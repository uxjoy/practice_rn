import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";
import FormField from "../../components/FormField";

const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <SafeAreaView className="bg-slate-900 h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full h-full items-center justify-center px-6">
          <View className="w-full space-y-6">
            {/* <Image source={images.logo} /> */}

            {/* <Text className="text-3xl text-white font-bold">
            <Text className="text-lime-500">App</Text>Logo
          </Text> */}

            <View className="space-y-2 mb-4">
              <Text className="text-white text-4xl font-semibold text-center">
                Sign In
              </Text>
              <Text className="text-slate-400 text-base text-center">
                Please fill-up all the credentials
              </Text>
            </View>

            <View className="form-container flex-col space-y-6 ">
              <View>
                <FormField
                  title="Email"
                  value={form.email}
                  handleChangeText={(e) => setForm({ ...form, email: e })}
                  otherStyle="mt-0"
                  keyboardType="email-address"
                />
              </View>

              <View>
                <FormField
                  title="Password"
                  value={form.password}
                  handleChangeText={(e) => setForm({ ...form, password: e })}
                  otherStyle="mt-0"
                />
              </View>

              <CustomButton
                title={"Sign In"}
                handlePress={() => {}}
                isLoading={isSubmitting}
                containerStyle={"rounded-xl h-14 mt-8"}
              />
            </View>

            <View className="mt-4 flex-row items-center justify-center space-x-1">
              <Text className="text-slate-400 text-base">
                Don't have an account?
              </Text>
              <Link
                href="/sign-up"
                className="text-lime-500 text-base font-medium"
              >
                Sign Up
              </Link>
            </View>
          </View>
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#0f172a" style="light" />
    </SafeAreaView>
  );
};

export default SignIn;
