import { useRouter } from "expo-router";
import { launchImageLibraryAsync } from "expo-image-picker";
import { useState } from "react";
import { Alert, Platform } from "react-native";
import { usePlantStore } from "../store/plantStore";

export function useNewPlantViewModel() {
  const router = useRouter();
  const addPlant = usePlantStore((state) => state.addPlant);

  const [name, setName] = useState<string>();
  const [days, setDays] = useState<string>();
  const [imageUri, setImageUri] = useState<string>();

  const handleSubmit = async () => {
    if (!name) {
      return Alert.alert("Validation Error", "Give your plant a name");
    }

    if (!days) {
      return Alert.alert(
        "Validation Error",
        `How often does ${name} need to be watered?`,
      );
    }

    if (Number.isNaN(Number(days))) {
      return Alert.alert(
        "Validation Error",
        "Watering frequency must be a be a number",
      );
    }

    await addPlant(name, Number(days), imageUri);
    router.navigate("/");
  };

  const handleChooseImage = async () => {
    if (Platform.OS === "web") {
      return Alert.alert("Not supported", "Image upload is not supported on web");
    }

    const result = await launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  return {
    name,
    days,
    imageUri,
    setName,
    setDays,
    handleSubmit,
    handleChooseImage,
  };
}
