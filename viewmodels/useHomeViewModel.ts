import { useRouter } from "expo-router";
import { usePlantStore } from "../store/plantStore";

export function useHomeViewModel() {
  const router = useRouter();
  const plants = usePlantStore((state) => state.plants);

  const navigateToNewPlant = () => {
    router.navigate("/new");
  };

  return {
    plants,
    navigateToNewPlant,
  };
}
