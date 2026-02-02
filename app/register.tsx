import { Text, View, Image, StyleSheet } from "react-native";
import { BlueButton } from "@/app/components/blueButton";
import { BlueClickableLink } from "@/app/components/blueClickableLink";
import { TextBox } from "@/app/components/textBoxInput"
import { HeaderBack } from "@/app/components/headerBack"
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { AdvancedCheckbox } from 'react-native-advanced-checkbox';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  termsPrivacyView: {
    flex: 1,
    flexDirection: "row", 
    alignItems: "center",
    alignContent: "center",
    gap: 4,
    backgroundColor: "#ffffff",
  },
  termsPrivacyText: {
    fontFamily: "Montserrat",
    fontSize: 16,
    fontWeight: "500",
    color: "#4F63AC",
  }
});

export default function Register() {
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  return (
        <View style={styles.container}>
            <HeaderBack text="Sign Up"></HeaderBack>
            <TextBox label="Name" placeholder="John Doe"></TextBox>
            <TextBox label="E-mail" placeholder="example@gmail.com"></TextBox>
            <TextBox label="Password" safeInput={true}></TextBox>
            <View style={styles.termsPrivacyView}>
                <AdvancedCheckbox
                value={checked}
                onValueChange={setChecked}
                checkedColor="#007AFF"
                uncheckedColor="#ccc"
                size={24}
                />
                <Text style={styles.termsPrivacyText}>I agree with </Text>
                <BlueClickableLink label="Terms"></BlueClickableLink>
                <Text style={styles.termsPrivacyText}>&</Text>
                <BlueClickableLink label="Privacy"></BlueClickableLink>
            </View>
        </View>
  );
}
