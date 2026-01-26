import { Text, View, Pressable } from "react-native";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

export default function Index() {
  useEffect(() => {
    const hideSplash = async () => {
      await SplashScreen.hideAsync();
    };
    hideSplash();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
      }}
    >
      <Text>look, a button</Text>
      <Text>must I try?</Text>
      <Pressable
        android_ripple={{
          color: "rgba(0, 255, 51, 0.66)",
          foreground: true,
          radius: 62,
        }}
        style={({ pressed }) => ({
          padding: 12,
          backgroundColor: pressed ? "#313131" : "#000000",
          borderRadius: 8,
        })}
      >
        <Text style={{ color: "#ffffff" }}>I'm pressable!</Text>
      </Pressable>
    </View>
  );
}
