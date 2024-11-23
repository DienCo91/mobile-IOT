import Button from '@/components/Button';
import ProfileUser from '@/container/ProfileUser';
import { ImagePickerResult, launchImageLibraryAsync } from 'expo-image-picker';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  const [result, setResult] = useState<ImagePickerResult | null>(null);

  const pickImageAsync = async () => {
    try {
      const res = await launchImageLibraryAsync({
        mediaTypes: ['images'],
        allowsEditing: true,
        quality: 1,
      });
      setResult(res);
    } catch (err) {
      console.log('err', err);
    }
  };

  return <ProfileUser />;
}
