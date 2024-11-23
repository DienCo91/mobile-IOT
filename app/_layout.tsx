import { Stack, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { Alert, AppState, AppStateStatus, BackHandler } from 'react-native';

export default function RootLayout() {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      router.replace('/');
    };

    const appStateListener = AppState.addEventListener('change', (nextAppState: AppStateStatus) => {
      if (nextAppState === 'active') {
        checkAuth();
      }
    });

    checkAuth();

    return () => {
      appStateListener.remove();
    };
  }, [router]);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: 'Login' }} />
      <Stack.Screen name="register" options={{ headerTitle: 'Register' }} />

      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
