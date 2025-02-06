import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

const Layout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerContentStyle: {
            borderRadius: 0,
          },
          drawerItemStyle: {
            borderRadius: 4,
          },
        }}>
        <Drawer.Screen
          name="home"
          options={{
            drawerLabel: 'Home',
            title: 'Home',
          }}
        />
        <Drawer.Screen
          name="trend"
          options={{
            drawerLabel: 'Trend',
            title: 'Trend',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default Layout;
