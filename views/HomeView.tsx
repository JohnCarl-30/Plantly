import { FlatList, StyleSheet } from "react-native";
import { PlantCard } from "../components/PlantCard";
import { PlantlyButton } from "../components/PlantlyButton";
import { theme } from "../theme";
import { useHomeViewModel } from "../viewmodels/useHomeViewModel";

export function HomeView() {
  const { plants, navigateToNewPlant } = useHomeViewModel();

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={plants}
      renderItem={({ item }) => <PlantCard plant={item} />}
      ListEmptyComponent={
        <PlantlyButton title="Add your first plant" onPress={navigateToNewPlant} />
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
  },
  contentContainer: {
    padding: 12,
  },
});
