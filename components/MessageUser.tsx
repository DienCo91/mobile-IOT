import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';

interface IMessageUser {
  item: any;
}

const MessageUser: React.FC<IMessageUser> = ({ item }) => {
  return (
    <View style={[styles.container, !item.isMyUser && { flexDirection: 'row-reverse' }]}>
      <Text style={[styles.txt, item.isMyUser && { backgroundColor: '#2489FF', color: 'white' }]}>{item.msg}</Text>
      <Image source={{ uri: item.image }} style={styles.image} />
    </View>
  );
};

export default MessageUser;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  txt: {
    backgroundColor: 'white',
    marginHorizontal: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    maxWidth: '80%',
  },
});
