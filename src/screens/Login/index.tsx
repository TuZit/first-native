import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  Image,
  Platform,
  Switch,
} from 'react-native';

type Error = {
  username?: string;
  password?: string;
};

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<Error>({});
  const [remember, setRemember] = useState(false);

  const validateForm = () => {
    let errors: Error = {} as Error;

    if (!username) errors.username = 'Username is required';
    if (!password) errors.password = 'Password is required';

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setUsername('');
      setPassword('');
      setErrors({});
    }
  };

  return (
    // component KeyboardAvoidingView giúp cho khi ta nhập vào trường input thì bàn phím của đt sẽ đc bật lên
    // Nó sẽ tự động điều chỉnh height, position hoặc padding phía dưới dựa trên chiều cao bàn phím để vẫn
    // hiển thị trong khi bàn phím ảo được hiển thị.
    <KeyboardAvoidingView
      // behavior='padding': tự động thêm 1 phần padding phía dưới bàn phím
      behavior='padding'
      // Thêm khoảng offset trên để tránh vỡ layout
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
      style={styles.container}
    >
      <View style={styles.form}>
        <Image source={require('@/assets/adaptive-icon.png')} style={styles.iconImage} />
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter your username'
          value={username}
          onChangeText={setUsername}
        />
        {errors.username ? <Text style={styles.errorText}>{errors.username}</Text> : null}

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter your password'
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}

        <View style={styles.rememeberContainer}>
          <Text>Remember</Text>
          <Switch value={remember} onChange={() => setRemember(!remember)} />
        </View>

        <Button title='Login' onPress={handleSubmit} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  form: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  iconImage: {
    width: 200,
    height: 400,
    alignSelf: 'center',
    marginBottom: 50,
  },
  rememeberContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    columnGap: 20,
    marginBottom: 16,
  },
});

export default Login;
