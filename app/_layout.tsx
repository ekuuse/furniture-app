import { Stack } from "expo-router";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

export default function RootLayout() {
  useEffect(() => {
      const prepare = async () => {
        try {
          await Font.loadAsync({
            DM_Sans: require("@/assets/fonts/DMSans.ttf"),
            Montserrat: require("@/assets/fonts/Montserrat.ttf"),
          });
        } catch (e) {
          console.warn(e);
        } finally {
          await SplashScreen.hideAsync();
        }
      };
      prepare();
    }, []);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ headerShown: false }} />
    </Stack>
  );
}
