import { Text, View, Image, StyleSheet } from "react-native";
import { Navbar } from "@/app/components/navbar";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

// import tabs
import { HomeTab } from "@/app/tabs/homeTab";

const styles = StyleSheet.create({
  tinyLogo: {
    width: 400,
    height: 240,
  },
  text: {
    fontFamily: "DM_Sans",
    fontSize: 16,
  },
});

export default function Index() {
    const [selectedTab, setSelectedTab] = useState<"home" | "marker" | "profile">("home");

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
        backgroundColor: "#ffffff",
      }}
    >
      <HomeTab/>
      <Navbar
        selectedTab={selectedTab}
        onTabPress={(tab) => setSelectedTab(tab)}
      />
    </SafeAreaView>
  );
}
