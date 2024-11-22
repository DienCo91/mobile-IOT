import Button from '@/components/Button';
import ImageViewer from '@/components/ImageViewer';
import { ImagePickerResult, launchImageLibraryAsync } from 'expo-image-picker';
import { Link } from 'expo-router';
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

  return (
    <View style={styles.container}>
      <ImageViewer style={styles.image} source={{ uri: result?.assets[0]?.uri }} />
      <Button label="Choose a photo" style={styles.btnStyle} onPress={pickImageAsync} />
      <Button label="Use this photo" />
      {/* <Link href={'/about'}>Go to about</Link> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  txt: {
    color: 'white',
    fontSize: 18,
  },
  btnStyle: {
    borderWidth: 4,
    borderColor: 'orange',
    borderRadius: 16,
  },
});
