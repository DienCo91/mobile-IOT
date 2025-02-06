import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#25292e',
        },
        headerShadowVisible: false,
        headerTintColor: '#fff',
      }}
      initialRouteName="index">
      <Stack.Screen
        name="index"
        options={{
          title: 'Chatbot',
          headerLeft: () => (
            <MaterialCommunityIcons name="robot-excited" size={24} color="#fff" style={{ marginRight: 4 }} />
          ),
        }}
      />
      <Stack.Screen name="modal" options={{ presentation: 'card' }} />
      <Stack.Screen
        name="[detail]"
        options={{
          animation: 'slide_from_right',
          title: 'Detail',
        }}
      />
    </Stack>
  );
};

export default Layout;

const styles = StyleSheet.create({});
