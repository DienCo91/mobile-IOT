import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: 'Login' }} />
      <Stack.Screen name="register" options={{ headerTitle: 'Register' }} />
    </Stack>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({});
