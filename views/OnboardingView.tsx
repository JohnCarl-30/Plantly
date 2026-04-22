import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";
import { PlantlyButton } from "../components/PlantlyButton";
import { PlantlyImage } from "../components/PlantlyImage";
import { theme } from "../theme";
import { useOnboardingViewModel } from "../viewmodels/useOnboardingViewModel";

export function OnboardingView() {
  const { handleEnterApp } = useOnboardingViewModel();

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={[theme.colorGreen, theme.colorAppleGreen, theme.colorLimeGreen]}
      style={styles.container}
    >
      <StatusBar style="light" />
      <View>
        <Text style={styles.heading}>Plantly</Text>
        <Text style={styles.tagline}>Keep your plants healthy and hydrated</Text>
      </View>
      <PlantlyImage />
      <PlantlyButton title="Let me in!" onPress={handleEnterApp} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: theme.colorWhite,
  },
  heading: {
    fontSize: 42,
    color: theme.colorWhite,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  tagline: {
    fontSize: 24,
    color: theme.colorWhite,
    textAlign: "center",
  },
});
