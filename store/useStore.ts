import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persist, createJSONStorage } from 'zustand/middleware';

type UserStore = {
  hasFinishedOnboarding: boolean;
  toggleOnboarding: () => void;
};

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      hasFinishedOnboarding: false,
      toggleOnboarding: () =>
        set((state) => ({
          hasFinishedOnboarding: !state.hasFinishedOnboarding,
        })),
    }),
    {
      name: 'plantly-user-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);