import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { AppProvider } from '@/container/AppProvider/AppProvider';

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#2489FF',
        tabBarActiveBackgroundColor: '#1c2661a8',
        tabBarStyle: {
          backgroundColor: '#25292e',
        },
        headerStyle: {
          backgroundColor: '#25292e',
        },
        headerShadowVisible: false,
        headerTintColor: '#fff',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Profile User',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'person-circle-sharp' : 'person-circle-outline'} color={color} size={24} />
          ),
          headerLeft: () => <Ionicons name="person-circle-sharp" size={24} color="#fff" style={{ marginLeft: 15 }} />,
        }}
      />
      <Tabs.Screen
        name="chatbot"
        options={{
          title: 'Chatbot',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'robot-excited' : 'robot-excited-outline'}
              color={color}
              size={24}
            />
          ),
          headerLeft: () => (
            <MaterialCommunityIcons name="robot-excited" size={24} color="#fff" style={{ marginLeft: 15 }} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;

const styles = StyleSheet.create({});
