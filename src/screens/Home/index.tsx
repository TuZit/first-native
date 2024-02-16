import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, ScrollView, Button} from 'react-native';

const Home = () => {
  const navigation = useNavigation<any>();

  return (
    <ScrollView>
      <Text>Home</Text>
      <Button
        title="Go to FlexBox"
        onPress={() => navigation.navigate('FlexBox')}
      />
      <Button
        title="Go to Learn First1"
        onPress={() => navigation.navigate('LearnFirst')}
      />
    </ScrollView>
  );
};

export default Home;
