import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

const detail = () => {
  return (
    <View>
      <Text>Detail</Text>
      <Link href={'/(tabs)/chatbot'} asChild>
        <Text>Back action</Text>
      </Link>
    </View>
  );
};

export default detail;

const styles = StyleSheet.create({
  icon: {
    padding: 10,
    color: '#2489FF',
  },
});
