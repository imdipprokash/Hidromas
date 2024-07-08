import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthStoreType {
  loggedIn: boolean;
  data: any;
  login: (data: {
    access_level: 1;
    created_by: 1;
    created_date: '2024-02-12T12:31:57.669Z';
    designation: 'Sales Executive';
    designation_id: 3;
    email: 'wstest@gmail.com';
    first_name: 'ws';
    gender: 1;
    grade: 'Grade1';
    grade_id: 1;
    is_active: true;
    last_login_date: null;
    last_modified_by: 79;
    last_modified_date: '2024-02-20T18:07:43.669Z';
    last_name: 'test';
    phone: '9999900000';
    profile_image: 'https://firebasestorage.googleapis.com/v0/b/hidromas-we-app.appspot.com/o/profile%2FjIIX9Px2cbMNjooHyzLQ54HURdQ2?alt=media&token=fa6b3309-1cb5-4991-bd67-afc5c9a60397';
    role: 'App User - Sales';
    role_id: 10;
    sap_code: null;
    user_id: 79;
    username: 'wstest';
  }) => void;
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
        }),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ) as any,
);

export {useAuthStore};
