import { View, StyleSheet, Button } from "react-native";
import { theme } from "../theme";
import { useUserStore } from "../store/useStore";
import { useRouter } from "expo-router";

export default function OnboardingScreen() {
  const route = useRouter();
  const toggleOnboarding = useUserStore((state) => state.toggleOnboarding);
  const handlePress = () => {
    toggleOnboarding();
    route.replace("/(tabs)");
  }
  return (
    <View style={styles.container}>
     <Button title="Let me in!" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colorWhwite,
  },
  text: {
    fontSize: 24,
  },
});