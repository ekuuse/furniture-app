import { Text, Pressable, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  blueButtonStyling: {
    fontFamily: "Montserrat",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    textAlignVertical: "center",
    color: "#ffffff",
    backgroundColor: "#4F63AC",
    padding: 10,
    borderRadius: 8,
    width: 303,
    height: 60,
  },
});

interface BlueButtonProps {
  label: string;
  onPress?: () => void;
}

export function BlueButton({ label, onPress }: BlueButtonProps) {
  return (
    <Pressable onPress={onPress}>
      <Text style={styles.blueButtonStyling}>{label}</Text>
    </Pressable>
  );
}

export default BlueButton;
