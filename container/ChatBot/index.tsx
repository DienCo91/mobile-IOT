import MessageUser from '@/components/MessageUser';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { useAppContext } from '../AppProvider/AppProvider';
import { Link } from 'expo-router';

const data = [
  {
    msg: 'Bạn Có Biết Đỗ Dũng Không ?',
    image: 'https://cdn.pixabay.com/photo/2024/06/17/16/39/girl-8836068_640.jpg',
    isMyUser: true,
  },
  {
    msg: 'Cái thằng ý mắt bị thâm phải không ?',
    image:
      'https://media.istockphoto.com/id/1221348467/vector/chat-bot-ai-and-customer-service-support-concept-vector-flat-person-illustration-smiling.jpg?s=612x612&w=0&k=20&c=emMSOYb4jWIVQQBVpYvP9LzGwPXXhcmbpZHlE6wgR78=',
    isMyUser: false,
  },
];

const ChatBot = () => {
  const { sharedData } = useAppContext();
  console.log('🚀 ~ ChatBot ~ sharedData:', sharedData);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flex: 8 }}>
        <View style={{ flex: 1, justifyContent: 'flex-end', paddingVertical: 16 }}>
          {data.map((item, index) => (
            <MessageUser key={index} item={item} />
          ))}
        </View>
      </ScrollView>

      <View style={styles.containerInput}>
        <TextInput style={styles.input} multiline placeholder="Enter..." />
        <Ionicons size={24} style={styles.icon} name="paper-plane" />
        <Link href={'../chatbot/detail'} asChild>
          <Ionicons size={24} style={styles.icon} name="accessibility" />
        </Link>
      </View>
    </View>
  );
};

export default ChatBot;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    justifyContent: 'space-between',
  },
  containerInput: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
  },
  input: {
    flex: 1,
    paddingHorizontal: 8,
  },
  icon: {
    padding: 10,
    color: '#2489FF',
  },
});
