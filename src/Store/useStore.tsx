import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthStoreType {
  loggedIn: boolean;
  data: any;
  login: (data: any) => void;
  logout: () => void;
}

const useAuthStore = create<AuthStoreType>(
  persist<AuthStoreType>(
    set => ({
      loggedIn: false,
      data: {},
      login: data => set({loggedIn: true, data: data}),
      logout: () =>
        set({
          loggedIn: false,
          data: {},
        }),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ) as any,
);

export {useAuthStore};
