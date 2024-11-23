import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Button from '@/components/Button';
import { Image } from 'expo-image';
import FiledInfoUser from '@/components/FiledInfoUser';
import Divider from '@/components/Divider';
import Charts from '@/components/Charts';

const ProfileUser = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={{ uri: 'https://cdn.pixabay.com/photo/2024/06/17/16/39/girl-8836068_640.jpg' }}
          style={styles.image}
        />
        <FiledInfoUser label="username" value="David" />
        <Divider />
        <FiledInfoUser label="email" value="david@gmail.com" />
        <Divider />
        <FiledInfoUser label="age" value="20" />
        <Divider />
        <FiledInfoUser label="status" value="good" />

        <TouchableOpacity style={styles.btnChange} activeOpacity={0.8}>
          <Text style={styles.txt}>Change</Text>
        </TouchableOpacity>

        <Charts label="heart rate" />
        <Charts label="spo2" />
      </View>
    </ScrollView>
  );
};

export default ProfileUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 18,
  },
  txt: {
    color: 'white',
    fontSize: 16,
  },
  btnStyle: {
    borderWidth: 4,
    borderColor: 'orange',
    borderRadius: 16,
  },
  btnChange: {
    backgroundColor: '#2489FF',
    marginTop: 24,
    marginLeft: 'auto',
    paddingHorizontal: 24,
    paddingVertical: 4,
    borderRadius: 4,
  },
});
