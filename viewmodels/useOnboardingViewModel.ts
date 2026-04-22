import { useRouter } from "expo-router";
import { useUserStore } from "../store/useStore";

export function useOnboardingViewModel() {
  const router = useRouter();
  const toggleOnboarding = useUserStore((state) => state.toggleOnboarding);

  const handleEnterApp = () => {
    toggleOnboarding();
    router.replace("/(tabs)");
  };

  return {
    handleEnterApp,
  };
}
