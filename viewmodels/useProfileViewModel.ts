import { useUserStore } from "../store/useStore";

export function useProfileViewModel() {
  const toggleOnboarding = useUserStore((state) => state.toggleOnboarding);

  return {
    goBackToOnboarding: toggleOnboarding,
  };
}
