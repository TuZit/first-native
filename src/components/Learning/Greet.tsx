import {Text, View, StyleSheet} from 'react-native';
import React from 'react';

type Props = {
  name: string;
};

const Greet = (props: Props) => {
  const {name} = props;

  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.titleBold]}>Hello {name}</Text>
    </View>
  );
};

export default Greet;

const styles = StyleSheet.create({
  container: {flex: 1, padding: 60},
  text: {color: 'blue'},
  titleBold: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
