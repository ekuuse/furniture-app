import { Pressable, Text, TextInput, StyleSheet, Image } from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
        backgroundColor: "#ffffff",
    },
    headerStyling: {
        fontFamily: "Montserrat",
        fontWeight: "700",
        fontSize: 16,
        textAlign: "center",
    },
});

interface HomeTabProps {
  text?: string;
}

export function HomeTab({ text }: HomeTabProps) {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.headerStyling}>Find All You Need</Text>
    </SafeAreaView>
  );
}

export default HomeTab;