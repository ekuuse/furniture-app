import { Text, Pressable, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bclStyling: {
    fontFamily: "Montserrat",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    textAlignVertical: "center",
    color: "#4F63AC",
    marginTop: 10,
  },
});

interface BlueClickableLinkProps {
  label: string;
  onPress?: () => void;
}

export function BlueClickableLink({ label, onPress }: BlueClickableLinkProps) {
  return (
    <Pressable onPress={onPress}>
      <Text style={styles.bclStyling}>{label}</Text>
    </Pressable>
  );
}

export default BlueClickableLink;