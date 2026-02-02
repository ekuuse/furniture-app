import { Text, Pressable, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bclStyling: {
    fontFamily: "Montserrat",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    textAlignVertical: "center",
    color: "#4F63AC",
  },
});

interface BlueClickableLinkProps {
  label: string;
  onPress?: () => void;
}

export function BlueClickableLink({ label, onPress }: BlueClickableLinkProps) {
  return (
      <Text style={styles.bclStyling} onPress={onPress}>{label}</Text>
  );
}

export default BlueClickableLink;