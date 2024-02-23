import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Switch, Text, TextInput, View } from 'react-native';

const RNForm = () => {
  const [name, setName] = useState('');
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={setName}
        placeholder='Nhap ten may vao day'
        /* prop này để làm cho text nhập vào thành dấu *** để ẩn in4 kiểu mật khẩu */
        // secureTextEntry
        /* chỉ định kiểu cho bàn phím trên đt */
        // keyboardType='web-search'
        autoCorrect={false}
        autoCapitalize='characters'
        // editable={false}
      />

      {/* Cái này nôm na kiểu TextArea */}
      <TextInput style={[styles.textInput, styles.textInputMulti]} multiline />
      <View>
        <Text>My name is: {name}</Text>
      </View>
      <View style={styles.switchContainer}>
        <Text>Switch</Text>
        <Switch thumbColor={'#ccc'} onChange={() => setToggle(!toggle)} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  textInput: {
    height: 40,
    padding: 12,
    margin: 10,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  text1: {
    color: '#000',
    padding: 10,
  },
  textInputMulti: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  switchContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
});

export default RNForm;
