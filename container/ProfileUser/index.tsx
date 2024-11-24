import Charts from '@/components/Charts';
import Divider from '@/components/Divider';
import FiledInfoUser from '@/components/FiledInfoUser';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAppContext } from '../AppProvider/AppProvider';

const ProfileUser = () => {
  const { sharedData, setSharedData } = useAppContext();
  const onLogout = () => {
    setSharedData(null);
    router.replace('/(auth)');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/avatar-default-icon.png',
          }}
          style={styles.image}
        />
        <FiledInfoUser label="username" value={sharedData?.username} />
        <Divider />
        <FiledInfoUser label="email" value={sharedData?.email} />
        <Divider />
        <FiledInfoUser label="age" value={sharedData?.age} />

        <Divider />
        <TouchableOpacity style={styles.btnChange} activeOpacity={0.8} onPress={onLogout}>
          <Text style={styles.txt}>Logout</Text>
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
