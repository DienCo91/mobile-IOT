import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text>About</Text>
      <Link href={'/+not-found'}>Go to not found</Link>
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
