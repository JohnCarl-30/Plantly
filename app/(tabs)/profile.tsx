import { Button, View, StyleSheet } from "react-native";
import { theme } from "../../theme";
import { useUserStore } from "../../store/useStore";

export default function ProfileScreen() {
  const toggleHasBoarderd = useUserStore((state) => state.toggleOnboarding);
  return (
    <View style={styles.container}>
      <Button title="Back to onboarding" onPress={toggleHasBoarderd} />
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

});
