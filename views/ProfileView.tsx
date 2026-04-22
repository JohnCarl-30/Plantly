import { StyleSheet, View } from "react-native";
import { PlantlyButton } from "../components/PlantlyButton";
import { theme } from "../theme";
import { useProfileViewModel } from "../viewmodels/useProfileViewModel";

export function ProfileView() {
  const { goBackToOnboarding } = useProfileViewModel();

  return (
    <View style={styles.container}>
      <PlantlyButton title="Back to onboarding" onPress={goBackToOnboarding} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colorWhite,
  },
});
