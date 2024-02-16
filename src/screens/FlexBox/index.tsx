import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, ScrollView, Text, View} from 'react-native';

const FlexBox = () => {
  const navigation = useNavigation<any>();

  return (
    <ScrollView>
      <View>
        <Text>aaaaaa</Text>
        <Text>bbbbbb</Text>
        <Text>cccccc</Text>
      </View>
      <View>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
        <Button
          title="Go to Learn First"
          onPress={() => navigation.navigate('LearnFirst')}
        />
      </View>
    </ScrollView>
  );
};

export default FlexBox;
