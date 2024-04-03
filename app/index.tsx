import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import system from "../src/style/system";

export default function App() {
  const [fontLoaded] = useFonts({
    "Inter-Black": require("../assets/fonts/Inter/static/Inter-Black.ttf"),
    "Inter-Bold": require("../assets/fonts/Inter/static/Inter-Bold.ttf"),
    "Inter-ExtraBold": require("../assets/fonts/Inter/static/Inter-ExtraBold.ttf"),
    "Inter-ExtraLight": require("../assets/fonts/Inter/static/Inter-ExtraLight.ttf"),
    "Inter-Light": require("../assets/fonts/Inter/static/Inter-Light.ttf"),
    "Inter-Medium": require("../assets/fonts/Inter/static/Inter-Medium.ttf"),
    "Inter-Regular": require("../assets/fonts/Inter/static/Inter-Regular.ttf"),
    "Inter-SemiBold": require("../assets/fonts/Inter/static/Inter-SemiBold.ttf"),
    "Inter-Thin": require("../assets/fonts/Inter/static/Inter-Thin.ttf"),

    "Pacifico-Regular": require("../assets/fonts/Pacifico/Pacifico-Regular.ttf"),
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontFamily: "Pacifico-Regular",
    fontSize: system.fonts.sizes[300],
    color: system.colors.primary[400],
  },
});
