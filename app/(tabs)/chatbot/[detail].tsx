import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link, useGlobalSearchParams, useLocalSearchParams } from 'expo-router';

const Detail = () => {
  const local = useLocalSearchParams<{ detail: string }>();

  console.log('Local:', local);
  return (
    <View>
      <Text style={{ marginVertical: 20 }}>Detail {local.detail}</Text>
      <Link href={'/(auth)'} asChild replace>
        <Button title="Logout" />
      </Link>

      <Link href={'../chatbot/modal'} asChild>
        <Button title="Open Modal" />
      </Link>
    </View>
  );
};

export default Detail;
