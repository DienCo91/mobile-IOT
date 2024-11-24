import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { URL } from '@/CONST';

interface UserInfo {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
  age: string; // Sử dụng string để xử lý dễ hơn trong TextInput
}

const Register = () => {
  const [infoUser, setInfoUser] = useState<UserInfo>({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    age: '',
  });

  const router = useRouter();

  const handleInputChange = (field: keyof UserInfo, value: string) => {
    setInfoUser({ ...infoUser, [field]: value });
  };

  const handleRegister = async () => {
    const { username, password, confirmPassword, email, age } = infoUser;

    if (!username || !password || !confirmPassword || !email || !age) {
      Alert.alert('Lỗi', 'Vui lòng điền đầy đủ thông tin.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Lỗi', 'Mật khẩu xác nhận không khớp.');
      return;
    }

    if (isNaN(Number(age))) {
      Alert.alert('Lỗi', 'Tuổi phải là số ');
      return;
    }

    try {
      const res = await fetch(`${URL}/user/sign-in`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
          email: email,
          age: age,
          role: 'user',
        }),
      });

      if (!res.ok) {
        let errorData = null;
        try {
          errorData = await res.json();
        } catch (jsonError) {
          console.error('Error parsing JSON response:', jsonError);
          throw new Error(`Error ${res.status}: Invalid JSON response`);
        }
        console.error('Error response from server:', errorData);
        throw new Error(`Error ${res.status}: ${errorData.message || 'Sign-in failed'}`);
      }

      const data = await res.json();
      Alert.alert('Đăng ký thành công', 'Bạn đã đăng ký tài khoản thành công!', [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
      console.log('Success:', data);

      router.replace('..');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={infoUser?.username}
        onChangeText={text => handleInputChange('username', text)}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Age"
        value={infoUser?.age}
        onChangeText={text => handleInputChange('age', text)}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={infoUser?.email}
        onChangeText={text => handleInputChange('email', text)}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={infoUser?.password}
        onChangeText={text => handleInputChange('password', text)}
        secureTextEntry
      />

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={infoUser?.confirmPassword}
        onChangeText={text => handleInputChange('confirmPassword', text)}
        secureTextEntry
      />

      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  loginButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  btnRegister: {
    marginTop: 10,
  },
  txtBtnRegister: {
    color: '#007bff',
  },
  registerButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  registerButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
