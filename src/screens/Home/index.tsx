import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, Button, View, SafeAreaView, StyleSheet, Platform } from 'react-native';

const Home = () => {
  const navigation = useNavigation<any>();

  return (
    // SafeAreaView: hoạt động với MacOS, kiểu phần content sẽ nằm dưới phần tai thỏ, k bao gồm thanh trạng thái trên-dưới
    <SafeAreaView style={styles.safeView}>
      <View>
        <Text style={styles.text1}>Home</Text>
        <Button title='Go to FlexBox' onPress={() => navigation.navigate('FlexBox')} />
        <Button title='Go to Learn First1' onPress={() => navigation.navigate('LearnFirst')} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: 'plum',
  },
  text1: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    ...Platform.select({
      ios: {
        // Chỉ định style cho text ở IOS
      },
      android: {
        // Chỉ định style cho text ở Andoid
      },
    }),
  },
});

export default Home;
