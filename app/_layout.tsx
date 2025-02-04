import { AppProvider, useAppContext } from '@/container/AppProvider/AppProvider';
import { Stack, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { Alert, AppState, AppStateStatus, BackHandler } from 'react-native';

export default function RootLayout() {
  const router = useRouter();

  return (
    <AppProvider>
      <Stack>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </AppProvider>
  );
}
