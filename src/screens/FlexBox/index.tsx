import { useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';

const FlexBox = () => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  console.log(`width: ${windowWidth}, height: ${windowHeight}`);

  const route = useRoute();
  console.log(route);

  return (
    <View style={styles.container}>
      <Text style={styles.box}>aaaaaa</Text>
      <Text style={styles.box}>bbbbbb</Text>
      <Text style={styles.box}>cccccc</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Mặc định thì block luôn có flex theo chiều dọc từ trên xuống
    // flex: 1 là để chỉ định chiếm hết màn hình
    flex: 1,
    // flexDirection: 'row',
    // D.m vì là mặc định chia theo trục dọc nên lộn chiều với flex-box truyền thống CSS
    justifyContent: 'flex-end',
  },
  box: {
    padding: 10,
    backgroundColor: '#3bc496',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default FlexBox;
