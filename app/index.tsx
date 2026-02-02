import { Text, View, Image, StyleSheet } from "react-native";
import { BlueButton } from "@/app/components/blueButton";
import { BlueClickableLink } from "@/app/components/blueClickableLink";
import { router } from "expo-router";

const styles = StyleSheet.create({
  tinyLogo: {
    width: 400,
    height: 240,
  },
  text: {
    fontFamily: "DM_Sans",
    fontSize: 16,
  },
  buttonText: {
    fontFamily: "DM_Sans",
    fontSize: 16,
    fontWeight: "600",
  },
  motoText: {
    fontFamily: "DM_Sans",
    fontSize: 40,
    fontWeight: "700",
  },
  motoTextColored: {
    fontFamily: "DM_Sans",
    fontSize: 40,
    fontWeight: "700",
    color: "#FCA34D",
    textDecorationLine: "underline",
  },
});

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
        backgroundColor: "#ffffff",
      }}
    >
      <Image
        style={styles.tinyLogo}
        source={require("@/assets/images/splashimage.jpg")}
      />
      <View style={{
        padding: 55,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
      }}>
        <Text style={styles.motoText}>You'll Find</Text>
        <Text style={styles.motoTextColored}>All you need</Text>
        <Text style={styles.motoText}>Here!</Text>
      </View>
      
      <BlueButton label="Sign Up" onPress={() => router.push("/register")}/>
      <BlueClickableLink label="Sign In" />
    </View>
  );
}
