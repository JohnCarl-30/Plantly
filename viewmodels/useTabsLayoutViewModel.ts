import { useUserStore } from "../store/useStore";

export function useTabsLayoutViewModel() {
  const hasFinishedOnboarding = useUserStore(
    (state) => state.hasFinishedOnboarding,
  );

  return {
    hasFinishedOnboarding,
  };
}
