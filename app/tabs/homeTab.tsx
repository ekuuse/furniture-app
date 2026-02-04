import { Pressable, Text, View, StyleSheet, Image } from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { CategoryButton } from "@/app/components/categoryButton";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#ffffff",
    },
    headerStyling: {
      justifyContent: "flex-start",
      flexDirection: "row",
      alignContent: "center",
      alignItems: "center",
    },
    headerTextStyling: {
        fontFamily: "Montserrat",
        fontWeight: "700",
        fontSize: 16,
        textAlign: "center",
        marginBottom: 34,
    },
    searchIcon: {
      width: 30,
      height: 30,
    },
    categoriesContainer: {
      flexDirection: "row",
      gap: 25,
      marginBottom: 20,
    }
});

interface HomeTabProps {
  text?: string;
}

export function HomeTab({ text }: HomeTabProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerStyling}>
        <Image style={styles.searchIcon} source={require("@/assets/icons/search.png")} />
        <Text style={styles.headerTextStyling}>Find All You Need</Text>
      </View>
      <View style={styles.categoriesContainer}>
        <CategoryButton label={"Popular"} iconName="star"></CategoryButton>
        <CategoryButton label={"Chair"} iconName="chair"></CategoryButton>
        <CategoryButton label={"Table"} iconName="table"></CategoryButton>
        <CategoryButton label={"Armchair"} iconName="armchair"></CategoryButton>
        <CategoryButton label={"Bed"} iconName="bed"></CategoryButton>
      </View>
    </SafeAreaView>
  );
}

export default HomeTab;